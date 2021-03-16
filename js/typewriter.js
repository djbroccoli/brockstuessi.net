$(document).ready(function() {

//Typewriter effect

//For creating html retroactivly from the typewriter
var customNodeCreator = function(character) {
  return document.createTextNode(character);
};
var paper = document.getElementById("typewriter");

//create new instance of Typewriter
//source:
var typewriter = new Typewriter(paper, {
 delay: 100,
 onCreateTextNode: customNodeCreator,
 wrapperClassName: "typedText",
 cursorClassName: "typer",

});


typewriter.typeString("<h1>Brock Stuessi</h1>")
.pauseFor(300)
.typeString("<img src='imgs/email.png'>")
.pauseFor(300)
.typeString("<img src='imgs/cv.png'>")
.pauseFor(300)
.typeString("<img src='imgs/phone.png'>")
.start();




})
