const express = require('express')
const { fetch_records } = require('../service/fetchRecords')

const router = express.Router();
//Health check
router.get('/health', (req, res) => {
    res.send('Health OK');
    });
//Records route
router.post('/records', fetch_records)

module.exports = router