$(document).ready(function () {
    var timer = 40;
    var timerSpan = $("#timer").text(timer); 
    $(".screen2").hide();
    $(".screen3").hide();

    //  Second screen has a timer counting down to answer the questions.

    //  Step 1: Set up a timer that counts down from 30 seconds. 
    $("#startButton").on("click", function() {
        $(".screen1").hide();
        $(".screen2").show();
        var intervalId = setInterval(gameOver, 1000);
        console.log("intervalId: " + intervalId);
        timer--;
        console.log("timer: " + timer);
        // clearInterval(intervalId);
        console.log("intervalId has been cleared");
    });
    
    function gameOver() {
        console.log("gameover has been executed here.");
    }
    //  Step 2: Determine which options answered were the correct ones. Assign scores. 

        //  Make 2 arrays questions[] and answers[]. 
        //  In questions[], store numbers/values. 
        //  In answers[], store 2 values: 1 and 0. Assign value 1 to the correct response, assign value 0 to all others. 
        //  Thru clickevent, check if the 'correct answer was picked'. If yes, right++, of no, wrong++. 
        //  Unanswered questions: if no answer was chosen, unanswered++.  

    //  Step 3: Change to screen 3 and display scores. 
    //  Step 4: Restart game and change to screen 1.

    $("#submitButton").on("click", function() {
        // $(".screen1").hide();
        $(".screen2").hide();
        $(".screen3").show(); });


});





 
