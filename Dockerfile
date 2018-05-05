FROM python:3.6-alpine
MAINTAINER Matthew Puzey "mpuzey1@outlook.com"

RUN mkdir -p   /tmdb
COPY api /tmdb/api
COPY main.py /tmdb/main.py
COPY requirements.txt /tmdb/requirements.txt


WORKDIR /tmdb
RUN "pip3 install -r requirements.txt"

CMD ["python3", "-u", "/tmdb/main.py"]
