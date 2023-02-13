pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'http://localhost:3000/d/ReuNR5Aik/k6-dashboar?orgId=1&refresh=10s'
                bat 'k6 run --out influxdb=http://localhost:8086/jenkins API2.js'
                
                
            }
        }
    }
}
