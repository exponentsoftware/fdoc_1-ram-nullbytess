function varietyOfWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
 }
var sentence = "this is a sentence of having words to count"
 console.log(varietyOfWords(sentence));