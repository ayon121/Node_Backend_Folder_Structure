const express = require('express');
const { getAllTasks , createTask } = require('../controllers/taskController');

const router = express.Router();

// Route to get all tasks
router.get('/', getAllTasks);

// new route and import function from controllers
router.get('/:id' , createTask )

module.exports = router;
