const HTTPError = require('../common/httpError');
const jwt = require('jsonwebtoken');
const UserModel = require('../model/user');

async function verifyToken(req, res, next) {
    const token = req.headers.authtoken;
    if (!token) {
        throw new HTTPError(299, 'トークンが見つかりません。');
    }
    const jwtToken = token.split(' ')[1];
    const data = jwt.verify(jwtToken, process.env.jwt_secretKey);
    const { userId } = data;
    if (!userId) {
        throw new HTTPError(298, 'トークンが確認できません。');
    }
    const existedUser = await UserModel.findById(userId);
    if (!existedUser) {
        throw new HTTPError(297, 'トークンが確認できません。');
    }
    req.user = existedUser;
    next();
}
async function verifyCompany(req, res, next) {
    verifyToken(req, res, () => {
        if (!['company', 'admin'].includes(req.user.role)) {
            throw new HTTPError(500, 'Token khong hop le.')
        }
        next();
    })
}
async function verifyUser(req, res, next) {
    verifyToken(req, res, () => {
        if (!['user', 'admin'].includes(req.user.role)) {
            throw new HTTPError(500, 'Token khong hop le.')
        }
        next();
    })
}
module.exports = {
    verifyToken,
    verifyCompany,
    verifyUser
};