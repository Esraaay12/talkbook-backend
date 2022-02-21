const express= require('express');
const app = express();
const router = require('./router');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen (3000,()=>{
  console.log('Running on http://localhost:3000');

});