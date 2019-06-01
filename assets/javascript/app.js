$(document).ready(function(){
    //Make it so that when you click the start button, the questions are shown 

var card = $("#quiz");
    var myQuestions = [
        {
            question: "1. In which fictional town does 'The Simpsons' take place?",
            answers: {
                a: "Sunnydale",
                b: "Springfield",
                c: "Smalleville",
                d: "South Park"
            },
            correctAnswer: 'b',
            // divClass: ".town"
        },

        {
            question: "2. What is the name of the bar where Homer drinks?",
            answers:{
                a: "Moe's Tavern",   
                b: "Paddy's Pub",
                c: "Mr. Pubbs",
                d: "The Krusty Krab"
            },
            correctAnswer: 'a',
            // divClass: ".bar"
        },

        {
            question: "3. Who runs Kwik-E-Mart?",
            answers:{
                a: "Abraham Simpson",   
                b: "Agnes Skinner",
                c: "Arnie Pie",
                d: "Apu Nahasapeemapetilon"
            },
            correctAnswer: 'd',
            // divClass: ".mart"
        },

        {
            question: "4. What is the name of Bart's favorite comic book action hero?",
            answers:{
                a: "Mezmorino",   
                b: "Elasti-boy",
                c: "Radioactive Man",
                d: "Krusty the Clown"
            },
            correctAnswer: 'c',
            // divClass: ".comic"
        },

        {
            question: "5. What is the name of the Simpsons' next door neighbor?",
            answers:{
                a: "Barney Gumble",   
                b: "Principal Skinner",
                c: "Martin Prince",
                d: "Ned Flanders"
            },
            correctAnswer: 'd',
            // divClass:"."
        }];

    var numCorrect = 0;   
    numCorrect = document.getElementById("answeredRight");
    
    var numWrong = 0;
    numWrong = document.getElementById("answeredWrong");


    


    var triviaGame = {
        userAnswered: [],
        startQuiz: function(){
        // $("#quiz").empty
        //to show all ofthe questions need t
        $("#quiz").empty();
        for(i=0; i < myQuestions.length; i++){
            $("#quiz").append("<p>" + myQuestions[i].question + "</p>");
        //storing the answer choices for each of the questions in variables
            var answerA = myQuestions[i].answers.a;
            var answerB = myQuestions[i].answers.b;
            var answerC = myQuestions[i].answers.c;
            var answerD = myQuestions[i].answers.d;

            $("#quiz").append('<div class="radio-options1"><input type="radio" name="radio-group'+i+'" id="radio'+i+'">' + answerA + '</div>');
            $("#quiz").append('<div class="radio-options2"><input type="radio" name="radio-group'+i+'" id="radio'+i+'">' + answerB + '</div>');
            $("#quiz").append('<div class="radio-options3"><input type="radio" name="radio-group'+i+'" id="radio'+i+'">' + answerC + '</div>');
            $("#quiz").append('<div class="radio-options4"><input type="radio" name="radio-group'+i+'" id="radio'+i+'">' + answerD + '</div>');
        }
      $("#submitButton").show();  
    },
        checkScore: function(){
        //function to compare the user's answers to the correct answers so as to show the score on the final page
        var input = card.children("input:checked");
        console.log(input);
        var rightAnswer;
        var numCorrect = 0;   
            numCorrect = document.getElementById("answeredRight");
         var numWrong = 0;
        numWrong = document.getElementById("answeredWrong");
        var checked = $("input:radio.radio-class1:checked");
        console.log(checked);

        for(i=0; i<myQuestions.length; i++){
            triviaGame.userAnswered.push($('input[id=radio'+i+']:checked').val());
            
            rightAnswer = myQuestions[i].correctAnswer;

            if(triviaGame.userAnswered[i] === rightAnswer){
                numCorrect++;
                console.log(numCorrect);
            }else if(triviaGame.userAnswered[i] !== rightAnswer || userAnswered[i] === ""){
                numWrong++;
                console.log(numWrong);
            }
        }

        }
}
    $("#donutStart").on("click", triviaGame.startQuiz);
    //$("#donutStart").on("click", triviaGame.showButton);
    
    $("#done-button").on("click", function(){
        console.log(triviaGame.userAnswered);
        triviaGame.checkScore();
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