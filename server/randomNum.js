var randomNumber = function() {
    return (Math.floor(Math.random() * (1 + 1000000 - 100) + 100)).toString();
};



module.exports = randomNumber;