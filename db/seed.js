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

    await createActivities(id='00'),('Hiking'),(description='Walking through variable terrain usually outdoors for pleasure and exercise.');
    await createActivities(id='01'),('Biking'),(description='Walking through variable terrain usually outdoors for pleasure and exercise.');
    await createActivities(id='02'),('Climbing'), (description='Walking through variable terrain usually outdoors for pleasure and exercise.');
    await createActivities(id='03'),('Swimming'), (description='Walking through variable terrain usually outdoors for pleasure and exercise.');
    await createActivities(id='04'),('Skiing'), (description='Walking through variable terrain usually outdoors for pleasure and exercise.');
    await createActiviteis(id='05'),('Riding'), (description='Walking through variable terrain usually outdoors for pleasure and exercise.');
    
    await createRoutines(id='0'),(is_public = true)('Marathon'),(goal= 'Run 24 miles');
    await createRoutines(id='1'),(is_public = true) ('Tri Atholon'),(goal='Run bike and swim 24 miles');
    await createRoutines(id='2'),(is_public = true) ('Gym'),(goal='Perform more perfect form and push harder climb routes than you would outdoors in repetition to increase athleticism');
    await createRoutines(id='3'),(is_public = true) ('Trad'),(goal='Make anchors outdoors while climbing either top rope or in lead to conquer a totally unprimed rock face');
    await createRoutines(id='4'),(is_public = true) ('Bi Atholon'),(goal='Run and swim 24 miles');
    await createRoutines(id='5'),(is_public = true) ('Groomers'),(goal='Speed through that corderoy');
    await createRoutines(id='6'),(is_public = true) ('Trees/BackCountry'),(goal= 'Smash pow')
    await createRoutines(id='7'),(is_public = true) ('Park'),(goal= 'Hit the jib girrafe, throw 1 japan and one boardslide (your choice of rail or tube) in the midsize park');
  } 
  catch (error) {
    console.log(error)
  }
  const activities = await getOwners();
  console.log(activities);
} 
