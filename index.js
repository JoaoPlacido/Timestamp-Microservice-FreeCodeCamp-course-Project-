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

app.get("/api/:date?",(req,res)=>{
  console.log(req.params.date);
  if(req.params.date == null){
    var dateNow = Date.now();
    console.log(dateNow);
    res.json({
      unix: dateNow,
      utc: new Date(dateNow).toUTCString()
    });
  }else{
    var dateReq=new Date(parseInt(req.params.date)).toString();
    console.log(dateReq)
    if(dateReq=='Invalid Date'){
      res.json({
        error : "Invalid Date"
      });
    }else{
      res.json({
        unix: Date.parse(dateReq),
        utc:new Date(parseInt(req.params.date)).toUTCString()
      });
    }
  }
});



var listener = app.listen(3000,()=>{
  console.log('Listening in port '+listener.address().port);
});