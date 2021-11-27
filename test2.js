function processData(input) {
    var raw_input = input.split("\n");

    function remove_item(arr, value) {
      var i = 0;
      while (i < arr.length) {
        if (arr[i] === value) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
      return arr;
    }
    
    var processed_input = remove_item(raw_input, '');
    var jumbled_mess = processed_input[processed_input.length - 1];
    var jumbled_mess_array = jumbled_mess.split('');
    
    var word_list = [...processed_input];
    word_list.pop();
    word_list.shift();
    
    var word_list_matching = [];
    var word_list_chars = [];
    var extra_items = [];
    
    word_list.forEach(item => {
        splited_item = item.split('');
        splited_item.forEach(char => {
            if (!word_list_chars.includes(char)) {
                word_list_chars.push(char);
            } else {
//                 pass
            }
        })
    })
    
    word_list_chars.forEach(item => {
        if (jumbled_mess_array.includes(item)) {
            jumbled_mess_array = remove_item(jumbled_mess_array, item);
        }
    })
    
    word_list.forEach(item => {
        if (jumbled_mess.includes(item)) {
            word_list_matching.push('true');
        } else {
            word_list_matching.push('false');
        }
    })
    
    // if (!word_list_matching.includes('false') && jumbled_mess_array.length < 1) {
    //     console.log('Yes');
    // } else {
    //     console.log('No');
    // }
    
    if (word_list_matching.includes('false') || jumbled_mess_array.length > 0) {
        console.log('No');
    } else {
        console.log('Yes');
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