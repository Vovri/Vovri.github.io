//guessing
var y = Math.floor(Math.random()*3+1);
var guess = 1;

function interpret(){
	var x = document.getElementById("guessField").value;
	if(x==y){
		alert("it is to my liking *" + guess);
	}
	else if(x>y){
		guess++;
		alert("smol");
	}
	else{
		guess++;
		alert("weh");
	}
}
