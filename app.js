var express = require('express');
var aws = require('aws-sdk');
var app = express();

dyn = new aws.DynamoDB({ endpoint: new aws.Endpoint('http://localhost:8000') });

dyn.listTables(function (err, data) {
	console.log('listTables', err, data);
});

app.listen(3000);
