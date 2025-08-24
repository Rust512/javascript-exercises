const removeFromArray = function (arr, ...values) {
    let index = 0;
    while (index < arr.length) {
        if (values.includes(arr[index])) {
            arr.splice(index, 1);
            continue;
        }
        index++;
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
