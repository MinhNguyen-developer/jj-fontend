const HTTPError = require('../../common/httpError');
const CompanyModel = require('../../model/company');

const RegisterCompanyName = async(req, res, next) => {
    const senderUser = req.user;
    const {
        companyName,
    } = req.body;
    const existedCompanyName = await CompanyModel.findOne({ companyName });
    if (existedCompanyName) {
        throw new HTTPError(300, 'この会社名はすでに存在します。');
    }

    const newCompany = await CompanyModel.create({
        companyName,
        createdByUSer: senderUser._id
    });

    res.send({ message: '登録成功', newCompany });
}
const GetCompany = async(req, res, next) => {
    const senderUser = req.user;
    const company = await CompanyModel.find({ createdByUSer: senderUser.id });
    if (!company) {
        res.send({ message: '見つかりません。', data: null });
        throw new HTTPError()
    }
    res.send({ data: company });
}
const getAllCompany = async(req, res, next) => {
    const company = await CompanyModel.find();
    res.send({ data: company });
}
module.exports = { RegisterCompanyName, GetCompany, getAllCompany }