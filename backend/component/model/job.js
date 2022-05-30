const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    preface: { //lời tựa
        type: String,
        required: true
    },
    contractTypes: { //hình thức tuyển dụng: nhân viên chính thức
        type: [String],
        required: true
    },
    contractTypesNote: {
        type: String
    },

    workAddress: { //địa điểm làm vệc: Tokyo
        type: [String],
        required: true
    },
    workAddressNote: {
        type: String
    },
    typeIndustry: { //ngành nghe: IT
        type: [String],
        required: true
    },
    salary: { //lương
        type: String,
        required: true
    },
    salaryNote: {
        type: String
    },
    treatments: { //phúc lợi
        type: [String],
        required: true
    },
    treatmentNote: { //phúc lợi
        type: String
    },
    jobDescription: { //nội dung công việc
        type: String,
        required: true
    },
    workingHourStart: {
        type: String,
        required: true
    },
    workingHourEnd: {
        type: String,
        required: true
    },
    workingHourNote: {
        type: String
    },
    holidayVacation: { //ngày nghỉ 
        type: String,
        required: true
    },
    requiredExperience: { //kinh nghiệm cần thiết để ứng tuyển
        type: String,
        required: true
    },
    welcomeSkills: { //kĩ năng để ứng tuyển
        type: String,
        required: true
    },
    notices: { //ghi chú dành cho doanh nghiệp
        type: String,
        required: true
    },
    createdByCompany: { //thông tin tuyển dụng được tạo bởi doanh nghiệp 
        type: [mongoose.Types.ObjectId],
        required: true,
        unique: true
    },
    createdByUser: { //thông tin tuyển dụng cũng được tạo bởi user
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})
const JobModel = mongoose.model('job', jobSchema);

module.exports = JobModel;