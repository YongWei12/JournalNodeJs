const express = require('express');
const journalController = require('../controllers/journal')

const router = express.Router();


router.get('/', journalController.getIndex);
router.get('/create-entry', journalController.createEntry);

module.exports= router;