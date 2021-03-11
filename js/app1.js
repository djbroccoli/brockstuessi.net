//Author: Brock Stuessi
//Date: 2/12/2020


//Adapted from Stove's solution for multiline typewriter on CodePen: https://codepen.io/stevn/pen/jEZvXa

function setupTypewriter() {
  //grab whatever is inside the typewriter block to store in HTML and then get rid of the text
      t = $('#typewriter');
      var HTML = t.html();

	    t.html("");
//declaring variables to be used in type function
	    var cursorPosition = 0,
//these all handle not traversing the html tags
	        tag = "",
	        writingTag = false;
	        typeSpeed = 10,
          tempTypeSpeed = 0;
          numOfChild = 0;
//the type function
	    var type = function() {
        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }
        if (HTML[cursorPosition] === '<' && HTML[cursorPosition+1] != 'a') {
          tempTypeSpeed = 0;
          writingTag = true;
          tag += HTML[cursorPosition];
        }
        if (HTML[cursorPosition] == '>' && writingTag === true){
          t.append(tag);
          tag = '';
          writingTag = false;
          numOfChild = t.children().length -1;
        }
        if (writingTag === false && t.children().length > 0) {
          if (HTML[cursorPosition] === " ") {
              tempTypeSpeed = 0;
          }
          else {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          }
          childs = t.children();
          childs[numOfChild].html(HTML[cursorPosition]);
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

	var typer = $('#typewriter');

	typewriter = setupTypewriter(typewriter);

	typewriter.type();
