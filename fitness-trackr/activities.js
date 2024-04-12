const createActivities = async(activities_id) => {
  try{
    await client.query(`
    INSERT INTO activities (name)
    VALUES ('${activities_id}')
    INSERT INTO activities (id)
    VALUES ('${activities_id}')
    INSERT INTO activities (description)
    VALUES ('${activities_id}) `);
    return activities_id; 
  }catch (error) {
  console.log(error);
  }
}

const getActivities = async () => {
  try{
    await client.query(`
    SELECT id FROM activities
    SELECT name FROM activities
    SELECT`)
    return getActivities;
  } catch (error) {
  console.log(error);
  }
}

module.exports = {
  createActivities
}