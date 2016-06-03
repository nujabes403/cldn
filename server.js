var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dxmiqvbcr',
  api_key: '776769333851165',
  api_secret: '07FrsiNK7V1rq03ScOX6_iwPZZo'
});

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.post('/delete',function(req,res){
    var target = req.body.public_id;
    console.log("TARGET IS " + target);
    cloudinary.api.delete_resources([target],
    function(result){
        console.log("DELETE RESULT : " + result);
        res.send("DELETE RESULT : " + result);
    });
});

app.listen(8080);
console.log("App listening on port 8080");
