const express = require('express');
const router = express.Router();

// this root is actually /shopping
router.get('/', (req, res) => {
    res.write('Go Shopping.');
    res.end();
});

router.get('/groceries', (req, res) => {
    res.write('Milk, eggs, bread, and butter.');
    res.end();
});

router.get('/clothes', (req, res) => {  
    res.write('Shirt, pants, socks, and shoes.');
    res.end();
});

module.exports = router;