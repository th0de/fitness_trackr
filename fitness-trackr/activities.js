const createActivities = async() => {
  try{
    await client.query(`
    INSERT INTO activities (name)
    VALUES ('${createActivities}')
    INSERT INTO activities (id)
    VALUES ('${createActivities}')
    INSERT INTO activities (description)
    VALUES ('${createActivities}) `); 
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
  } catch (error) {
  console.log(error);
  }
}

module.exports = {
  createActivities
}