
function check1() {

	var b1 = document.getElementById('b1').checked;
	var b2 = document.getElementById('b2').checked;
	var b3 = document.getElementById('b3').checked;
	var b4 = document.getElementById('b4').checked;
	var b5 = document.getElementById('b5').checked;
	var b6 = document.getElementById('b6').checked;
	var b7 = document.getElementById('b7').checked;

    if (b2 && b4 && b5 && b6 && !b1 && !b3 && !b7) {
        window.alert("Good");
    } else {
        window.alert("Bad");
    }
}

function Select(i) {
  var id;
  var img;
  if(i == 1){
  	id = "b1";
  	img = "img1"
  } else if (i == 2) {
  	id = "b2";
  	img = "img2"
  } else if (i == 3) {
  	id = "b3";
  	img = "img3"
  } else if (i == 4) {
  	id = "b4";
  	img = "img4"
  } else if (i == 5) {
  	id = "b5";
  	img = "img5"
  } else if (i == 6) {
  	id = "b6";
  	img = "img6"
  } else if (i == 7) {
  	id = "b7";
  	img = "img7"
  }

  var yes = document.getElementById(id).checked;
  if (yes){
    document.getElementById(img).style.border = "5px solid lightgrey";
    document.getElementById(img).style.margin = "0px";
  } else {
  	document.getElementById(img).style.border = "0px solid";
  	document.getElementById(img).style.margin = "5px";
  }
} 