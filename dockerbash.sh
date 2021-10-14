#! /bin/bash
npm install
npm build
docker build -t restapi:latest .
