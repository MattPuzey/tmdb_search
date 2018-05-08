FROM python:3.6-alpine
MAINTAINER Matthew Puzey "mpuzey1@outlook.com"

RUN mkdir -p   /tmdb
COPY app /tmdb/app
COPY main.py /tmdb/main.py
COPY config.py /tmdb/config.py
COPY static /tmdb/static
COPY requirements.txt /tmdb/requirements.txt


WORKDIR /tmdb
RUN apk add --update \
    py-pip

RUN pip3 install -r requirements.txt

CMD ["python3", "-u", "main.py"]
