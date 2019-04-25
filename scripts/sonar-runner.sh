#!/bin/bash

export SONARQUBE_SKIPPED=false
export SONARQUBE_SCANNER_PARAMS='{ "sonar.scanner.skip" : "true" }'

if ! [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    sonar-scanner \
        -Dsonar.projectKey=OpenCerts_opencerts-website \
        -Dsonar.organization=opencerts \
        -Dsonar.sources=. \
        -Dsonar.host.url=https://sonarcloud.io \
        -Dsonar.login=${SONAR_LOGIN} \
        -Dsonar.pullrequest.key=${TRAVIS_PULL_REQUEST} \
        -Dsonar.pullrequest.branch=${TRAVIS_PULL_REQUEST_BRANCH}
elif [ "${TRAVIS_PULL_REQUEST}" = "master" ]; then
    sonar-scanner \
        -Dsonar.projectKey=OpenCerts_opencerts-website \
        -Dsonar.organization=opencerts \
        -Dsonar.sources=. \
        -Dsonar.host.url=https://sonarcloud.io \
        -Dsonar.login=${SONAR_LOGIN}
fi;
