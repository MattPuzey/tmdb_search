## The Movie Database frontend 

A simple GUI for TMDB API text searches.

## Introduction 

This demo is a dockerised application that can perform simple text searches against the TMDB API.

## Prerequisites

For MacOS users:
* Docker for Mac v 17.06 - 17.12
    

For linux distributions (untested):
* A recent Docker installation  

## Run the demo
```
./run.sh app <api_key>
```

## Teardown
Once you're finished with the demo there are some cleanup functions to clear away unwanted images and containers:
```
./run.sh clearIntermediateImages
./run.sh clearAllContainers
```   