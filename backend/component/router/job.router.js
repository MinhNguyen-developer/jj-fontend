const job = require('../controller/job/job.controller');
const router = require('express').Router();
const authMiddleware = require('../middleware/auth.verifyToken');


router.post(
    '/create-job-information',
    authMiddleware.verifyToken,
    authMiddleware.verifyCompany,
    job.createJob
);

module.exports = router;