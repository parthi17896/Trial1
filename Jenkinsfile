pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                bat 'k6 run Timesheet1.js'
            }
        }
    }
}
