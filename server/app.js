var http = require('http');
var random = require('./randomNum');
var dollar = require('./dollarNum');
var account = require('./accountBalance');

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write('hello world');
    //response.write(random);
    //response.write(dollar);
    response.write(account.accountBalance());
    response.write(account.randomDollarValue());
    response.end();
}).listen(3000);
console.log('Listening on Port 3000');