pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'http://localhost:3000/d/DVEBiNJ4z/k6-load-testing-result_1?orgId=1&refresh=5s'
                bat 'k6 run --out influxdb=http://localhost:8086/jenkins API2.js'
                
                
            }
        }
    }
}
