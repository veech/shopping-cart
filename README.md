### Shopping Cart

#### Getting started

To run the app locally, you must have node v10.x and go v1.15.2 **OR** Docker installed

#### Running app using Docker

To start the app using Docker, you can simply run:

```
$ docker-compose up
```

This will build and run the React client and the Go API.

The react app will be available at http://localhost:3000 and the API will be available at http://localhost:8080

#### Running app without Docker

Make sure you have node v10.x and go v1.15.2 installed.

To start the server:

```
$ cd server
$ make run
```

To start the client:

```
$ cd client
$ npm install
$ npm start
```

The react app will be available at http://localhost:3000 and the API will be available at http://localhost:8080
