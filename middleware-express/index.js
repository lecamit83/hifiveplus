/**
 * 
 * user access to link then server logger url 
 * and find file 
 * if file exist then return file
 * else return 404 File not found!
 * 
 * 
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// middleware logger url request and time
app.use(function(req, res, next){
  console.log(`${req.url} on ${ Date() }`);
  next();
});

//middleware find file ...
app.use(function(req, res, next){
  let pathFile = path.join(__dirname,'/public') + req.url;
  console.log('------------------') 
  fs.readFile(pathFile, function(error, data){
    if(error){
      return next();
    }
    res.sendFile(pathFile);
  });
});
// middleware send error
app.use(function(req, res){
  res.status(404).send("File not found!");
});
app.listen(PORT, function(error){
  if(error) throw error;
  console.log(`Server is running on PORT=${PORT}`);
});
