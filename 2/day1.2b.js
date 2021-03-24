var array = [];
while(array.length < 8){
    var n = Math.floor(Math.random() * 9) + 1;
    if(array.indexOf(n) === -1) {
        array.push(n);
    }
}
console.log(array);