const express = require('express');
const router = express.Router();
const UserGroupMapping = require('../models/UserGroupMapping');

router.get('/', async (req, res) => {
  try {
    let userGroup = await UserGroupMapping.findAll();
    res.status(200).json(userGroup);
  } catch (error) {
    res.send(error);
  }
});

router.post('/add', async (req, res) => {
  let {submodule_id,usergroup_id} = req.body;

  // Insert into table
  try {
    let userGroup = await UserGroupMapping.create({
      submodule_id,
      usergroup_id
    });
    res.json(userGroup);
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  let { submodule_id,usergroup_id } = req.body;
  try {
    let userGroup = await UserGroupMapping.findByPk(req.params.id);
    userGroup.update({
      submodule_id,
      usergroup_id
    });
    res.json(userGroup);
  } catch (error) {
    res.json(error);
  }
});

//delete the table
router.delete('/:id', async (req, res) => {
  let deleteUserGroup = await UserGroupMapping.findByPk(req.params.id);
  try {
    deleteUserGroup.destroy();
    res.json({ message: 'sucessfully deleted' });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
