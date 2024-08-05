let compScore = 0;
let userScore = 0;
//declare these variables globally outside the loop as if these are written inside the loop then everytime the loop runs , the variables are set to 0 again and again

let compScoreDisplay = document.querySelector("#comp")
let userScoreDisplay = document.querySelector("#user")

let img = document.querySelectorAll("img")
// console.log(img)
let generateCompChoice=()=>{

}
//this function should return a string value which will be passed to compSelected and that string value is compared with user input value to generate result

img.forEach((i)=>{
    let userChoice = i.getAttribute("id")
    // console.log(userChoice); these are used to check outputs of the userChoice as a part of good debugging principle.
    // console.log(i);
    i.addEventListener("click" , ()=>{
        let userSelected = userChoice;
        let playBtn = document.querySelector("#play")
        // console.log(userSelected);

        let compSelected = "rock";
        
        // this if-else ladder compares the STRING value of variables compSelected and userSelected and prints the win msg on the button
        if(compSelected == "rock" && userSelected == "rock"){
            playBtn.innerText = "It's a tie";
            compScore += 0;
            userScore += 0;
        }
        else if (compSelected == "rock" && userSelected == "paper"){
            playBtn.innerText = "User Wins"; 
            userScore += 1;
            compScore += 0;
        }
        else if (compSelected == "rock" && userSelected == "scissors"){
            playBtn.innerText = "Comp Wins";
            compScore += 1;
            userScore += 0; 
        }
        else if (compSelected == "paper" && userSelected == "paper"){
            playBtn.innerText = "It's a tie";
            compScore += 0;
            userScore += 0; 
        }
        else if (compSelected == "paper" && userSelected == "rock"){
            playBtn.innerText = "Comp Wins"; 
            compScore += 1;
            userScore += 0;
        }
        else if (compSelected == "paper" && userSelected == "scissors"){
            playBtn.innerText = "User Wins";
            userScore += 1;
            compScore += 0; 
        }
        else if (compSelected == "scissors" && userSelected == "paper"){
            playBtn.innerText = "Comp Wins";
            compScore += 1;
            userScore += 0; 
        }
        else if (compSelected == "scissors" && userSelected == "rock"){
            playBtn.innerText = "User Wins"; 
            userScore += 1;
            compScore += 0;
        }
        else{
            playBtn.innerText = "It's a tie"
            compScore += 0;
            userScore += 0;
        }
        
        // console.log(compScore); dry check to see if compScore is being displayed correctly

        

        compScoreDisplay.innerText =  compScore ;
        userScoreDisplay.innerText = userScore;


        // console.log(`${userChoice} was clicked`);
    }) //here i, is a temp var whose job is to access the images in the img nodelist, i returns an html code for the element, whereas the getAttribute function returns the attribute value in string format

    

    
})

// logic for resetting the game using new game button
// when new game is pressed then scores are reset to 0
let newGame = document.querySelector("#restart")
newGame.addEventListener("click" ,()=>{
    compScore = 0;
    userScore = 0;
    compScoreDisplay.innerText = 0;
    userScoreDisplay.innerText =0;
} )



