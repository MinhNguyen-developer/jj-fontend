const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: { //tên cty được niêm yết
        type: String,
        required: true,
        unique: true
    },
    createdByUSer: { //được tạo bơi user, người đại diện công ty
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})
const CompanyModel = mongoose.model('company', companySchema);

module.exports = CompanyModel;