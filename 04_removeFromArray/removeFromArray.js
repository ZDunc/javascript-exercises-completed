// removes specified elements from an array, 
// Pass in one array in arg[0] and unlimited element arguments
const removeFromArray = function(arr) {
    let args = Array.from(arguments);

    args.splice(0, 1);
    console.log(arr);
    console.log(args);

    for (let i = 0; i < args.length; i++) {
        index = arr.indexOf(args[i]);
        if (index === -1)
            continue;

        arr.splice(index, 1);
    }

    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
