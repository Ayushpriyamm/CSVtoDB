const express = require('express');
const user = express();

const multer = require('multer');
const path = require('path');
const bodyparser = require('body-parser');
const userController = require('../controllers/userController');

user.use(bodyparser.urlencoded({ extended: true }));

//making public folder to static
user.use(express.static(path.resolve(__dirname,'public')))

//setting up multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.join(__dirname,'../public/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
})

var upload = multer({ storage: storage });

//making route
user.post('/importUser',upload.single('file'),userController.importUser)

module.exports = user;