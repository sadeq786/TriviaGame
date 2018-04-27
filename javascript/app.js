$(document).ready(function () {
    var timer = 40;
    var intervalId;
    var correct = 0;
    var incorrect = 0; 
    var unanswered = 4;
    var answers = [ 3, 3, 3, 2];
    var userAnswers[];

    $(".screen2").hide();
    $(".screen3").hide();

    //  Second screen has a timer counting down to answer the questions.

    //  Step 1: Set up a timer that counts down from 30 seconds. 
    $("#startButton").on("click", function () {
        $(".screen1").hide();
        $(".screen2").show();
        run ();        
    });
    
    $("#submitButton").on("click", function () {
        stop();
    });

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        $("#timeLeft").text(timer);
        timer--;
        console.log("timer: " + timer);
        if (timer === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
        $(".screen2").hide();
        $(".screen3").show();

        // Add logic for choosing answers here. 
        for (var i = 0; i < 4; i++) {
            // Compare what attribute for correct answers? $( elem ).prop( "checked" ) 
            
            if (userAnswers[i] === answers[i]) {
                correct++;
            } else incorrect++;
            
        }
        unanswered = unanswered - correct - incorrect;
    }            

    $("#correct").text(correct);
    $("#incorrect").text(correct);
    $("#unanswered").text(unanswered);


});






