const httpError = require('../../common/httpError');
const UserPersonalInformationModel = require('../../model/user.personalInformation');


const createUserPersonalInformation = async(req, res, next) => {
    const senderUser = req.user;
    const {
        ho,
        ten,
        bangCapCaoNhat,
        kinhNghiemLamViec,
        CV,
        ghiChu,
        dieuKhoanSuDung,
        baoMatThongTin,
    } = req.body;

    const createNewUserPersonalInfo = await UserPersonalInformationModel.create({
        ho,
        ten,
        bangCapCaoNhat,
        kinhNghiemLamViec,
        CV,
        ghiChu,
        dieuKhoanSuDung,
        baoMatThongTin,
        createdBy: senderUser._id
    });
    res.send({
        message: 'create successful.',
        data: createNewUserPersonalInfo
    });
}

module.exports = { createUserPersonalInformation }