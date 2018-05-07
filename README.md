## The Movie Database frontend 

A simple GUI for TMDB API text searches.

Note: (add build instructions)

```
docker build . -t tmdb-search
```

```
docker rm -f tmdb-search
```

```
docker run -it -e "API_KEY=<api_key>" --publish 8888:8888 --name tmdb-search tmdb-search
```