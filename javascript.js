

document.querySelector("button").addEventListener("click",function(){
	document.querySelector("button").classList.add("pressed");
	setTimeout(function(){
		document.querySelector("button").classList.remove("pressed");
	}, 200);
})



function play(){
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";
var randomSorce1="images/"+randomImage1;



	document.querySelectorAll("img")[0].setAttribute("src",randomSorce1);




var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomSorce2="images/"+randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomSorce2);

if (randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Player 1 won!!🏆🎲";
}
else if(randomNumber1===randomNumber2){
	document.querySelector("h1").innerHTML="Draw!";
}
else{
	document.querySelector("h1").innerHTML="🏆🎲Player 2 won!!";
}
};