#!/bin/bash
#set -e

function app() {
    local apiKey=$1

    docker build . -t tmdb-search
    docker rm -f tmdb-search
    docker run -it -e "API_KEY=${apiKey}" --publish 8888:8888 --name tmdb-search tmdb-search
}

function clearIntermediateImages() {
    docker rmi $(docker images | grep "^<none>" | awk "{print $3}")
}

function clearAllContainers() {
    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)
}

$@