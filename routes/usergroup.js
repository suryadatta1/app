const express = require('express');
const router = express.Router();
const UserGroup = require('../models/UserGroup');

router.get('/', async (req, res) => {
  try {
    let userGroup = await UserGroup.findAll();
    res.status(200).json(userGroup);
  } catch (error) {
    res.send(error);
  }
});

router.post('/add', async (req, res) => {
  let name = req.body.name;

  // Insert into table
  try {
    let userGroup = await UserGroup.create({
      name,
    });
    res.json(userGroup);
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  let { name } = req.body;
  try {
    let userGroup = await UserGroup.findByPk(req.params.id);
    userGroup.update({
      name,
    });
    res.json(userGroup);
  } catch (error) {
    res.send(error);
  }
});

//delete the table
router.delete('/:id', async (req, res) => {
  let deleteUserGroup = await UserGroup.findByPk(req.params.id);
  try {
    deleteUserGroup.destroy();
    res.json({ message: 'sucessfully deleted' });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
