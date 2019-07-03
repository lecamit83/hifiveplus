const express = require('express');
const http = require('http');
const fs = require('fs');
const apiRouter = require('./api_router');

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/api', apiRouter);

http.createServer(app).listen(PORT, function(error){
    if(error) throw error;
    console.log(`Server is running on PORT=${PORT}`);
})