const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveShoe,
  deleteShoe,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveShoe);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/shoes/:shoeId').delete(authMiddleware, deleteShoe);

module.exports = router;