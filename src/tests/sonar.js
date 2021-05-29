const scanner = require('sonarqube-scanner');

// Dotenv handy for local config & debugging
require('dotenv').config()
 
scanner(
  {
    serverUrl : 'https://sonarcloud.io',
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.projectName': 'nodejs-demo-app',
      'sonar.organization': 'olucasfagundes',
      'sonar.projectDescription': 'Simple Demo Node.js Express Web App that builds and Deploy a Docker Image',
    }
  },
  () => process.exit()
)