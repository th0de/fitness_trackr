//create an Express server
const express = require('express');
const app = express ();
const { routines, activities, routines_Activities } = require();

app.get('/api/v1/activities', async(req, res, next) => {
  try {
    const activities = await getActivities();

    res.send(activities)
  } catch(err) {
    next(err);
  }
});

app.get('/api/v1/routines', async(req, res, next) => {
  try {
    const routines = await getRoutines();

    res.send(routines)
  } catch(err) {
    next(err);
  }
});

app.get('/api/v1/activities/:activityId', async(req, res, next) => {
  try {
    const activitiesId = await getActivitiesId();

    res.send(activitiesId)
  } catch(err) {
    next(err);
  }
});

app.get('/api/v1/routines/:routineId', async(req, res, next) => {
  try {
    const routinesId = await getRoutinesId();

    res.send(routinesId)
  } catch(err) {
    next(err);
  }
});

app.post('/api/v1/activities', async(req, res, next) => {
  try{
    const { id, name, description }
    const activities = await getActivities();
    res.send(activities)
  }catch(err){
    next(err);
  }
});

app.post('/api/v1/routines', async(req, res, next) => {
  try{
    const {id, is_public, name, goal} = req.body;
    const routines = await getRoutines();
    res.send(routines)
  }catch(err){
    next(err);
  }
});

app.post('/api/v1/routines_activities', async(req, res, next) => {
  try{
    const {id, routine_id, activity_id, count} = req.body;
    const routines_Activities = await getRoutines_Activities();
    res.send(routines_Activities)
  }catch(err){
    next(err);
  }
});


app.delete('/api/v1/activities/:activityId', async(req, res, next) => {
  try{
    res.destroy(activity_id)
  }catch(err){
    next(err);
  }
});

app.delete('/api/v1/routines/:routineId', async(req, res, next) => {
  try{
    res.destroy(routine_id)
  }catch(err){
    next(err);
  }
});




app.listen(8080, () => {
  console.log('Server is running on Port${8080}');
});

