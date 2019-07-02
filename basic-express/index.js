const http = require('http');
const express = require('express');

const apiRouter = require('./routers/api.router');

const app = express();

const PORT = process.env.PORT || 3000;
//write middleware log request url

app.use(function(req, res, next){
	console.log(`Your request : ${req.url}`);
	next();
});

// routing
app.use('/api', apiRouter);

http.createServer(app).listen(PORT, function(error){
	if(error) throw error;
	console.log(`Server is running on PORT=${PORT}`);
});