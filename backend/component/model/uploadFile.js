const mongoose = require('mongoose');

const UploadFileSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true
    }
}, {
    timestmaps: true
});
const UploadFileModel = mongoose.model('uploadFile', UploadFileSchema);

module.exports = UploadFileModel;