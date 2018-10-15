const express = require('express');
const c = require('./server-controller');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const path = require('path')
const saltRounds = 12


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
    const {username, password} = req.body
    bcrypt.hash(password, saltRounds).then(hashedPassword => {
        db.create_users([username, hashedPassword]).then(() => {
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
                    req.session.users = { username: users[0].username };
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




const PORT = 4800;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));