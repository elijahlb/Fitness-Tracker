const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
   const entries = await LogEntry.find();
   res.json(entries);
} catch (error) {
    next(error);
  }
});

router.post('/api/exercise', async (req, res, next) => {
    try {
    const logEntry = new LogEntry({
        exercise: req.body.exercise,
        reps: req.body.reps,
        sets: req.body.sets,
        duration: req.body.duration,
        notes: req.body.notes
    });
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
    } catch(error) {
        console.log(error.name)
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
});


module.exports = router;