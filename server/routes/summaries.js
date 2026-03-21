const express = require('express');
const router = express.Router();
const summariesController = require('../controllers/summariesController');

router.get('/summaries', summariesController.getSummaries);
router.post('/summaries', summariesController.createSummary);

module.exports = router;