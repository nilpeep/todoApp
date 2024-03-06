"use strict"

// ROUTERS:

const todo = require('../controller/todo.controller')

const router = require('express').Router()

// List:
router.get( '/', todo.list ) // GET /api/todos -> list todos
// Create:
router.post('/', todo.create)  // POST /api/todos -> create a new todo

// Read (by id):
router.get('/:id', todo.read)    // GET /api/todos/:id -> read a todo by its id

// Update (fully):
router.put('/:id', todo.update)   // PUT /api/todos/:id -> update a todo by its id

// Delete:
router.delete('/:id', todo.delete)     // DELETE /api/todos/:id -> delete a todo by its id



module.exports = router