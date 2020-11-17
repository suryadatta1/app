const express = require('express');
const router = express.Router();
const SubModule = require('../models/SubModule');

router.get('/', async (req, res) => {
  try {
    let subModule = await SubModule.findAll();

    res.status(200).json(subModule);
  } catch (error) {
    res.json(error);
  }
});

router.post('/add', async (req, res) => {
  let { module_id, name } = req.body;

  // Insert into table
  try {
    let subModule = await SubModule.create({
      module_id,
      name,
    });
    res.json(subModule);
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  let { name, module_id } = req.body;
  try {
    let subModule = await SubModule.findByPk(req.params.id);
    subModule.update({
      name,
      module_id,
    });
    res.status(200).json(subModule);
  } catch (error) {
    res.status(404).send(error);
  }
});

//delete the table
router.delete('/:id', async (req, res) => {
  let deletesubModule = await SubModule.findByPk(req.params.id);
  try {
    deletesubModule.destroy();
    res.status(200).json({ message: 'Sub Module deleted Sucessfully' });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
