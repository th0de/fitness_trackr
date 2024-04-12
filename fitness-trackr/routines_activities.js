const client = require('./client.cjs');

const routinesActivities = async(routines_id, activities_id) => {
  try {
    await client.query(`
      INSERT INTO routinesActivities
      (routines_id, activities_id)
      VALUES 
      ('${routines_id}', '${activities_id}');
     `);
   } catch(err) {
    console.log(err);   
  }
}


module.exports = {
  routinesActivities
};
