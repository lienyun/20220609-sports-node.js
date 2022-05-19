const express = require('express');

const authController = require('../controllers/auth')

////////////////////////////////////////////////////////////


const router = express.Router();

router.get('/', authController.getIndex);

router.get('/login', authController.getLogin);

router.post('/login', authController.getLogin);

router.post('/logout', authController.postLogout);

//輸出router
module.exports = router;