### Shopping Cart Server

This is a RESTful API built for the Josh.ai shopping cart coding quiz.

Project layout based on https://github.com/golang-standards/project-layout

To get started, run:

```
$ make build && ./bin/app
```

or

```
$ make run
```

The app will be served locally on port `3000`

#### Available routes

| Method | Route           | Description                                        |
| ------ | --------------- | -------------------------------------------------- |
| GET    | `/items`        | Returns a list of shopping items                   |
| GET    | `/cart`         | Returns a list of items in a user's cart           |
| POST   | `/cart`         | Adds an item to user's cart                        |
| PATCH  | `/cart/:itemId` | Updates the quantity of an item in the user's cart |
| DELETE | `/cart/:itemId` | Removes an item from the user's cart               |
