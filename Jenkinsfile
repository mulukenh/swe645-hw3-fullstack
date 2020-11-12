pipeline {
    agent any 

    stages {
        // stage("Creating *.war file and building docker image") {
        //     steps {
        //         script {
        //             checkout scm 
        //             sh 'rm -rf *.war'
        //             sh 'jar -cvf SurveyHomework.war -C SurveyHomework/WebContent/ .'
        //             def surveyImage = docker.build("mulukenh/surveyhomework:${env.BUILD_ID}")
        //             docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
        //                 surveyImage.push()
        //             }   
        //         }
        //     }
        // }   
        stage("Deploying to Rancher") {
            steps {
                script {
                    sh 'kubectl set image deployment/survey-db-app surveydb=mulukenh/surveydb:latest -n survey-db'
                    sh 'kubectl set image deployment/surveybackend-app surveybackend=mulukenh/surveybackend:latest -n survey-backend'
                    sh 'kubectl set image deployment/surveyfrontend-app surveyfrontend=mulukenh/surveyfrontend:latest -n survey-frontend'
                }
            }    
        }         
    }
}
