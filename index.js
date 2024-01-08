    let computerScore=0;
    let humanScore=0;

function change_text(x){
    
    let randomNumber = Math.floor(Math.random() * 3);
    let computer;
    let human = x;
    

    switch(randomNumber){
        case 0:
            computer="Rock";
            break;
        case 1:
            computer="Paper";
            break;
        case 2:
            computer="Scissors";
            break;

    }
    document.getElementById("p1").innerHTML="You chose "+x+"."+
    "\nThe computer chose "+computer+".";

    if(human === computer){
        document.getElementById("p2").innerHTML="Round draw.";
    } else{
        if(human === "Rock" && computer === "Paper"){
            document.getElementById("p2").innerHTML="Computer won this round";
            computerScore++;
        } else if(human === "Rock" && computer === "Scissors"){
            document.getElementById("p2").innerHTML="You won this round";
            humanScore++;
        } else if(human === "Scissors" && computer === "Rock"){
            document.getElementById("p2").innerHTML="Computer won this round";
            computerScore++;
        } else if(human === "Scissors" && computer === "Paper"){
            document.getElementById("p2").innerHTML="You won this round";
            humanScore++;
        } else if(human === "Paper" && computer === "Rock"){
            document.getElementById("p2").innerHTML="You won this round";
            humanScore++;
        } else if(human === "Paper" && computer === "Scissors"){
            document.getElementById("p2").innerHTML="Computer won this round";
            computerScore++;
        }


    }
 

    if(humanScore === 5 || computerScore === 5){
        
        
        // alert(humanScore>computerScore ? "You won! A new game will start" : "The computer won! A new game will start");
        if(humanScore > computerScore){
            let temp="\nYou won!\nThe final score is: "+humanScore+"-"+computerScore+" in your favor!\n\nA new game will start";
            alert(temp);
            document.getElementById("p3").innerHTML="Computer's score: 0";
            document.getElementById("p3").innerHTML="Your score: 0";
            document.getElementById("p1").innerHTML="";
            document.getElementById("p2").innerHTML="";
        }else{
            let temp="\nThe computer won won!\nThe final score is: "+computerScore+"-"+humanScore+" in the computer's favor!\n\nA new game will start";
            alert(temp);
            document.getElementById("p3").innerHTML="Computer's score: 0";
            document.getElementById("p3").innerHTML="Your score: 0";
            document.getElementById("p1").innerHTML="";
            document.getElementById("p2").innerHTML="";
        }
        
        computerScore=0;
        humanScore=0;
        
    }
    document.getElementById("p3").innerHTML="Computer score: "+computerScore;
    document.getElementById("p4").innerHTML="Your score: "+humanScore;

    
}