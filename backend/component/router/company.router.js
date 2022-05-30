const router = require('express').Router();
const company = require('../controller/company/company.controller');
const authMiddleware = require('../middleware/auth.verifyToken');

router.post(
    '/register/new-company-name',
    authMiddleware.verifyToken,
    authMiddleware.verifyCompany,
    company.RegisterCompanyName
);

router.get('/get-company', authMiddleware.verifyToken, company.GetCompany);
router.get('/get-all-company', company.getAllCompany);

module.exports = router;