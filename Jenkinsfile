pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'http://localhost:3000/d/L4n81BT4z/k6-load-testing-results?orgId=1&refresh=5s'
                bat 'k6 run --out influxdb=http://localhost:8086/test API2.js'
                
                
            }
        }
    }
}
