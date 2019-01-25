$(document).ready(function () {
    
    var secondsLeft = 150;
    var timer = setInterval(startClock, 1000);
    function stopTimer()
    {
        clearInterval(timer);
    }
    function startClock(){
        secondsLeft--
        if(secondsLeft>0){
            
        }
        $("#timer").text(secondsLeft);
        
        if(secondsLeft===0){
            $("#timer").text("Time's Up!");
            stopTimer();
        }
    }
    


    var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
    var questions = [
        ["What is the highest grossing Arcade Game of all time?", "Frogger", "Donkey Kong", "Pac-Man", "Space Invaders", "C"],
        ["Made famous by Mario Bros, What was Mario's profession?", "Race Car Driver", "Plumber", "Barber", "Prince", "B"],
        ["What color is Ms.PacMan's bow?", "Red", "Blue", "Pink", "Orange", "A"],
        ["Chun Li was a poplar character in which game?", "Mortal Kombat", "Punch Out", "Call of Duty", "Street Fighter", "D"],
        ["What is the most popular Home Game Console of all time?", "Nintendo", "XBox 360", "PlayStation 2", "Atari 2600", "C"],
        ["Which of these popular games used directional 'Ball' instead of a traditional joystick?", "Pong", "Missle Command", "Centipede", "Galaga", "C"],
        ["The original arcade game 'Tapper' was sponsered by which popular drink?", "A & W Rootbeer", "Budweiser", "Coors", "Coca Cola", "B"],
        ["How many buttons did the Atari 2600 joystick have?", "One", "Two", "Four", "Six", "A"],
        ["Who was the smallest character in the original 'Mario Kart'?", "Mario", "Toad", "Princess Peach", "Yoshi", "B"],
        ["In the game 'Mortal Kombat' Scorpion wore what color?", "Yellow/Black", "Green/Black", "Blue/Black", "Red/Black", "A"],
        ["Ultra Bonus Question === 'Up, Up, Down, Down, Left, Right, Left, Right, B, A, START...was a famous cheat code from what game?", "Metal Gear", "Sonic The Hedgehog", "Contra", "Super Mario Bros", "C"]
    ];

    function _(x) {
        return document.getElementById(x);
    

    };
    function renderQuestion() {
        
        test = _("test");
        if(pos >=questions.length){
            test.innerHTML = "<h2> You Answered "+correct+" of "+questions.length+" Questions Correct!</h2>";
            _("test_status").innerHTML = "Triva Completed!";
            pos = 0;
            correct = 0;
            return false;
        }
        _("test_status").innerHTML = "Question "+(pos + 1)+" of "+questions.length;

        question = questions[pos][0];
        chA = questions[pos][1];
        chB = questions[pos][2];
        chC = questions[pos][3];
        chD = questions[pos][4];
        test.innerHTML = "<h3>"+question+"</h3>";
        test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
        test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
        test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
        test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br>";
        test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    };

    function checkAnswer() {
        choices = document.getElementsByName("choices");
        for(var i=0; i<choices.length; i++){
            if(choices[i].checked){
                choice = choices[i].value;
            }
        }

        if(choice === questions[pos][5]){
            correct++;
        }
        pos++;
        renderQuestion();



    };
    window.addEventListener("load", renderQuestion, false);
    startClock ();












});
