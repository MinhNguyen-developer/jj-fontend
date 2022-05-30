const UploadFileModel = require('../../model/uploadFile');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const HTTPError = require('../../common/httpError');

const UploadFile = async(req, res, next) => {
    const { fileUrl } = req.body;
    const senderUser = req.user;
    const newUploadFile = await UploadFileModel.create({
        fileUrl,
        createdBy: senderUser._id
    })
    res.send({
        message: 'upload file successful.',
        data: newUploadFile
    })
}
cloudinary.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.Cloud_API_Key,
    api_secret: process.env.Cloud_API_Secret,
    secure: true
})

const uploadToCloud = async(req, res) => {
    const streamUpload = (req) => {
        return new Promise((resolve, reject) => {
            // const stream = s3.uploader.upload_stream(    //nếu cloud là s3 AWS của amazon
            const stream = cloudinary.uploader.upload_stream(
                (error, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );

            streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
    };

    const result = await streamUpload(req);
    res.send({ success: 1, data: result.secure_url })
}


module.exports = { UploadFile, uploadToCloud };