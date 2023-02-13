pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'http://localhost:3000/d/y05kZNJVz/jenkins_02?orgId=1&refresh=5s'
                bat 'k6 run --out influxdb=http://localhost:8086/jenkins1 API2.js'
                
                
            }
        }
    }
}
