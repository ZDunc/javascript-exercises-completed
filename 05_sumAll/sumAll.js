const sumAll = function(low, high) {
    let sum = 0;

    if (isNaN(low) || isNaN(high) || typeof low === 'string' || typeof high === 'string')
        return 'ERROR';
    else if (low < 0 || high < 0)
        return 'ERROR';
    else {
        if (low > high) {
            let temp = low;
            low = high;
            high = temp;
        }

        for (let i = low; i <= high; i++) {
            sum += i;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
