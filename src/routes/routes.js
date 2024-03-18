const express = require("express")
const UserController = require('../controllers/UserController');
const PantryController = require("../controllers/PantryController");
const ProductController = require("../controllers/ProductController");
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

// User routes
router.get('/users', UserController.index);
router.get('/users/:id', UserController.findById);
router.post('/users', UserController.store);

// Pantry routes
router.get('/users/:user_id/pantry', PantryController.userPantry);
router.post('/users/:user_id/pantry', PantryController.store);

// Product routes
router.post('/products', ProductController.store)
router.get('/products', ProductController.index)

module.exports = router;