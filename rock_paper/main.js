//gets the HTML elements
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const sciss = document.querySelector(".sciss");

const play_score = document.querySelector(".play_score");
const comp_score = document.querySelector(".comp_score");

const compIMG = document.querySelector(".compIMG");
const playIMG = document.querySelector(".playIMG");

const begin= document.querySelector(".begin");


const start = document.querySelector(".start");

start.addEventListener("click",() => {

const playerNAME= document.querySelector(".playerNAME");
const userNAME= document.querySelector(".userNAME");
playerNAME.innerHTML = userNAME.value; 
begin.textContent =" "

}
)


//adds event listners to the elements
//the prettier text is just to stop theline from breaking 
<!-- prettier-ignore-start -->

rock.addEventListener("click", function() {runCODE(rock)}, false);
paper.addEventListener("click",function() {runCODE(paper)} , false);
sciss.addEventListener("click", function() {runCODE(sciss)}, false);

<!-- prettier-ignore-end -->;
//ends here

//initiates teh initialscore to 0
var compSCORE = 0;
var playSCORE = 0;



function runCODE(name) {
  const compCHOICE = ["rock", "paper", "sciss"];

  const player = name.className;

  //generates a random number between 0 and 2 , and uses the index to pick a string from compCHOICE array
  // 2.3 was just used to increase probability, 2 can also be used
  const num = random(2.3);
  const computer = compCHOICE[num];


  //calls the display function 
  display(player,num)


  //this uses the player and computer values and calls the point function written below
  const points = point(player, computer);
  begin.textContent =" "
  display_result(points)


  //this checks the points value returned, awards the respective points to player and displays on user screen
  switch (points) {
    case "player":
      playSCORE = playSCORE + 1;
      play_score.innerHTML = playSCORE;
      break;

    case "computer":
      compSCORE = compSCORE + 1;
      comp_score.innerHTML = compSCORE;
      break;
  }
}

//this is afucntion that generates random function withing 0 and the range of the number parsed in as argument
function random(x) {
  const y = Math.floor(Math.random() * x);
  return y;
}


//this  fuctions checks the winner between the computer and player accordign to rock paper scissors rules 
function point(player, computer) {
  if (
    (player === "rock") & (computer === "sciss") ||
    (player === "sciss") & (computer === "paper") ||
    (player === "paper") & (computer === "rock")
  ) {
    return "player";
  } else if (
    (computer === "rock") & (player === "sciss") ||
    (computer === "sciss") & (player === "paper") ||
    (computer === "paper") & (player === "rock")
  ) {
    return "computer";
  } else {
    return "draw";
  }
}

//this displays the picture of the chosen sign by both the player and computer

function display(player,num){

  const images =[`rock.png`,`paper.png`,`sciss.png`]


  //gets the index of both of the value chosen by the player 
    switch (player){
      case "rock":
        index = 0;
        break;
      
      case "paper":
        index = 1;
        break;
      
      case "sciss":
        index = 2;
        break;
    
}

const compIMAGE = images[num]
const playIMAGE = images[index]
compIMG.setAttribute("src", `image/${compIMAGE}`);
playIMG.setAttribute("src", `image/${playIMAGE}`);


}


function display_result(x){
  const userNAME = document.querySelector(".playerNAME");
  const helping = userNAME.innerHTML;

  switch (x){
    case "player":
      begin.textContent = `${helping} WINS!!!!!!`
      break;
    
    case "computer":
      begin.textContent = "Computer WINS!"
      break;
    
    case "draw":
      begin.textContent = "Draw"
      break;
  
}
 
}

//add rock bets
//winner
//winner action  