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
        }   
    ];

    $("#donutStart").on("click", function(){
        $("#main-section").html(questions.first);
        $("#main-section").html(answers.first);

    })
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

})