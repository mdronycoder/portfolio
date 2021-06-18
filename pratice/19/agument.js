function addnumbers(num, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;

    }
    return sum;

}


var result = addnumbers(10, 23, 18,5,3);
console.log(result);