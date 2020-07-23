var name = "xyz";
function add (num1, num2){
    var result = num1 + num2;
    console.log('inside ', name);
    return result;
}
console.log('outside',name);
var sum = add(20, 40);
console.log(sum);