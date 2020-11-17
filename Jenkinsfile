pipeline {
    agent any 
    stages {
        stage('Clean') {
            steps {
                deleteDir()
            }
        }
        // stage("Clean up images and containers") {
        //     steps {
        //         script {
        //             sh script:'''
        //                 docker rm -f $(docker ps -a -q)
        //                 docker rmi -f $(docker images -q)
        //             '''
        //         }
        //     }    
        // }      
        stage("Installing npm package and building angular app") {
            steps {
                script {
                    checkout scm 

                    echo 'building executables started ...'
                    sh script:'''
                        #!/bin/bash
                        cd ./surveyFrontEnd
                        echo "Current dir: $(pwd)"
                        rm -rf node_modules && rm package-lock.json
                        npm install --verbose
                        ng build --prod && cd ../surveyBackend
                        echo "Current dir: $(pwd)"
                        mvn -f surveyBackEnd/pom.xml clean package
                        cd ..
                    '''
                }
            }    
        } 
        stage("building docker image") {
            steps {
                echo 'creating docker images'
                script {
                    def backendImage = docker.build("mulukenh/surveybackend:${env.BUILD_ID}","-f surveybackend.dockerfile .") 
                    def frontendImage = docker.build("mulukenh/surveyfrontend:${env.BUILD_ID}","-f surveyfrontend.dockerfile .") 
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
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

