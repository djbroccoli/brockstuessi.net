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
.typeString("<a href='mailto:brock@warpmail.net'><img src='imgs/email.png'></a>")
.pauseFor(300)
.typeString("<a href='imgs/stuessi-CV.pdf' target='blank'><img src='imgs/cv.png'>")
.pauseFor(300)
.typeString("<a href='https://github.com/djbroccoli' target='blank'><img src='imgs/github.png'>")
.start();




})
