$(document).ready(function(){
    //Make it so that when you click the start button, the questions are shown 

var timer;
var numCorrect = 0;  
var numWrong = 0; 
var rightAnswer;

var card = $("#quiz");

    var myQuestions = [
        {
            question: "1. In which fictional town does 'The Simpsons' take place?",
            answers: ["Sunnydale", "Springfield", "Smallville", "South Park"],
            correctAnswer: "Springfield"
            // divClass: ".town"
        },

        {
            question: "2. Which one of these is NOT one of Homer's catchphrases?",
            answers:["Woohoo!", "D'oh!", "Eat my shorts!", "Why you little!"],
            correctAnswer: "Eat my shorts!"
            // divClass: ".bar"
        },

        {
            question: "3. Who runs Kwik-E-Mart?",
            answers:["Abraham Simpson", "Agnes Skinner", "Arnie Pie", "Apu Nahasapeemapetilon"],
            correctAnswer: "Apu Nahasapeemapetilon"
            // divClass: ".mart"
        },

        {
            question: "4. What is the name of Bart's favorite comic book action hero?",
            answers:["Mezmorino", "Elasti-boy", "Radioactive Man", "Krusty the Clown"],
            correctAnswer: "Radioactive Man"
            // divClass: ".comic"
        },

        {
            question: "5. What is the name of the Simpsons' next door neighbor?",
            answers:["Barney Gumble", "Principal Skinner", "Martin Prince", "Ned Flanders"],
            correctAnswer: "Ned Flanders"
            // divClass:"."
        }];


    var triviaGame = {
        counter: 60,
        countdown: function(){
            triviaGame.counter--;
        $("#timerSection").html("<h3> Time left : " + triviaGame.counter + "</h3>");

            //console.log(triviaGame.counter);
            if(triviaGame.counter === 0){
                $("#done-button").hide();
                $("#timerSection").empty();
                triviaGame.stop();
                triviaGame.checkScore();
                triviaGame.showEndpage();
            }
        },
        stop: function(){
            clearInterval(timer);
        },

        startQuiz: function(){
            clearInterval(timer);
            timer = setInterval(triviaGame.countdown, 1000);
            //console.log(timer);
            //to show all ofthe questions need t
            $("#quiz").empty();
            $("#quiz").prepend("<h3> Answer the questions below before time runs out! </h3>")
            for(var i=0; i < myQuestions.length; i++){
                $("#quiz").append("<p>" + myQuestions[i].question + "</p>");
            //storing the answer choices for each of the questions in variables
                var answerA = myQuestions[i].answers.a;
                var answerB = myQuestions[i].answers.b;
                var answerC = myQuestions[i].answers.c;
                var answerD = myQuestions[i].answers.d;
            for(var j=0; j < myQuestions[i].answers.length; j++){
                card.append("<div><input type='radio' class='quizRadio' name='radio" + i +
                "'value='" + myQuestions[i].answers[j] + "''>" + myQuestions[i].answers[j] + "</div>" );
         }
          
        }
       $("#submitButton").show();  
    },

    showEndpage: function() {
        $("#quiz").empty();
        $("#quiz").html("<h2> See how you did! </h2>");
        $("#quiz").append("<p> Number right :" + numCorrect + "</p>" )
        $("#quiz").append("<p> Number wrong :" + numWrong +  "</p>" )

    },
        checkScore: function(){
        //function to compare the user's answers to the correct answers so as to show the score on the final page
        for(var i=0; i < myQuestions.length; i++){
           // triviaGame.userAnswered.push(input);
            rightAnswer = myQuestions[i].correctAnswer;
            userAnswered = $("input[name=radio"+i+"]:checked").val();

            if(userAnswered === rightAnswer) {
                numCorrect++;
                console.log(numCorrect);
            }else if(userAnswered !== rightAnswer || userAnswered === ""){
                numWrong++;
                console.log(numWrong);
            }
        }
    }
        
}
    $("#donutStart").on("click", triviaGame.startQuiz);
    //$("#donutStart").on("click", triviaGame.showButton);
    
    $("#done-button").on("click", function(){
        // console.log(triviaGame.userAnswered);
        $("#done-button").hide();
        $("#timerSection").empty();
        triviaGame.stop();
        triviaGame.checkScore();
        triviaGame.showEndpage();
    })
    //need to make a function that causes the quiz/quiz questions to appear 
    //(and the other stuff to disappear)
    
//clicking the start button also needs to activate the timer (going down from 120 seconds)
//code for the questions and choices
    //might need to make an array (with objects) to show questions
	//make it so that the user cannot choose more than one answer for each question
	//specify the correct answer for each of the questions
//once the the timer ends
	//print “Time’s up!”
	//show how many of the questions the user answers correctly (see if user input matches the correct 
	    //answers you stored 
    //probably will have to make a variable that counts how many answers the user got correct 			(initially set it to 0, then you’ll use if/else statements or some sort of function to add to the 			score) 


   
        // https://stackoverflow.com/questions/5550785/how-to-create-a-radio-button-dynamically-with-jquery
        //adding answers to the container

            
        



    
})