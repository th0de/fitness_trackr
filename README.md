
## UNIT 4 - Block 33 Workshop: Fitness Trackr ##
 
## Overview ##
Complete the following coding challenges using what you know about Node.js runtime, Express.js CRUD routes, middleware, and PostgreSQL databases.

## Directions ##

create a database called fitness-trackr

seed the database with the following

an activities table with an id, name, and description

a routines table with an id, is_public, name, and goal

a routines_activities table with an id, routine_id, activity_id, count

mock data in each table

create an Express server

create the following routes

GET /api/v1/activities - sends back all activities
GET /api/v1/routines - sends back all routines
GET /api/v1/activities/:activityId - sends back a specific activity based on the id that is passed in
GET /api/v1/routines/:routineId - sends back a specific routine based on the id that is passed in
POST /api/v1/activities - adds a new activity to the database and sends the newly added activity back
POST /api/v1/routines - adds a new routine to the database and sends the newly added routine back
POST /api/v1/routines_activities/ - adds a new routines_activities to the database and sends the newly added routines_activities back 
DELETE /api/v1/activities/:activityId - removes an activity from the database and sends a successful or failed message
DELETE /api/v1/routines/:routineId - removes a routine from the database and sends a successful or failed message
## *STRETCH GOALS* ##
Create a front-end for your API that allows users to interact with the dataCreate a users table and add a createdBy field to the routines table that will link to a user