const createRoutines = async() => {
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
}

const getRoutines = async () => {
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

module.exports = {
  createRoutines
}

//a routines table with an id, is_public, name, and goal