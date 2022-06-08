//project start
var express = require('express');
var app = express();

//enable cors for FCC test
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/views/index.html");
});





var listener = app.listen(3000,()=>{
  console.log('Listening in port '+listener.address().port);
});