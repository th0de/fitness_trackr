const { createActivities } = require('./activities.js');
const { routinesActivities } = require('./routines_activities.js');

const routinesActivities = async() => { 
  try{
    try{
      await client.query(`
      INSERT INTO activities (name)
      VALUES ('${createActivities}')
      INSERT INTO activities (id)
      VALUES ('${createActivities}')
      INSERT INTO activities (description)
      VALUES ('${createActivities}) 
      `); 
 
    }catch (error) {
    console.log(error);
    }
  
  
  const getActivities = async () => {
    try{ 
      await client.query(`
      SELECT id FROM activities
      SELECT name FROM activities
      SELECT`)
    } catch(error) {
    console.log(error);
    }
  

  try{
    await client.query(`
    INSERT INTO routines (id)
    VALUES ('${createRoutines}')
    INSERT INTO routines (is_public)
    VALUES ('${createRoutines}')
    INSERT INTO routines (name)
    VALUES ('${createRoutines})
    INSERT INTO routines (goal) `);
    }
  catch (error) 
  {
  console.log(error);
  }
  
  
  try{
    
    await client.query(`
    SELECT id FROM routines
    SELECT is_public FROM routines
    SELECT name FROM routines
    SELECT goal FROM routines
    `)
    } catch (error) {
    console.log(error);
    } 
  }
  
  
  
  try{
    await client.query(`
    INSERT INTO routines (id)
    VALUES ('${createRoutines}')
    INSERT INTO routines (is_public)
    VALUES ('${createRoutines}')
    INSERT INTO routines (name)
    VALUES ('${createRoutines})
    INSERT INTO routines (goal) `);
    }catch (error) {
  console.log(error);
  }
  
  try{
    
    await client.query(`
    SELECT id FROM routines
    SELECT is_public FROM routines
    SELECT name FROM routines
    SELECT goal FROM routines
    `)
    } catch (error) {
    console.log(error);
    } 
  }catch (error){
    console.log(error);
  }
}
// a routines_activities table with an id, routine_id, activity_id, count

module.exports = {
  routinesActivities
};
