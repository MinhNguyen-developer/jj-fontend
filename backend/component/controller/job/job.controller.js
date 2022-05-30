const HTTPError = require('../../common/httpError');
const JobModel = require('../../model/job');
const CompanyModel = require('../../model/company');

const createJob = async(req, res, next) => {
    const senderUser = req.user;
    const company = await CompanyModel.findOne({
        createdByUSer: senderUser._id
    });
    if (!company) {
        res.send({ message: '見つかりません。' });
    }

    const {
        preface,
        contractTypes,
        contractTypesNote,
        workAddress,
        workAddressNote,
        typeIndustry,
        salary,
        salaryNote,
        treatments,
        treatmentNote,
        jobDescription,
        workingHourStart,
        workingHourEnd,
        workingHourNote,
        holidayVacation,
        requiredExperience,
        welcomeSkills,
        notices,
        createdByCompany
    } = req.body;
    const newJob = await JobModel.create({
        preface,
        contractTypes,
        contractTypesNote,
        workAddress,
        workAddressNote,
        typeIndustry,
        salary,
        salaryNote,
        treatments,
        treatmentNote,
        jobDescription,
        workingHourStart,
        workingHourEnd,
        workingHourNote,
        holidayVacation,
        requiredExperience,
        welcomeSkills,
        notices,
        createdByCompany,
        createdByUser: senderUser._id
    });
    res.send({ message: '通信登録成功。', dataJob: newJob })
}
module.exports = { createJob }