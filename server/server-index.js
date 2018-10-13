const express = require('express');
const c = require('./server-controller');
const bodyParser = require('body-parser');
// const massive = require('massive');
require('dotenv').config();



const app = express();
app.use(bodyParser.json());


// massive(process.env.CONNECTION_STRING).then(database => {
//     app.set('db', database);
//     // console.log('data base hit');
// });





const PORT = 4800;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));