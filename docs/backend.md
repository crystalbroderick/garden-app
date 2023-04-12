# Backend docs

start server:

```bash
npm run dev
```

## Technologies

- NodeJs
- Express web framework
- Postgres (RDMS)

dependencies:

- sequelize: promise based Node.js object relational mapping (ORM) - layer connecting object oriented programs and relational databases
- pg pg-store: convert data into the postgresql hstore format
- cors: allows communication between client and server
- jsonwebtoken
- passport & passport jwt
  - When the server receives a request, it authenticates the cookie and restores the login session, thus authenticating the user. It then accesses or stores records in the database associated with the authenticated user.
- express-validator: check valid email / password

## Workflow

1. initialize node
2. connect to psql
3. project folder structure MVC architecture
4. add dependencies: npm i express sequelize pg pg-hstore cors --save
5. setup express web server
6. test basic route in Postman
7. configure postgresql database and sequelize
8. define sequelize model and call sync() in server.js
9. initialize sequelize for models
10. create models
11. create controllers with CRUD functions
12. define routes
13. test CRUD routes in Postman
14. Add authentication (MVC for auth; validators)
15. Finish login with jsonwebtoken and cookies
