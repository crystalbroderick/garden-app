# Balcony Botany

Gardening app for helping city dwellers and/or people with small patios for growing their own fresh veggies, herbs, and fruit in containers.

Currently using data containing 41\* common plants that's stored in Postgres

## Technologies Used

- Postgres
- SQL
- Node
- Express
- React
- Typescript
- Bootstrap
- SCSS
- CSS

Lazy for code splitting - reduced loading time!

React query - less network requests!

Rest API && CRUD operations

## User Stories

- [x] As an admin, I want to access to create, read, update and delete plants in the database
- [x] As an admin, I want to be authenticated to prevent attacks by using protected routes
- [x] As a basic user, I want to view a list of plants, so that I can decide which ones I want to grow
- [x] As a basic user, I want to view information about a plant, so that I can learn about the plant and how to properly take care of it.

## Milestones

| Milestone   | Description                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Planning    | tech stack, user requirements / stories, user flow, wire frames, mission objectives & statement, scope, erd, architecture design |
| Development | create database, import gardening csv, user requirements verification                                                            |
| Testing     | analyze results, address any bugs                                                                                                |
| Finalize    | publish docs, demo, deploy production                                                                                            |

## Run App

### Frontend

1. clone repo
2. navigate to frontend directory

   ```bash
   cd /frontend
   ```

3. install all modules:

   ```bash
   npm install
   ```

4. start development server:

   ```bash
   npm run dev
   ```

### Backend

Prerequisites:

- open backend folder in another terminal
- create .env file with all variables in /backend/constants/index.js to hide sensitive information from version control
- update config/db.js with database name

Run:

1. Open another terminal

2. navigate to backend directory

   ```bash
   cd /backend
   ```

3. install all modules:

   ```bash
   npm install
   ```

4. start development server:

   ```bash
   npm run dev
   ```
