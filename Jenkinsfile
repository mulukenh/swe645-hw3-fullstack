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
        stage("Clean up images and containers") {
            steps {
                script {
                    sh 'docker rmi -f $ (docker images -q)'
                    sh 'docker rm -f $ (ps docker -q -a)'
                }
            }    
        }        
    }
}

