var buttonColours=["red","blue","green","yellow"]
var gamePattern=[]
var userClickedPattern=[]
var started = false
var level=0
$("body").keydown(function (event){
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;}
    })

$(".btn").click(function (){
    userChosenColour = $(this).attr("id") 
    userClickedPattern.push(userChosenColour) 
    playSound(userChosenColour)
    animatePress(userChosenColour)  
    checkAnswer(userClickedPattern.length-1); 
    })


function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("good")}
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);}
    else {
     console.log("wrong");
    }

}    
function nextSequence(){
    userClickedPattern = [];
    $("h1").text(" level "+level)
    level=level+1 
    randomNumber=Math.round(Math.random()*3)
    randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)    
}
function playSound(name){
     var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}
function animatePress(currentColour){
 $("."+currentColour).addClass("pressed")
 setTimeout(function () {$("."+currentColour).removeClass("pressed")},100)
}



