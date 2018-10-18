const express = require('express');
const uC = require('./server-controller');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
// const bcrypt = require('bcryptjs');
// const path = require('path')
// const saltRounds = 12
const nodemailer = require('nodemailer');
// const  logo = require ('../../media/logo.png')

const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.post('/api/sendEmail', (req, res, next) => {
    const {name, email, moment} = req.body;
    console.log(name, email, moment)
    //do email logic ,
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'austin.grubb.1995@gmail.com',
               pass: process.env.EMAIL_PASSWORD
           }
       });

    const mailOptions = {
        from: 'austin.grubb.1995@gmail.com', // sender address
        to: 'austin.grubb.1995@gmail.com', // list of receivers
        subject: 'client query', // Subject line
        html: `<body style='text-align: center; background-color:#F1F2F4; width:100%; padding: 40px 0px'>
            <div>
                <img style='margin: 10px auto;' src={logo}'/>
            <div>
            <div style='background-color: white; padding:10px; width:320px; margin: 0 auto; border-radius:3px;'>
                <h1 style='color: #777777'></h1>
                <p style>this.state</p>
            </div>
        <body>`// plain text body
      };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
          console.log(err)
        }else{
          console.log(info);
     }});
    // send response
})


app.get('/api/users', uC.getUsers)
app.get('/api/photos', uC.getPhotos)
app.get('/api/admin', uC.getAdmin)
app.get('/api/usersPhotos', uC.getUsersPhotos)
app.post('/api/addUsers', uC.createUser)
app.post('/api/addPhotos', uC.addPhotos)
app.delete('/api/deleteUser/:id', uC.deleteUser)
app.delete('/api/deletePhotos/:id', uC.deletePhotos)


const PORT = 4800;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));