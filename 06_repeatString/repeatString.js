const repeatString = function(word, frequency) {
    if (!word) {
        return '';
    }
    if (frequency < 0) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < frequency; i++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
