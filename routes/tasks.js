module.exports = (app) => {
  const { Tasks } = app.db.models;

  app.get('/tasks', (req, res) => {
    Tasks.findAll({}).then((tasks) => {
      res.json({ tasks });
    });
  });
};
