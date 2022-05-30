require('dotenv').config();
require('express-async-errors');


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const auth = require('./component/router/auth.router');
const company = require('./component/router/company.router');
const job = require('./component/router/job.router');
const user = require('./component/router/user.personalInformation.router');
const UploadFile = require('./component/router/uploadFile.router');


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/v4', auth);
app.use('/v4', company);
app.use('/v4', job);
app.use('/v4', user);
app.use('/v4', UploadFile);

app.listen(process.env.PORT || 8080, err => {
    if (err) {
        console.log('Server connect failed. ', err);
    }
    console.log(`Server connect success on PORT ${process.env.PORT}.`);
})

mongoose.connect(process.env.MongoseDB_URL, err => {
    if (err) {
        console.log('Mongoose DB connect failed. ', err);
    }
    console.log('Mongoose DB connect success.');
})

app.use(function(err, req, res, next) {
    console.log(err);
    return res.status(err.status || 500).send({ success: 0, message: err.message });
})