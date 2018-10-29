FROM alpine:3.7

MAINTAINER Prashant Shahi "coolboi567@gmail.com"

COPY . /app

WORKDIR /app

RUN apk add --no-cache bash git nginx uwsgi uwsgi-python py2-pip \
	&& pip2 install --upgrade pip \
	&& pip2 install -r requirements.txt \
	&& rm -rf /var/cache/apk/*

EXPOSE 5000

ENTRYPOINT ["python"]

CMD ["app.py"]