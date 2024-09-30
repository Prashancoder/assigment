const Task = require('../models/taskModel');
const User = require('../models/userModel');

// Create task
exports.createTask = async (req, res) => {
  const { title, description, dueDate, status, priority, assignedUser } = req.body;

  try {
    const task = new Task({
      title, description, dueDate, status, priority, assignedUser
    });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Get tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedUser: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update task
exports.updateTask = async (req, res) => {
  const { title, description, dueDate, status, priority } = req.body;

  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    task = await Task.findByIdAndUpdate(req.params.id, { $set: { title, description, dueDate, status, priority } }, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
