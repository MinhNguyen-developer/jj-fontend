const user = require('../controller/userPersonalInformation/user.personalInformation.controller');
const router = require('express').Router();
const authMiddleware = require('../middleware/auth.verifyToken');

router.post(
    '/create-user-personal-information',
    authMiddleware.verifyToken,
    authMiddleware.verifyUser,
    user.createUserPersonalInformation);

module.exports = router;