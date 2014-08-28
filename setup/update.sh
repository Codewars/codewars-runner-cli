#!/bin/sh

cd /codewars-runner
git pull
npm install
node pull

# delete old containers that are stopped but not removed
docker rm $(docker ps -a -q)

# delete old images that are taking up space
timeout 15 docker rmi $(docker images | grep "^<none>" | awk "{print $3}")
