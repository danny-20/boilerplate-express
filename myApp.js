let express = require('express');
let app = express();


let response="Hello json";
 // console.log(mySecret);
//let absolutePath = __dirname + "/views/index.html"
//app.get('/', function(req, res){
//  res.sendFile(__dirname + "/views/index.html")
  
//})
if(process.env.MESSAGE_STYLE === 'uppercase'){
  response = response.toUpperCase();
  app.get("/json", function(req, res){
  res.json({"message":  response})

  });
  
}
else{
  
  app.get('/json', function(req, res){
  res.json({"message": response})
});
}
      






























































 module.exports = app;
