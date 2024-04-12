const createRoutines = async(routine_id) => {
  try{
    await client.query(`
    INSERT INTO routines (id)
    VALUES ('${routine_id}')
    INSERT INTO routines (is_public)
    VALUES ('${routine_id}')
    INSERT INTO routines (name)
    VALUES ('${routine_id})
    INSERT INTO routines (goal) `); 
    return createRoutines;
  }catch (error) {
  console.log(error);
  }
}

const getRoutines = async () => {
  try{
    await client.query(`
    SELECT id FROM routines
    SELECT is_public FROM routines
    SELECT name FROM routines
    SELECT goal FROM routines
    `)
    return rows;
  } catch (error) {
  console.log(error);
  }
}

module.exports = {
  createRoutines
}

//a routines table with an id, is_public, name, and goal