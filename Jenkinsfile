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
                        cd  surveyBackend
                        echo "Current dir: $(pwd)"
                        mvn -f pom.xml clean package
                        cd ../
                    '''
                }
            }    
        } 
        stage("building docker image") {
            steps {
                echo 'creating docker images'
                script {
                    def backendImage = docker.build("mulukenh/surveybackend:${env.BUILD_ID}","-f surveybackend.dockerfile .") 
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        backendImage.push()
                    }   
                }
            }
        }   
        stage("Deploying to Rancher") {
            steps {
                script {
                    sh 'kubectl set image deployment/surveybackend-app surveybackend-app=mulukenh/surveybackend:${env.BUILD_ID} -n survey-backend'
                }
            }    
        }    
    }
}

