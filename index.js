var express = require('express');
var app = express();

var Web3 = require('web3');
var path = require('path');
var sandboxId = '3a74993ab5';
var sandboxUrl = 'https://sirdavidal.by.ether.camp:8555/sandbox/' + sandboxId;    //https://sirdavidal.by.ether.camp:8555/sandbox/
var web3 = new Web3(new Web3.providers.HttpProvider(sandboxUrl));
var contractAddress = '0x052ecb441e56e28803008f70daa586959797f937';
require('./abi.js');
console.log(JSON.stringify(contractAbi));
web3.eth.defaultAccount = web3.eth.accounts[0];

var contractObject = web3.eth.contract(contractAbi);
var contractInstance = contractObject.at(contractAddress);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/Project/index.html'));
})

app.get('/vis', function(req, res) {
    res.sendFile(path.join(__dirname + '/Project/vis.html'));
})

var myParser = require("body-parser");
app.use(myParser.json({extended : true}));
  app.post("/accept_vote", function(request, response) {
      //console.log(request.body); //This prints the JSON document received (if it is a JSON document)
      console.log(request.body.Vote);
      contractInstance.vote(request.body.Vote);
      response.send("Message received.");
      response.send('set greeting!');
      response.end();
});

//Implement constantly catching the array from the blockchain thing - the variable mapping(address=>uint) num_votes


var server = app.listen(8080, function () {
  console.log("express server running");
  console.log('default account: ' + web3.eth.accounts[0])
})

app.use(express.static(path.join(__dirname, 'Project')));

/*
<script src="/js/myJS.js"></script>
*/