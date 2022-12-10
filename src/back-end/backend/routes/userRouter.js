const express = require('express')
const router = express.Router()
const {registerUser, gradeUser, loginUser} = require('../controllers/userController');

router.post('/', registerUser);
router.put('/:id', gradeUser)
router.post('/login', loginUser)

module.exports = router