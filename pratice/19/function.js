function evenify(num) {
    
    var result;
        if (num % 2 == 0) {
         result = num;
        }
        else{
            result = num;
        }
        return result;
}

var result = evenify(13);
var square = result * result

 console.log(square);



 function evenify_all(nums){
    var  event_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num); 
        event_array.push(result);
    }
    return event_array;
}
var nums = [23, 24, 22, 30, 40, 50];
var even_num = evenify_all(nums);
console.log(even_num);


function evenify_all2(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify(num); 
    }
    return nums
}

 var hello = evenify_all2(nums);
console.log(hello)