// const for DOM ------------------ //
const btn = document.querySelector("button")
const squares = document.querySelectorAll(".square")
const sqOne = document.querySelector("#one")
const sqTwo = document.querySelector("#two")
const sqThree = document.querySelector("#three")
const sqFour = document.querySelector("#four")
const sqFive = document.querySelector("#five")
const sqSix = document.querySelector("#six")
const sqSeven = document.querySelector("#seven")
const sqEight = document.querySelector("#eight")
const sqNine = document.querySelector("#nine")
// const for boxes (red)
const b1 = getComputedStyle(sqOne).backgroundColor
const b2 = getComputedStyle(sqTwo).backgroundColor
const b3 = getComputedStyle(sqThree).backgroundColor
const b4 = getComputedStyle(sqFour).backgroundColor
const b5 = getComputedStyle(sqFive).backgroundColor
const b6 = getComputedStyle(sqSix).backgroundColor
const b7 = getComputedStyle(sqSeven).backgroundColor
const b8 = getComputedStyle(sqEight).backgroundColor
const b9 = getComputedStyle(sqNine).backgroundColor
// const for boxes (blue)
const b1b = getComputedStyle(sqOne).backgroundColor === "rgb(0, 0, 255)"
const b2b = getComputedStyle(sqTwo).backgroundColor === "rgb(0, 0, 255)"
const b3b = getComputedStyle(sqThree).backgroundColor === "rgb(0, 0, 255)"
const b4b = getComputedStyle(sqFour).backgroundColor === "rgb(0, 0, 255)"
const b5b = getComputedStyle(sqFive).backgroundColor === "rgb(0, 0, 255)"
const b6b = getComputedStyle(sqSix).backgroundColor === "rgb(0, 0, 255)"
const b7b = getComputedStyle(sqSeven).backgroundColor === "rgb(0, 0, 255)"
const b8b = getComputedStyle(sqEight).backgroundColor === "rgb(0, 0, 255)"
const b9b = getComputedStyle(sqNine).backgroundColor === "rgb(0, 0, 255)"
// const for boxes (white)
const b1w = getComputedStyle(sqOne).backgroundColor === "rgb(255, 255, 255)"
const b2w = getComputedStyle(sqTwo).backgroundColor === "rgb(255, 255, 255)"
const b3w = getComputedStyle(sqThree).backgroundColor === "rgb(255, 255, 255)"
const b4w = getComputedStyle(sqFour).backgroundColor === "rgb(255, 255, 255)"
const b5w = getComputedStyle(sqFive).backgroundColor === "rgb(255, 255, 255)"
const b6w = getComputedStyle(sqSix).backgroundColor === "rgb(255, 255, 255)"
const b7w = getComputedStyle(sqSeven).backgroundColor === "rgb(255, 255, 255)"
const b8w = getComputedStyle(sqEight).backgroundColor === "rgb(255, 255, 255)"
const b9w = getComputedStyle(sqNine).backgroundColor === "rgb(255, 255, 255)"
// expr for logic ------------------ //
squares.forEach(item => { // The purpose of this loop is to make every square listened
  item.addEventListener("click", function(){
    item.style.backgroundColor = "red"; // This line is for making the clicked square turns red
    // conditionals for bot ----------- //
    setTimeout(function(){
      if (getComputedStyle(item).backgroundColor === "rgb(255, 0, 0)"){
        // first row ------------------ //
        if(Math.random() < 1/3){
          if(Math.random() < 1/3 && (getComputedStyle(sqOne).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqOne).backgroundColor !== "rgb(0, 0, 255)")){
            sqOne.style.backgroundColor = "blue"
          }else if(1/3 < Math.random() < 2/3 && (getComputedStyle(sqTwo).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqTwo).backgroundColor !== "rgb(0, 0, 255)")){
            sqTwo.style.backgroundColor = "blue"
          }else if(getComputedStyle(sqThree).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqThree).backgroundColor !== "rgb(0, 0, 255)"){
            sqThree.style.backgroundColor = "blue"
          }
        }
        // second row ---------------- //
        else if(1/3 < Math.random() < 2/3){
          if(Math.random() < 1/3 && (getComputedStyle(sqFour).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqFour).backgroundColor !== "rgb(0, 0, 255)")){
            sqFour.style.backgroundColor = "blue"
          }else if(1/3 < Math.random() < 2/3 && (getComputedStyle(sqFive).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqFive).backgroundColor !== "rgb(0, 0, 255)")){
            sqFive.style.backgroundColor = "blue"
          }else if(getComputedStyle(sqSix).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqSix).backgroundColor !== "rgb(0, 0, 255)"){
            sqSix.style.backgroundColor = "blue"
          }
        }
        // third row ---------------- //
        else{
          if(Math.random() < 1/3 && (getComputedStyle(sqSeven).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqSeven).backgroundColor !== "rgb(0, 0, 255)")){
            sqSeven.style.backgroundColor = "blue"
          }else if(1/3 < Math.random() < 2/3 && (getComputedStyle(sqEight).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqEight).backgroundColor !== "rgb(0, 0, 255)")){
            sqEight.style.backgroundColor = "blue"
          }else if(getComputedStyle(sqNine).backgroundColor !== "rgb(255, 0, 0)" && getComputedStyle(sqNine).backgroundColor !== "rgb(0, 0, 255)"){
            sqNine.style.backgroundColor = "blue"
          }
        }
      }
    }, 300)
  })
  // expr for new Game ---------------- //
  btn.addEventListener("click", function(){
    item.removeAttribute("style")
  })

})
