// rock vs paper vs scissors

// Global variables

// Computer options
const computer_options = ["rock", "paper", "scisors"]

// Count who´s win
var cmp_wins = 0
var ply_wins = 0

// The computer chooses an option
function getComputerOption () {

  const computer_options = ["rock", "paper", "scisors"]
  
  let cmp_option = Math.floor(Math.random()*10) + 1
  cmp_option = cmp_option % 3
  
  // return the option
  return computer_options[cmp_option]
}

// The player introduces an option
function getPlayerOption () {
  let ply_option = prompt("Introduce an option to play: ")
  ply_option.toLowerCase()
  
  //Check if the option is valid
  let i = false
  while (i === false){
    switch(ply_option){
      case "rock":
      case "paper":
      case "scissors":
        i = true
        break
      default:
        // When the option is invalid do this
        ply_option = prompt("Introduce a valid option")
    }      
  }
  
  // return the option
  return ply_option
}


// Play one round
function playround (ply,comp) {
  
  // Check the player option vs computer options
  switch(ply){
    case "rock":
      // When player chose rock, check the computer option
      switch(comp){
        case "rock":
          console.log("Tie, rock vs rock")
          console.log(`Tie, ${ply} vs ${comp}`)
          break
        case "scissors":
          console.log(`You win, ${ply} vs ${comp}`)
          ply_wins++
          break
        case "paper":
          console.log(`You lose, ${ply} vs ${comp}`)
          cmp_wins++
          break
      }
      break
      
    case "paper":
      //When player chose paper, check the computer option
      switch(comp){
        case "rock":
          console.log(`You win, ${ply} vs ${comp}`)
          ply_wins++
          break
        case "scissors":
          console.log(`You lose, ${ply} vs ${comp}`)
          cmp_wins++
          break
        case "paper":
          console.log("Tie, paper vs paper")
          console.log(`Tie, ${ply} vs ${comp}`)
          break
      }
      break
      
    case "scissors":
      // When player chose scissors, check the computer option
      switch(comp){
        case "rock":
          console.log(`You lose, ${ply} vs ${comp}`)
          cmp_wins++
          break
        case "scissors":
          console.log("Tie, scissors vs scissors")
          console.log(`Tie, ${ply} vs ${comp}`)
          break
        case "paper":
          console.log(`You win, ${ply} vs ${comp}`)
          ply_wins++
          break
      }
      break  
  }
}

//How many rounds do you want to play?
let rounds = parseInt(prompt("How many rounds do you want to play? "))
                    
function countRounds(a) {
  let i = 0
  while (i!=a){
    playround(getPlayerOption(),getComputerOption())
    i++
  }
}

// Who´s the global winner
function globalWinner(ply,cmp){
  const winner = ply > cmp ? "Eres el ganador" : cmp > ply ? "Has perdido" : "Es un empate"
  console.log(winner)
}

// Let´s play
countRounds(rounds)
globalWinner(ply_wins,cmp_wins)