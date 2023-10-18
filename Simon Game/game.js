
var buttonColours = ["red","blue","green","yellow"];
var randomNumber;
var randomChosenColour;
var gamePattern =[];
var userClickedPattern=[];


function nextSequence(){
    userClickedPattern =[];
    level++;
    $("#level-title").text("Level " + level);

    randomNumber = Math.floor((Math.random()*4));
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
}

console.log(randomNumber);


function selectColor(){
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
}

 $(".btn").click(function(event){
   var userChosenColour;
   userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
 })

 function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
 }

 function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");},100);
    }


    var toggle =false;
    var level =0;

    $(document).keypress(function() {
        if (!toggle) {
          $("#level-title").text("Level " + level);
          nextSequence();
          toggle = true;
        }
      });

 function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
        console.log("succes");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        var audi = new Audio("sounds/wrong.mp3");
        audi.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
 }

 function startOver(){
    level =0;
    gamePattern=[];
    toggle = false;
 }


 
