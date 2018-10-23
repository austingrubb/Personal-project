const express = require('express');
const uC = require('./server-controller');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const path = require('path')
const saltRounds = 12
const nodemailer = require('nodemailer');

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

app.post('/signup', (req, res) => {
    const db = app.get('db')
    const {username, password, email} = req.body
    console.log(username, email, password)
    bcrypt.hash(password, saltRounds).then(hashedPassword => {
        db.create_users([username,email, hashedPassword]).then(() => {
            req.session.users = {username}
            res.json({users: req.session.users})
        }).catch(error => {
            console.log('error', error);
            res.status(500).json({ message: 'Something bad happened! '})
          });
    })
})

app.post('/login', (req, res) => {
    const db = app.get('db');
    const { username, password } = req.body;
    db.find_user([username]).then(users => {
        if (users.length) {
            bcrypt.compare(password, users[0].password).then(passwordsMatched => {
                if (passwordsMatched) {
                    console.log("hello",users)
                    req.session.users = { username: users[0].name };
                    res.json({ users: req.session.users });
                } else {
                    res.status(403).json({ message: 'Wrong password' })
                }
            })
        } else {
            res.status(403).json({ message: "That user is not registered" })
        }
    });
});

app.get('/user/sessions', (req, res) => {
    req.session.users ? res.status(200).send(req.session.users) : res.status(200).send("no user loggedin")
});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send();
});

function checkIfLoggedIn(req, res, next){
    if(req.session.users){
        next()
    }else{
        res.status(403).json({message: 'You are not authorized'})
    }
}

app.get('/data', checkIfLoggedIn, (req, res) => {
    res.json({ data: "congrats you logged in" });
})

app.post('/api/sendEmail', (req, res, next) => {
    const {name, email, moment, hearAbout} = req.body;
    console.log(name, email, moment, hearAbout)
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
                <p style>
                ${name}
                </p>
                <p style> 
                ${email}
                </p>
                <p style>
                ${moment}
                </p>
                <p style>
                ${hearAbout}
                </p>
            </div>
        <body>`// plain text body
      };
console.log(name,email,moment)
    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
          console.log(err)
        }else{
          console.log(info);
     }});
    // send response
})

app.get('/api/getLoggedInUser',(req, res) => {
    console.log(req.session)
    res.status(200).send(req.session.users)
    
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