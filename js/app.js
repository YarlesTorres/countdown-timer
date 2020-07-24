window.onload = function() {
    var bell = new Audio("bell.mp3");
    var click = new Audio("click.mp3");

    var minutes = 25;
    var seconds = 0;

    function initStage() {
        document.getElementById("minutes").innerHTML = 25;
        document.getElementById("seconds").innerHTML = "0" + 0;
    }
    
    function eventBtnStart() {
        click.play();
        
        session_minutes = 24;
        session_seconds = 59;

        showDisplay(session_minutes, session_seconds);

        var min_interval = setInterval(minutesTime, 60000);
        var sec_interval = setInterval(secondsTime, 1000);

        function minutesTime(){
            session_minutes -= 1;
            showDisplay(session_minutes, session_seconds);
        }

        function secondsTime() {
            session_seconds -= 1;
            showDisplay(session_minutes, session_seconds);
        }

        if (session_seconds <= 0) {
            if (session_minutes <= 0) {
                clearInterval(session_minutes);
                clearInterval(session_seconds);
                
                bell.play();
                alert("Okay");
            }
        }
        session_seconds = 60;
    }


    function showDisplay(min, sec) {
        document.getElementById("minutes").innerHTML = min;
        document.getElementById("seconds").innerHTML = sec;
    }
    
    document.getElementById("start").addEventListener("click", function(){
        eventBtnStart();
    })

    document.getElementById("stop").addEventListener("click", function(){
        bell.play();
        location.reload();
    });

    initStage();
}
