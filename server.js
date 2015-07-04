var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send("hyee");
});
app.listen(3000);