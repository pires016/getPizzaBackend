const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async(req, res)=>{
    
    res.status(200).json([]);
});

router.post('/', async(req, res)=>{
    res.status(201).json([]);
});

module.exports = router