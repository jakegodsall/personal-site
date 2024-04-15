FROM python:3.12-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app/

COPY requirements.txt .

RUN apk add --no-cache --virtual .build-deps gcc musl-dev mariadb-dev \
    && apk add libffi-dev
RUN pip install -r requirements.txt

COPY . .
