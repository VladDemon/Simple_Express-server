const express = require('express');
const { createUser } = require('../controllers/createUserController.js');
const { updateUser } = require('../controllers/uppdateUserController.js');
const { getUsers } = require('../controllers/getUsersController.js');

const router = express.Router();

router.post('/create', createUser);
router.put('/userUpdate/:id', updateUser);
router.get('/users', getUsers);

module.exports = router;