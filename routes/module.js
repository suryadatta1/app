const express = require('express');
const router = express.Router();
const Module = require('../models/Module');

// Get gig list
router.get('/', async (req, res) => {
  try {
    let module = await Module.findAll();

    res.status(200).json(module);
  } catch (error) {
    res.json(error);
  }
});

// Add a gig
router.post('/add', async (req, res) => {
  let name = req.body.name;

  // Insert into table
  try {
    let module = await Module.create({
      name,
    });
    res.json(module);
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  let { name } = req.body;
  try {
    let module = await Module.findByPk(req.params.id);
    module.update({
      name,
    });
    res.json(module);
  } catch (error) {
    res.json(error);
  }
});

//delete the table
router.delete('/:id', async (req, res) => {
  let deleteModule = await Module.findByPk(req.params.id);
  try {
    deleteModule.destroy();
    res.json(200, {
      message: 'successfully deleted',
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
