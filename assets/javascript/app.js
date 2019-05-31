$(document).ready(function(){
    //Make it so that when you click the start button, the questions are shown 



    var myQuestions = [
        {
            question: "1. In which fictional town does 'The Simpsons' take place?",
            answers: {
                a: "Sunnydale",
                b: "Springfield",
                c: "Smalleville",
                d: "South Park"
            },
            correctAnswer: 'b'
        },

        {
            question: "2. What is the name of the bar where Homer drinks?",
            answers:{
                a: "Moe's Tavern",   
                b: "Paddy's Pub",
                c: "Mr. Pubbs",
                d: "The Krusty Krab"
            },
            correctAnswer: 'a'
        },

        {
            question: "3. Who runs Kwik-E-Mart?",
            answers:{
                a: "Abraham Simpson",   
                b: "Agnes Skinner",
                c: "Arnie Pie",
                d: "Apu Nahasapeemapetilon"
            },
            correctAnswer: 'd'
        },

        {
            question: "4. What is the name of Bart's favorite comic book action hero?",
            answers:{
                a: "Mezmorino",   
                b: "Elasti-boy",
                c: "Radioactive Man",
                d: "Krusty the Clown"
            },
            correctAnswer: 'c'
        },

        {
            question: "5. What is the name of the Simpsons' next door neighbor?",
            answers:{
                a: "Barney Gumble",   
                b: "Principal Skinner",
                c: "Martin Prince",
                d: "Ned Flanders"
            },
            correctAnswer: 'd'
        }];

    var numCorrect = 0;   
    numCorrect = document.getElementById("answeredRight");
    
    var numWrong = 0;
    numWrong = document.getElementById("answeredWrong");




    var triviaGame = {
        startQuiz: function(){
        // $("#quiz").hide();
        //to show all ofthe questions need to make a loop so that all of them are displayed
        for(i=0; i < myQuestions.length; i++){
            $["#simpsonsQuestions"].append(myQuestions[i].question);
        //storing the answer choices for each of the questions in variables
            var answerA = myQuestions[i].answers.a;
            var answerB = myQuestions[i].answers.b;
            var answerC = myQuestions[i].answers.c;
            var answerD = myQuestions[i].answers.d;

            $("#simpsonsQuestions").append('<input type="radio" value="' + answerA + '" />');
            $("#simpsonsQuestions").append('<input type="radio" value="' + answerB + '" />');
            $("#simpsonsQuestions").append('<input type="radio" value="' + answerC + '" />');
            $("#simpsonsQuestions").append('<input type="radio" value="' + answerD + '" />');

    //need to make a function that causes the quiz/quiz questions to appear 
    //(and the other stuff to disappear)
    $("#donutStart").on("click",triviaGame.startQuiz);
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

        }
            
        }
    }


    
})