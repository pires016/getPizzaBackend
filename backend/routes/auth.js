const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res)=>{
    const result = await User.findAll({
        where:{
            userName: req.body.userName,
            password: sha256("BBK879@%$"+req.body.password+"@#!TI-SENAC..$$7ARA")
        }
    });
    
    if(!result.length){
        res.status(401).json({auth: false});
    }

    const token = jwt.sign({id: result.id}, '@tiARA', {expiresIn: '999 years'});
    res.status(200).json({auth: true, token: token, type: result[0].type });
});

module.exports = router;