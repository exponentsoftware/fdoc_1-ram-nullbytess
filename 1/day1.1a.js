// count words 
function countWords(string, word) {
    return string.split(word).length - 1;
 }
 var text="I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love."; 
 var count1=countWords(text,"love");
 console.log(count1)
 var count2=countWords(text,"you");
 console.log(count2)
 if (count2<count1){
    console.log("The word love more frequently occurred than you.")
}
else{
    console.log("The word you more frequently occurred than love.")
}
