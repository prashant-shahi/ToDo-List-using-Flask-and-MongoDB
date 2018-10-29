# To-Do-List

To-Do-List is mini-project made with Flask and MongoDB.

## Built using :

	Flask : Python Based mini-Webframework
	MongoDB : Database Server
	Pymongo : Database Connector ( For creating connectiong between MongoDB and Flask )
	HTML5 (jinja2) : For Form and Table


## Set up environment for using this repo:

	Install Python ( If you don't have already )
		`sudo apt-get install python`
		
	Install MongoDB ( Make sure you install it properly )
		`sudo apt-get install -y mongodb-org`

	Install Dependencies of the application (Flask, Bson and PyMongo)
		pip install -r requirements.txt

## Set up environment using [Docker](https://www.docker.com)

	Pulling light MongoDB Docker image
		`$ docker pull mvertes/alpine-mongo`

	Building and running MongoDB server in docker
		`$ docker run -d -p 27017:27017 --name mongoclient mvertes/alpine-mongo`

	Building and running Flask server in docker
		`$ docker run -d -p 27017:27017 --link mongoclient --name todo-flaskapp .`
	

	
###  Running the application using Docker
	
	Running the  docker containers and attach
		$ docker start -ai mongoclient

	Running the flaskapp docker containers and attach
		$ docker start -ai todo-flaskapp

###  Stopping the application using Docker

	Stoping the mongodb containers
		$ docker stop mongoclient

	Stoping the flaskapp containers
		$ docker stop todo-flaskapp

## Run the application

	Run MongoDB
		1) Start MongoDB
			`sudo service mongod start`
		2) Stop MongoDB
			`sudo service mongod stop`
	
	Run the Flask file(app.py)
		`python app.py`

	Browse with any Browser to the following link and DONE !
		`http://localhost:5000'

	To exit press Ctrl+C

### Screenshot :

![Screenshot of the Output](https://github.com/CoolBoi567/To-Do-List---Flask-MongoDB-Example/blob/master/static/images/screenshot.png?raw=true "Screenshot of Output")


### Thanks to Twitter for emoji support with Twemoji :
	Twitter Open Source : https://github.com/twitter/twemoji

Made with ❤️ from Nepal
