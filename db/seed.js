// create a database called fitness-trackr

const { fitnessTracker } = require('./fitness_trackr.js');
const fitnessTracker = new fitnessTracker('posgres://localhost8080/fitness_trkr');
const client = require('./client.js');
const dropTables = require("./");



// seed the database with an activities, routines and routines_activities table

const dropTables =async () => {
  
  try{
    
    await client.query(`
    DROP TABLE IF EXISTS activities;
    DROP TABLE IF EXISTS routines
    DROP TABLE IF EXISTS routines_activities`
    ); 

  } catch (error) {
  console.log (error)
  }
}

// an activities table with an id, name, and description

// a routines table with an id, is_public, name, and goal

// a routines_activities table with an id, routine_id, activity_id, count

const createTables = async () => {
  try {
    
    await client.query(`
    
    CREATE TABLE activities(
      id SERIAL PRIMARY KEY,
      name VARCHAR(20),
      description,
    );
  
    CREATE TABLE routines(
      id SERIAL PRIMARY KEY,
      is_public BOOLEAN,
      name VARCHAR(20),
      goal VARCHAR(20),
    );
    
    CREATE TABLE routines_activities(
      id SERIAL PRIMARY KEY,
      routine_id INTEGER REFERENCES routines (id),
      activity_id INTEGER REFERENCES activities (id),
      count VARCHAR(20),
    )

  `);

  } catch (error) {
    console.log(error)
  }
}

// create some mock data in each table


const syncAndSeed = async () => {
  try {
    await client.connect ();
    console.log(`client connected`);
    
    await creatTables ();
    console.log('tables created');
    
    await dropTables ();
    console.log(`tables dropped`);

    await createActivities('Hiking');
    await createActivities('Biking');
    await createActivities('Climbing');
    await createActivities('Swimming');
    await createActivities('Skiing');
    await createActiviteis('Riding');
    await createRoutines('Marathon');
    await createRoutines('Tri Atholon');
    await createRoutines('Gym');
    await createRoutines('Trad');
    await createRoutines('Bi Atholon');
    await createRoutines('Groomers');
    await createRoutines('Trees/BackCountry')
    await createRoutines('Park');
  } 
  catch (error) {
    console.log(error)
  }
  const activities = await getOwners();
  console.log(activities);
} 
