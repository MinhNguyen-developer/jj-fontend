const UserModel = require('../../model/user');
const HTTPError = require('../../common/httpError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


let refreshTokens = [];

const register = async(req, res, next) => {
    const {
        password,
        phone,
        email,
        role
    } = req.body;
    const existedPhone = await UserModel.findOne({ phone });
    if (existedPhone) {
        throw new HTTPError(399, 'Phone number duplicate.');
    }

    const existedEmail = await UserModel.findOne({ email })
    if (existedEmail) {
        throw new HTTPError(398, 'Email duplicate.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const newUser = await UserModel.create({
        username: email,
        password: hashed,
        phone,
        email,
        role
    })
    const cloneUser = JSON.parse(JSON.stringify(newUser));
    res.send({
        success: 1,
        message: 'Register new user successful.',
        data: {
            ...cloneUser,
            password: ''
        }
    })
}
const generateAccessToken = (user) => {
    return jwt.sign({
        userId: user._id,
        username: user.username,
        role: user.role
    }, process.env.jwt_secretKey, {
        expiresIn: process.env.jwt_effectiveTime
    })
}
const generateRefreshToken = (user) => {
    return jwt.sign({
        userId: user._id,
        username: user.username,
        role: user.role
    }, process.env.jwt_refreshTokenKey, {
        expiresIn: process.env.jwt_refreshToken_effectiveTime
    })
}

const login = async(req, res, next) => {
    const { username, password } = req.body;
    const existedUser = await UserModel.findOne({ username });
    if (!existedUser) {
        throw new HTTPError(397, 'username or password incorrect.');
    }

    const existedPass = await bcrypt.compare(password, existedUser.password);
    if (!existedPass) {
        throw new HTTPError(397, 'username or password incorrect.');
    }
    const accessToken = generateAccessToken(existedUser);
    const refreshToken = generateRefreshToken(existedUser);
    refreshTokens.push(refreshToken);

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'strict'
    });
    res.send({
        message: 'Login system successful.',
        data: {
            userId: existedUser._id,
            username: existedUser.username,
            role: existedUser.role,
            accessToken
        }

    })
}
const requestRefreshToken = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        throw new HTTPError(299, 'You are not authenticated.');
    }
    console.log(refreshToken);
    console.log(refreshTokens);

    if (!refreshTokens.includes(refreshToken)) {
        throw new HTTPError(298, 'Token khong được xác thực');
    }
    jwt.verify(
        refreshToken,
        process.env.jwt_refreshTokenKey,
        (err, user) => {
            if (err) {
                throw new HTTPError(500, err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

            const newAccessToken = generateAccessToken(user);
            const newRefreshToken = generateRefreshToken(user);

            refreshTokens.push(newRefreshToken);

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                sucure: false,
                path: '/',
                sameSite: 'strict'
            });
            res.send({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken
            });
        });
}

const logout = async(req, res) => {
    res.clearCookie('refreshToken');
    refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
    res.send({ message: 'Logged out!' });
}
module.exports = { register, login, requestRefreshToken, logout }