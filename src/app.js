const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to dataBase")
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());

app.use('/user', userRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000 ");
})
