pipeline {
    agent any 
    stages {
        stage("Clean up images and containers") {
            steps {
                script {
                    sh 'docker rm -f $(ps docker -q -a)'
                    sh 'docker rmi -f $(docker images -q)'
                }
            }    
        }      
        stage("Installing npm package and building angular app") {
            steps {
                script {
                    sh 'cd surveyFrontEnd && npm install'
                    sh 'ng build --prod && cd ..'
                    sh 'mvn -f surveyBackEnd/pom.xml clean package'
                    sh 'ls -a'
                    sh 'ls surveyBackEnd'
                }
            }    
        } 
        // stage("building docker image") {
        //     steps {
        //         echo 'creating docker images'
        //         script {
        //             checkout scm 
        //             def mysqldbImage = docker.build("mulukenh/surveydb:${env.BUILD_ID}","-f surveydb.dockerfile .")
        //             def backendImage = docker.build("mulukenh/surveybackend:${env.BUILD_ID}","-f surveybackend.dockerfile .") 
        //             def frontendImage = docker.build("mulukenh/surveyfrontend:${env.BUILD_ID}","-f surveyfrontend.dockerfile .") 
        //             docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
        //                 mysqldbImage.push()
        //                 backendImage.push()
        //                 frontendImage.push()
        //             }   
        //         }
        //     }
        // }   
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

