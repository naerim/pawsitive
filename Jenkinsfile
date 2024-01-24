pipeline {
  agent any
  environment {
    REPO = "s10-webmobile1-sub2/S10P12C111"
  }
  stages {
    stage('build') {
      steps {
        dir("./backend") {
          sh './gradlew clean build'
        }
      }
    }
  }
}
