const router = require('express').Router();
const auth = require('../controller/auth/auth.controller');
const { registerSchema, loginSchema } = require('../controller/auth/auth.validate');
const validateInput = require('../middleware/validateInput');
const authMiddleware = require('../middleware/auth.verifyToken');


router.post('/auth/register-user', validateInput(registerSchema, 'body'), auth.register);
router.post('/auth/login-user', validateInput(loginSchema, 'body'), auth.login);
router.post('/auth/refresh-token', auth.requestRefreshToken);
router.post('/auth/logout', authMiddleware.verifyToken, auth.logout);

module.exports = router;