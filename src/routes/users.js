const route = require('express').Router()
const {createUser, getUsers, getUser, updateUser, deleteUser} = require('../controllers/users')

//import helper
const uploadHelper = require('../helpers/upload')

route.post('/', uploadHelper.single('pictures'), createUser)
route.get('/', getUsers)
route.get('/detail', getUser)
route.patch('/', uploadHelper.single('pictures'), updateUser)
route.delete('/:id', deleteUser)

module.exports = route