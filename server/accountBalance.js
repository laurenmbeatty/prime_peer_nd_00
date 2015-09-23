var randomNumber = require('./randomNum');
var dollarNum = require('./dollarNum');

var randomDollarValue = function() {
    return dollarNum(randomNumber());
};

var accountBalance = function() {
    return "Account balance: \n";
};

exports.randomDollarValue = randomDollarValue;
exports.accountBalance = accountBalance;