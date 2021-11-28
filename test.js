function processData(input) {
    var digit_array = [];
    
    for (const i of input) {
        digit_array.push(+i);
    }

    var array_length = digit_array.length;

    var condition_1 = false;
    var condition_2 = false;
    var condition_3 = false;
    var condition_4 = false;
    var condition_5 = false;
    
//     Checking for the first condition
    
    if (digit_array[1] === 0) {
        condition_1 = true;
    }
    
//     Checking for the second condition
    function check_similarity(array) {
        var set = new Set(array);
        return (set.size === 1);
    }

    if (check_similarity(digit_array)) {
        condition_2 = true;
    }
    
//     Checking for the third condition

    for (item of digit_array) {
        var item_index = digit_array.indexOf(item);
        
        if (item_index === digit_array.length - 1) {
            break;
        }
        
        var next_item_index = digit_array.indexOf(item) + 1;
        var previous_item_index = digit_array.indexOf(item) - 1;
        
        var next_item = digit_array[next_item_index];
        var previous_item = digit_array[previous_item_index];
        
        if (item === 9 || item === 0) {
            if (item === 9 && next_item === 0) {
                condition_3 = true;
            } else if (item === 0 && next_item === 9) {
                condition_3 = true;
            } else {
                condition_3 = false;
            }
            
        } else {
            if (item + 1 === next_item || item - 1 === previous_item) {
                condition_3 = true;
            } else {
                condition_3 = false;
            }
        }
    }
    
//     Checking for the fourth condition
    
    var reverse_array = digit_array.slice().reverse();
    
    if (digit_array.join("") === reverse_array.join("")) {
        condition_4 = true;
    }
    
//     Checking for the fifth condition
    
    var unique_digit_array = [];
    
    for (item of digit_array) {
        if (!unique_digit_array.includes(item)) {
            unique_digit_array.push(item);
        } else {
//             pass
        }
    }
    
    function repetance_checker(array, value) {
        var count = 0;
        array.forEach(item => {
            if (item === value) {
                count += 1;
            }
        })
        
        return count
    }
    
    unique_digit_array.forEach(item => {
        count = repetance_checker(digit_array, item);
        if (count === 2) {
            condition_5 = true;
        } else {
            condition_5 = false;
        }  
    })
    
//     Checking for the main condition : checking if the number has minumum three digits or not
    
    if (array_length < 3) {
        console.log("No");
    } else if (condition_1 == true || condition_2 == true || condition_3 == true || condition_4 == true || condition_5 == true) {
        console.log("Yes");
    } else {
        console.log("No");
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});