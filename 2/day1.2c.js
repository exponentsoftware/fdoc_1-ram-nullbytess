function reverseArray(int) {
    var arr = new Array;
    for(var i = int.length-1; i >= 0; i--) {
        arr.push(int[i]);
    }
    console.log(arr);
} 
reverseArray(['A','B','C'])