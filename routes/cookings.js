const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/cookings')

router.get('/', recipeController.index);
router.get('/:id', recipeController.show);
router.post('/', recipeController.create);
router.put('/:id', recipeController.update);
router.delete('/:id', recipeController.destroy)


module.exports = router