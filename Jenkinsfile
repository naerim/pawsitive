pipeline {
  agent any
    environment {
        AWS_PUBLIC_IP = '172.26.8.148'
        SSH_CMD = 'ssh -i /var/jenkins_home/.ssh/id_rsa ubuntu@i10c111.p.ssafy.io'
        DOCKER = 'sudo docker'
        repository = "sejinnnnnn/pawsitive_backend"  //docker hub id와 repository 이름
        DOCKERHUB_CREDENTIALS = credentials('dockerhub') // jenkins에 등록해 놓은 docker hub credentials 이름
        dockerImage = ''
      REPO = "s10-webmobile1-sub2/S10P12C111"
    }
    
  stages {

      //stage('SonarQube') {
      //
      //}

      stage('Build') {
              steps {
                dir('./backend') {
                  script {
                    sh "chmod +x ./gradlew"
                    sh './gradlew clean build'
                  }
                }
              }
            }

      stage('Build image') {
          steps {
              script {
                  // sh "cp ~/workspace/backend_please/backend/build/libs/backend-0.0.1-SNAPSHOT.jar ~/workspace/backend_please" // jar 파일을 현재 위치로 복사
                  dir('./backend') {
                    dockerImage = docker.build repository
                  }
              }
          }
      }

      stage('Login'){
          steps{
              sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin' // docker hub 로그인
          }
      }

      stage('Push image') {
          steps {
              script {
                sh 'docker push $repository' //docker push
              }
          }
      }

      stage('Clean image') {
        steps {
            sh 'docker rmi $repository' // docker image 제거
        }
      }

      stage('Deployment') {
        steps {
                script {
                            try {
                                sh '$SSH_CMD $DOCKER stop $repository'
                                sh '$SSH_CMD $DOCKER rm $repository'
                            } catch (e) {
                                sh 'echo "fail to stop and remove container"'
                            }
                            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                            // sh '$SSH_CMD $DOCKER login localhost:5000 -u $USERNAME -p $PASSWORD'
                        sh 'docker push $repository:latest'
                        sh '$SSH_CMD $DOCKER pull $repository:latest'
                        sh '$SSH_CMD $DOCKER run -p 50000:8080 $repository'
                        }
                }
      }

  }
    }