# To-Do-List

To-Do-List is mini-project made with Flask and MongoDB. Dockerfile is also available to make docker image and docker containers.

## Built using :
```sh
	Flask : Python Based mini-Webframework
	MongoDB : Database Server
	Pymongo : Database Connector ( For creating connectiong between MongoDB and Flask )
	HTML5 (jinja2) : For Form and Table
```

## Set up environment for using this repo:
```
Install Python ( If you don't have already )
	$ sudo apt-get install python

Install MongoDB ( Make sure you install it properly )
	$ sudo apt install -y mongodb


Install Dependencies of the application (Flask, Bson and PyMongo)
	$ pip install -r requirements.txt
```

## Run the application
```
Run MongoDB
1) Start MongoDB
	$ sudo service mongod start
2) Stop MongoDB
	$ sudo service mongod stop

Run the Flask file(app.py)
	$ FLASK_ENV=development python app.py

Go to http://localhost:5000 with any of browsers and DONE !!
	$ open http://localhost:5000

To exit press Ctrl+C
```

## Using [Docker](https://www.docker.com) [Docker-Compose](https://docs.docker.com/compose)

Make sure that you are inside the project directory, where `docker-compose.yaml` file is present. Now, building and running the application server container and mongodb container using `docker-compose` :
```
Building or fetching the necessary images and later, creating and starting containers for the application
    $ docker-compose up -d

Go to http://localhost:5000 with any of browsers and DONE !!
    $ open http://localhost:5000
```

### Running, Debugging and Stopping the application under the hood
```
For almost all of the `docker-compose` commands, make sure that you are inside the project directory, where `docker-compose.yaml` file is present.

Passing `-d` flag along with docker-compose, runs the application as daemon
    $ docker-compose up -d

Seeing all of the logs from the application deployed.
    $ docker-compose logs

Stopping the application
    $ docker-compose down
```

## Screenshot :

![Screenshot of the Output](https://github.com/CoolBoi567/ToDo-List-using-Flask-and-MongoDB/blob/master/static/images/screenshot.jpg?raw=true "Screenshot of Output")

Thanks to Twitter for emoji support with [Twemoji](https://github.com/twitter/twemoji).

Made with ❤️ from Nepal 🇳🇵
