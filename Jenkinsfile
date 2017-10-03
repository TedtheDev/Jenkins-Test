pipeline {
    agent any

    tools {nodejs "node8.6"}

    stages {
        stage('build') {
            steps {
                tool name: 'node8.6'
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}