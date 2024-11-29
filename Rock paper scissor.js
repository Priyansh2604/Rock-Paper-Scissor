let Choise=["Rock","paper","Scissor"];
$("button").click(function game() {
  


let ComputerChoise=Choise[Math.floor(Math.random()*Choise.length)];
console.log(ComputerChoise)
$("#Rock").click(function () {
  console.log("Rock")
  if (ComputerChoise==="Rock") {
    console.log("Draw")
    $("h3").text("Draw")
    
  }
  if (ComputerChoise==="Scissor") {
    console.log("User Wins")
    $("h3").text("Rock beats Scissor User Wins")
   

  }
  if (ComputerChoise==="paper") {
    console.log("Computer Wins")
    $("h3").text("Paper beats Rock Computer Wins")
   
  }
})
$("#paper").click(function () {
  console.log("paper")
  if (ComputerChoise==="paper") {
    console.log("Draw")
    $("h3").text("Draw")
   
  }
  if (ComputerChoise==="Scissor") {
    console.log("Computer Wins")
    $("h3").text("Scissor beats paper Computer Wins")
   
  }
  if (ComputerChoise==="Rock") {
    console.log("User Wins")
    $("h3").text("Paper beats Rock User Wins")
   
  }
  
})
$("#Scissor").click(function () {
  console.log("Scissor")
  if (ComputerChoise==="Scissor") {
    console.log("Draw")
    $("h3").text("Draw")
    
  }
  if (ComputerChoise==="paper") {
    console.log("User Wins")
    $("h3").text("Scissor beats Paper User Wins")
    
  }
  if (ComputerChoise==="Rock") {
    console.log("Computer Wins")
    $("h3").text("Rock beats Scissor Computer Wins")
    
    
  }
})
$(".playAgain").click($("h3").text(""))
  $(".playAgain").click(location.reload)
})

