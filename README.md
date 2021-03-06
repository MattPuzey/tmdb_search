## The Movie Database frontend

A simple GUI for TMDB API text searches.

## Introduction

This demo is a dockerised application that can perform simple text searches against the [The Movie DB API](https://www.themoviedb.org/documentation/api).

## Prerequisites

For MacOS users:
* Docker for Mac v 17.06 - 17.12
* A recent installation of nodeJS (~v8.8.1)


For linux distributions (untested):
* A recent Docker installation  
* A recent installation of nodeJS (~v8.8.1)


## Run the demo

```
./run.sh app <api_key>
```
The application will be available on: [localhost:8888](http://localhost:8888). Successful searches will return film titles from the database.
Searches should be as specific as possible as the application collates results from a multiple page search where there are enough results to
trigger pagination on the TMDB API. Where pagination is present in a result-set there will be a short delay in the repsonse to the client.

![Demo](./images/demo.png)


## Teardown
Once you're finished with the demo there are some cleanup functions to clear away unwanted images and containers:
```
./run.sh clearIntermediateImages
./run.sh clearAllContainers
```   
