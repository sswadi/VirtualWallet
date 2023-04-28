const express = require('express');
const router = express.Router();

const userInfoController = require('../controllers/signIn');
const homeController = require('../controllers/home');

router.get('/', userInfoController.signUp); 
router.get('/signIn', userInfoController.signIn); 

router.get('/home', userInfoController.home); 



module.exports = router;