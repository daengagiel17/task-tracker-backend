const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Task Tracker Server Connect!' });
});

const task = require('./task');
routes.use('/task', task);

const time = require('./time');
routes.use('/time', time);

module.exports = routes;