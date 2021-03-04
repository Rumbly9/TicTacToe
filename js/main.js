// const for DOM ------------------ //
const btn = document.querySelector("button")
const squares = document.querySelectorAll(".square")
const overlay = document.querySelector("#overlay")
const whoWon = document.querySelector("#whoWon")
const playerTurn = document.querySelector("#playerTurn")
// expr for logic ------------------ //
let game = {
  currentPlayer : "X",
  winCond : [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  gameCond : ["", "", "", "", "", "", "", "", ""],
  domPrint : function(){
    playerTurn.innerText = `Player ${this.currentPlayer} turn`
  },
  playerHandler : function(){
    this.currentPlayer === "X" ? this.currentPlayer = "O" : this.currentPlayer = "X";
    playerTurn.innerText = `Player ${this.currentPlayer} turn`;
  }
}

let boxClick = {
  clickHandler : function(){
    squares.forEach(item => {
      item.addEventListener("click", function(){
        item.innerText = game.currentPlayer;
        game.gameCond[Number(item.getAttribute("data-cell-index"))] = game.currentPlayer;
        resultCheck.run()
      })
    })
  }
}

let resultCheck = {
  run : function(){
    let roundWon = false;
    for (let i = 0; i < 8; i++){
      const winCheck = game.winCond[i]
      let c1 = game.gameCond[winCheck[0]]
      let c2 = game.gameCond[winCheck[1]]
      let c3 = game.gameCond[winCheck[2]]
      if (c1 === "" || c2 === "" || c3 === ""){
        continue;
      }
      if (c1 === c2 && c2 === c3){
        roundWon = true;
        break;
      }
    }
    if (roundWon){
      whoWon.innerText = `Player ${game.currentPlayer} win!`;
      overlay.classList.add("overlay")
      return;
    }
    if (!game.gameCond.includes("")){
      whoWon.innerText = `It's a draw!`
      overlay.classList.add("overlay")
      return;
    }
    game.playerHandler();
  }
}

let newGame = {
  run : function(){
    btn.addEventListener("click", function(){
      game.gameCond = ["", "", "", "", "", "", "", "", ""];
      game.currentPlayer = "X";
      squares.forEach(item => item.innerText = null);
      whoWon.innerText = "";
      overlay.classList.remove("overlay");
    })
  }
}
// method call ------------------- //
game.domPrint();
boxClick.clickHandler();
newGame.run();
