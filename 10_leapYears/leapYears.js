const leapYears = function (year) {
    if (year % 100 === 0) {
        year = year / 100;
    }
    return year % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
