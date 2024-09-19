const { getTaskCollection } = require('../models/Task');

// Controller function to get all tasks
async function getAllTasks(req, res) {
  try {
    const taskCollection = await getTaskCollection(); //import collections
    const tasks = await taskCollection.find().toArray();
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Create a new task
const createTask = async (req, res) => {
  const newTask = req.body;

  try {

    const taskCollection = await getTaskCollection(); //import collections
    const result = await taskCollection.insertOne(newTask);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' });
  }
};

module.exports = { getAllTasks  , createTask};
