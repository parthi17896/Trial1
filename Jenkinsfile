pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                
                bat 'k6 run API2.js'
                
            }
        }
    }
}
