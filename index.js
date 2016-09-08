var express = require('express');
var app = express();

var dictionary = {};

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
    console.log( web3.toUtf8("0x48656c6c6f20576f726c64210000000000000000000000000000000000000000") );
    
})

app.get('/vis', function(req, res) {
    res.sendFile(path.join(__dirname + '/Project/vis.html'));
})

var myParser = require("body-parser");
app.use(myParser.json({extended : true}));
  app.post("/accept_vote", function(request, response) {
      //console.log(request.body); //This prints the JSON document received (if it is a JSON document)
      console.log(request.body);
      console.log(request.body.VoteID);
      contractInstance.vote(request.body.VoteID);
      console.log("Success");
      //response.send("Message received.");
      //response.send('set greeting!');
      response.end();
});
app.get('/get_loser', function(request, response) {
    contractInstance.get_candidate_num();
    response.end();
});

//Implement constantly catching the array from the blockchain thing - the variable mapping(address=>uint) num_votes
app.get('/get_winner', function(request, response) {

    //num_candidates = web3.toUtf8( contractInstance.get_candidate_num() );

    
    /*
    candidates = contractInstance.get_candidates();
    
    poll = {}; 
    
    for (var i = 0; i < candidates.length; i += 1) {
        console.log("HEY");
        console.log(i);
        console.log(candidates[i]);
        x = contractInstance.get_votes(candidates[i]);
        console.log(x);
        poll[candidates[i]] = x;    
    }
*/
});

var server = app.listen(8080, function () {
  console.log("express server running");
  console.log('default account: ' + web3.eth.accounts[0]);
});

app.use(express.static(path.join(__dirname, 'Project')));

/*
<script src="/js/myJS.js"></script>
*/