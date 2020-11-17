const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

router.get('/', async (req, res) => {
  try {
    let page = await Page.findAll();

    res.status(200).json(page);
  } catch (error) {
    res.json(error);
  }
});

router.post('/add', async (req, res) => {
  let { submodule_id, name, page_url } = req.body;

  // Insert into table
  try {
    let page = await Page.create({
      submodule_id,
      name,
      page_url,
    });
    res.json(page);
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  let { submodule_id, name, page_url } = req.body;
  try {
    let page = await Page.findByPk(req.params.id);
    page.update({
      submodule_id,
      name,
      page_url,
    });
    res.json(page);
  } catch (error) {
    res.json(error);
  }
});

//delete the table
router.delete('/:id', async (req, res) => {
  let deletePage = await Page.findByPk(req.params.id);
  try {
    deletePage.destroy();
    res.json(200, {
      message: 'successfully deleted',
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
