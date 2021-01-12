## Pre Install
- Install npm
- Install sequelize
```sh
$ npm install -g sequelize-cli
```
- You have install mysql with task_tracker.db

## Install
- Clone this repository
```sh
$ git clone https://github.com/daengagiel17/task-tracker-backend.git
```
or
```sh
$ git clone git@github.com:daengagiel17/task-tracker-backend.git
```
or you can download it and extract the zip file.
- Move to directory task-tracker
```sh
$ cd task-tracker-backend
```
- Run this command to install npm modul
```sh
$ npm install
```
- Migrate database 
```sh
$ sequelize db:migrate
```
- Fill database with data dummy 
```sh
$ sequelize db:seed:all
```
- And run the application
```sh
$ npm start
```

## Endpoint 
- Get list task (GET) 
```sh
baseUrl/task
```
- Update task (GET)
```sh
baseUrl/task/:taksId
```
- Set time (POST)
```sh
baseUrl/time
```

## Component 
- Using sequalize to migrate and seed database