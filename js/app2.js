$(document).ready(function() {
{
let windowHeight = $(window).height();


$('.sections').css('height', windowHeight);

}
{
//Typewriter effect

//For creating html retroactivly from the typewriter
var customNodeCreator = function(character) {
  return document.createTextNode(character);
};
var paper = document.getElementById("typewriter");

//create new instance of Typewriter
//source:
var typewriter = new Typewriter(paper, {
 delay: 20,
 onCreateTextNode: customNodeCreator,
 wrapperClassName: "typedText",
 cursorClassName: "typer",
});


typewriter.typeString("<h1>Hi there, you have arrived at Brock Stuessi's personal website.</h1>");
typewriter.pauseFor(300);
typewriter.typeString("<h1>. . .</h1>");
typewriter.pauseFor(300);
typewriter.typeString("<h1>Thanks for stopping by, are you here to learn more about his:</h1>");
typewriter.pauseFor(300);
typewriter.typeString("<a href=\"#music\" class=\"main-links\">Music</a>");
typewriter.pauseFor(300);
typewriter.typeString("<a href=\"#archives\" class=\"main-links\">Archival Work</a>");
typewriter.pauseFor(300);
typewriter.typeString("<a href=\"#writing\" class=\"main-links\">Writing</a>");
typewriter.pauseFor(300);
typewriter.typeString("<a href=\"#web\" class=\"main-links\">Web Projects</a>")
typewriter.pauseFor(300);
typewriter.typeString("<h1>Or, would you just like to: <a href=\"\">get in touch?</a></h1>");
typewriter.start();


}




$('#enter-site').click(function() {
  $('#typewriter').toggleClass("hidden");





})


})
