const router = require('express').Router();
const Upload = require('../controller/uploadFile/uploadFile.controller');
const authMiddleware = require('../middleware/auth.verifyToken');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const memoryStorage = multer.memoryStorage()
const uploadWithMemoryStorage = multer({ storage: memoryStorage })

const upload = multer({ storage: storage })

router.post(
    '/upload-file',
    authMiddleware.verifyToken,
    authMiddleware.verifyUser,
    Upload.UploadFile);

router.post(
    '/upload-file-to-cloud',
    uploadWithMemoryStorage.single('file'),
    Upload.uploadToCloud)
module.exports = router;