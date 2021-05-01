var input = process.argv.slice(2);
// console.log(input);
function int_to_array_string(input){
    // set dictionary to store int to string 
    int_to_string_dict = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    };
    // split the input into integers and store them into array temp 
    var result=""
    for (var i = 0; i < input.length; i++ ){
        var temp = [];
        var output = "";
        
        while(input[i]>9){
            temp.push(input[i] % 10);
            input[i] = parseInt(input[i] / 10);
        };
        temp.push(input[i])
        temp.reverse();
        // console.log(temp);
        // turn the integer into string 
        for (var j = 0; j < temp.length; j++){
            output = output.concat(int_to_string_dict[temp[j]]);
        };
        result = result.concat(output);
        result = result.concat(",");
        };
    result = result.slice(0, -1);
    return result 
    };

var result = int_to_array_string(input);
console.log(result);
