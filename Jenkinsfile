pipeline {
    agent { label 'vinod' }

    stages {
        stage('code') {
            steps {
                echo 'This is cloning of the code'
                git url: 'https://github.com/iam-Prasann/Pulse.git', branch: 'main'
            }
        }
        stage('build') {
            steps {
                echo 'This is building of code'
                sh 'docker build -t pulse-app .'
            }
        }
        stage('test') {
            steps {
                echo 'This is testing of the code'
            }
        }
        stage('push') {
            steps {
                echo 'This is pushing the image'
                withCredentials([usernamePassword(credentialsId: 'DockerHubCred', usernameVariable: 'DockerHubUser', passwordVariable: 'DockerHubPass')]) {
                    sh 'docker image tag pulse-app:latest ${env.DockerHubUser}/pulse-app:latest'
                    sh 'docker push ${env.DockerHubUser}/pulse-app:latest'
                }
            }
        }
        stage('deploy') {
            steps {
                echo 'this is deployment of the code'
                sh 'docker compose up -d'
            }
        }
    }
}
