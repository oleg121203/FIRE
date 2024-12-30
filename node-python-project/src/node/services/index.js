// index.js
const express = require('express');
const router = express.Router();

// Example service route
router.get('/example', (req, res) => {
    res.send('This is an example service response');
});

module.exports = router;