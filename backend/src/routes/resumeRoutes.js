const express = require('express');
const { createResume, getResume, updateResume, deleteResume } = require('../controllers/resumeController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/resume', authenticateToken, createResume);
router.get('/resume', authenticateToken, getResume);
router.put('/resume/:id', authenticateToken, updateResume);
router.delete('/resume/:id', authenticateToken, deleteResume);

module.exports = router;
