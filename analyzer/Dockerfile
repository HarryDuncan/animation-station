# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

WORKDIR /analyzer

WORKDIR /analyzer

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python", "analyzer.py"]
