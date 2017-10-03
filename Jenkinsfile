pipeline {
    agent any

    tools {nodejs "node8.6"}

    stages {
        stage('build') {
            steps {
                tool name: 'node8.6'
                sh 'npm config set proxy http://proxy.cat.com:80'
                sh 'npm config set https-proxy http://proxy.cat.com:80'
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}