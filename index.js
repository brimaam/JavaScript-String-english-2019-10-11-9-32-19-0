// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...

name = name.toUpperCase();
console.log(name);

document.write("<h1> " + name + " </h1>");


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...

function capSentence(sentence){
    var arraySen = sentence.split(" ");
    
    for (let i=0; i< arraySen.length; i++){
        arraySen[i] = arraySen[i].charAt(0).toUpperCase() + arraySen[i].slice(1);
    }
    arraySen = arraySen.join(" ");
    console.log(arraySen);

    document.write("<h2> " + arraySen + " </h2>");
}

capSentence(sentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...

money = money.substr(1);
console.log(money);

document.write("<h2> " + money + " </h2>");