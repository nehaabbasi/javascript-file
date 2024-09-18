
//Question no :1//
alert( "My name is neha abbasi");


//Question no :2//
 let MyName = "Neha abbasi"
  alert("Hello its me "+ MyName + " ! Welcome to the javascript world ");
 console.log(" Hello My name is "+ MyName + " Welcome to the javascript world ");
 
 // prompt practice with variable & alert & concatination//
  var input= prompt("\"Check your result\" \n your name");
 var subject= prompt("enter your subject  you want to check");
alert("congratulation " +input +" has secured 95 marks in " +subject); 
console.log("congratulation " +input +" has secured 95 marks in " +subject);

// Question no :3//
var a=4;
var b=2;
var result= a++ + --b - --a + b++ + a + b;
console.log( "the result of the equation is : " + result);

// a++ + --b - --a + b++ + a + b
//  4+1  -  4+1   +  4+2= 8


// Question no :4//

 var temperature= prompt(" enter weather temperature");
 if(temperature <= 24){
     alert("the weather is cool")}
  else if ( temperature <=30){
     alert("the weather is warm");
  }else{
 alert(" the weather is hot");

 }
//  another statement//
 var age= prompt(" Whats ur age criteria");
if( age >=22){
     alert("you are adult");
 }
 else if ( age<=20 && age >=12 ){
 alert(" you are teenager");
 }
   else{
     alert(" you are younger");
 }


