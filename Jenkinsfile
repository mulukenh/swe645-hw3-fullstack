pipeline {
    agent any 
    stages {
        // stage("Clean up images and containers") {
        //     steps {
        //         script {
        //             sh 'docker ps -qa | xargs docker rm -f'
        //             sh 'docker images -qa | xargs docker rmi -f'
        //         }
        //     }    
        // }      
        stage("Installing npm package and building angular app") {
            steps {
                script {
                    checkout scm 
                    echo 'building executables started ...'
                    sh 'cd surveyFrontEnd'
                    sh 'rm package-lock.json && rm -rf node_modules'
                    sh 'npm install'
                    sh 'ng build --prod && cd ..'
                    sh 'mvn -f surveyBackEnd/pom.xml clean package'
                    sh 'ls -a'
                    sh 'ls surveyBackEnd'
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
        // stage("Deploying to Rancher") {
        //     steps {
        //         script {
        //             sh 'kubectl set image deployment/surveydb-app surveydb-app=mulukenh/surveydb:${env.BUILD_ID} -n survey-db'
        //             sh 'kubectl set image deployment/surveybackend-app surveybackend-app=mulukenh/surveybackend:${env.BUILD_ID} -n survey-backend'
        //             sh 'kubectl set image deployment/surveyfrontend-app surveyfrontend-app=mulukenh/surveyfrontend:${env.BUILD_ID} -n survey-frontend'
        //         }
        //     }    
        // }    
    }
}

