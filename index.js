const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());
const db = require('./models');

const todoRouter = require('./routes/todo');
app.use('/',todoRouter);

db.sequelize.sync().then(()=>{
  app.listen(process.env.PORT || 3001 );
})

