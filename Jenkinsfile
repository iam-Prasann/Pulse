pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'pulse-main'
    NODE_ENV = 'production'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t ${DOCKER_IMAGE}:latest .'
      }
    }

    stage('Archive Artifact') {
      when {
        expression { return fileExists('dist') }
      }
      steps {
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }
  }

  post {
    success {
      echo 'Build and Docker image creation completed successfully.'
    }
    failure {
      echo 'Pipeline failed. Check the console output for details.'
    }
  }
}
