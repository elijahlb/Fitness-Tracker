// /routes/productRoutes.js
const mongoose = require('mongoose');
const Excercise = mongoose.model('LogEntry');

module.exports = (app) => {

  app.get('/api/excercise', async (req, res) => {
    let excercises = await Excercise.find();
    return res.status(200).send(excercises);
  });

  app.post('/api/excercise', async (req, res) => {
    let excercises = await Excercise.create(req.body);
    return res.status(201).send({
      error: false,
      excercises
    })
  })


}