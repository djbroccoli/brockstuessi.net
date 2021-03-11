//Author: Brock Stuessi
//Date: 2/12/2020


//Adapted from Stove's solution for multiline typewriter on CodePen: https://codepen.io/stevn/pen/jEZvXa

function setupTypewriter(t) {
  //grab whatever is inside the typewriter block to store in HTML and then get rid of the text
      var HTML = t.innerHTML;

	    t.innerHTML = "";
//declaring variables to be used in type function
	    var cursorPosition = 0,
//these all handle not traversing the html tags
	        tag = "",
	        writingTag = false,
	        tagOpen = false,
	        typeSpeed = 10,
          tempTypeSpeed = 0;
//the type function
	    var type = function() {
          //console.log(writingTag);
          //if writing tag, fill the tag variable with the text
	        if (writingTag === true) {
	            tag += HTML[cursorPosition];
              //console.log(tag);
	        }
          //if < open to tag is detected
	        if (HTML[cursorPosition] === "<") {
            //stop typing
	            tempTypeSpeed = 0;
              //if tag open is true, set to false and writingTag to true
	            if (tagOpen && HTML[cursorPosition+1] != 'a') {
	                tagOpen = false;
	                writingTag = true;

	            } else { //if tagOpen is not true, reset the tag, set tag open to true and add to the tag
	                tag = "";
	                tagOpen = true;
	                writingTag = true;
	                tag += HTML[cursorPosition];
	            }
	        }
          //if writingTag is false and tagOpen is true
	        if (!writingTag && tagOpen) {
	            tag.innerHTML += HTML[cursorPosition];
	        }
	        if (!writingTag && !tagOpen) {
	            if (HTML[cursorPosition] === " ") {
	                tempTypeSpeed = 0;
	            }
	            else {
	                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	            }
	            t.innerHTML += HTML[cursorPosition];
	        }
	        if (writingTag && HTML[cursorPosition] === ">") {
	            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	            writingTag = false;
	            if (tagOpen) {

                  var newSpan = document.createElement("span");
                  //appends the new span element to the bottom of the page
	                t.appendChild(newSpan);
                  console.log(t);
	                newSpan.innerHTML = tag;
	                tag = newSpan.firstChild;
	            }
	        }

	        cursorPosition += 1;
	        if (cursorPosition < HTML.length - 1) {
	            setTimeout(type, tempTypeSpeed);
	        }

	    };

	    return {
	        type: type
	    };
	}

	//var typer = document.getElementById('typewriter');

	typewriter = setupTypewriter(typewriter);

	typewriter.type();
