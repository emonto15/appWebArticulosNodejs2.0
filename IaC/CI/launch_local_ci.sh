#!/usr/bin/env bash
docker-compose -f ./docker-compose.yml -e JENKINS_HOME=/Users/ejrmontoya/Documents/Monitoria/Jenkins -e SONAR_HOME=/Users/ejrmontoya/Documents/Monitoria/Sonarqube up
docker exec -u root jenkins chmod 777 /var/run/docker.sock
