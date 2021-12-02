var array = [5, 10, 15,70, 20, 25, 30, 35, 40, 45, 50, 55, 60];
var newArray = [];
for (let i in array) {
    if (array[i]===30 || array[i]=== 35 || array[i]=== 40){
        newArray.push(array[i])
    }
}
console.log(newArray);