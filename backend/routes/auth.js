const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res)=>{
    res.status(200).json({auth: true});
});

module.exports = router;