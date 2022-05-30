const mongoose = require('mongoose');

const userPersonalInformationSchema = mongoose.Schema({
    ho: {
        type: String,
        required: true
    },
    ten: {
        type: String,
        required: true
    },
    bangCapCaoNhat: {
        type: String,
        required: true
    },
    kinhNghiemLamViec: {
        type: String,
        required: true
    },
    fileCV: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true
    },
    ghiChu: {
        type: String,
        required: true
    },
    dieuKhoanSuDung: {
        type: Boolean,
        required: true
    },
    baoMatThongTin: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})
const UserPersonalInformationModel = mongoose.model('personalInfo', userPersonalInformationSchema);

module.exports = UserPersonalInformationModel;