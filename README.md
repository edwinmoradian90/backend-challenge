# Backend Challenge

## Installation

First, clone the git repo.

```bash
git clone https://github.com/edwinmoradian90/backend-challenge
```

Next, you will need to install all necessary dependencies for both 'client' and 'server' applications.

```bash
cd client && npm install
cd ../server && npm install
```

Then, you will need a .env file to save your own database and token information. Change directories into the server application and create a new file called '.env'. In this file, you will specifiy your database username, password, host, your jwt token secret, and your dropbox token.

```env
DB_USER=yourusername
DB_PASSWORD=yourdbpassword
DB_HOST=yourdbhost //usually 127.0.0.1
DB_NAME=yourdbname
DB_DIALECT=yourdbdialect //will have to be postgres
JWT_SECRET=yoursecret
DROPBOX_TOKEN=yourdropboxtoken
```

After this, you should be ready to fire up both 'server' and 'client' applications. Starting in the client directory:

```bash
node app.js
```

Then in another terminal in the client directory:

```bash
npm run start
```

## Features

The main features of the application is that it can return user information in nested objects.

The way I acheived this was by using associations between three models: User, Company, and Address.

The address model is used in both the User and Company models. For the User model, I use the alias 'billingAddress' so that when I go to fetch the table, it would be returned as 'billingAddress'.

When a new user is created, we are actually creating four new tables: user, user company, company address, user address. Then when I query a user, I also return all other relevant data, excluding few key attributes.

## Authentication

The route that fetches a user from the database requires authentication. It uses JWT tokens to authenticate the route, and if the token exists and is valid, it will grant access to the users information.

If the token does not exist or is not valid, it will return a response status of either 400 or 401.

## Creating a JSON file and pushing to Dropbox

Finally, after fetching the user from the authenticated route, the application will then create a JSON file with the given information. It stores this file into the 'data' folder in the root directory. After it creates the file, it will then packup the information and send it the Dropbox account associated with the Dropbox token in the .env file.

A note about the current setup, it will overwrite and files with the same names.

## Testing the routes

There are three routes in total: users GET, users POST, and authentications GET.

Users GET requires an id in the URL, and it will fetch the given user, if it exists. The users POST route will create a new User from the client side or through Postman. Finally, the authentications GET route requires the JWT to be in the request headers. In Postman, there is an specific place for authorization tokens, but from the client side, the token would have to be placed specifically into the headers with the 'Authorization' key.

The token should include the word 'bearer' if you want to send the from the client to the server.

Postman can be used to test all three routes, with the routes being '/users/:id', '/users', and 'authentications'. To be able to successfully retrieve data results, you will need a JWT token from the authentications route, then you would need to save the token in the 'Authorization' field in Postman, and only then, will you be able to access user information.

This about sums up the project features and how to use them.

## Creator

Edwin Moradian
