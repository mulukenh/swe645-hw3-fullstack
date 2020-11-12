pipeline {
    agent any 

    stages {
        stage("Creating *.war file and building docker image") {
            steps {
                echo 'creating docker images'
                script {
                    checkout scm 
                    def mysqldbImage = docker.build("mulukenh/surveydb:${env.BUILD_ID}","-f surveydb.dockerfile .")
                    def backendImage = docker.build("mulukenh/surveybackend:${env.BUILD_ID}","-f surveybackend.dockerfile .") 
                    def frontendImage = docker.build("mulukenh/surveyfrontend:${env.BUILD_ID}","-f surveyfrontend.dockerfile .") 
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        mysqldbImage.push()
                        backendImage.push()
                        frontendImage.push()
                    }   
                }
            }
        }   
        stage("Deploying to Rancher") {
            steps {
                script {
                    sh 'kubectl set image deployment/surveydb-app surveydb-app=mulukenh/surveydb:${env.BUILD_ID} -n survey-db'
                    sh 'kubectl set image deployment/surveybackend-app surveybackend-app=mulukenh/surveybackend:${env.BUILD_ID} -n survey-backend'
                    sh 'kubectl set image deployment/surveyfrontend-app surveyfrontend-app=mulukenh/surveyfrontend:${env.BUILD_ID} -n survey-frontend'
                }
            }    
        }         
    }
}


   pipeline {
        agent any
        stages {
            stage('Build image') {
                steps {
                    echo 'Starting to build docker image DB'
                    script {
                        def DB = docker.build("my-image:${env.BUILD_ID}","-f ${env.WORKSPACE}/db/Dockerfile .")
                        def nodejs = docker.build("my-image:${env.BUILD_ID}","-f ${env.WORKSPACE}/app/Dockerfile .") 
                        def php = docker.build("my-image:${env.BUILD_ID}","-f ${env.WORKSPACE}/php/Dockerfile .") 
                    }
                }
            }
        }
    }
