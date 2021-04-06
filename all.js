//  
const game = document.querySelector('.game')
const grid = document.querySelector('.grid')
const row = 6
const col = 6
const start = document.querySelector('.start')

//  check if its correct
let CheckCorrect = []
const correct = false

//  start the game
start.addEventListener('click', function(){
  createGame()

  //  cells click events
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    cell.addEventListener('click',openCard)
  })
})


//  initial information
function createGame(){
  //  build an answer
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  const answer = arr.concat(arr).sort(randomSort);

  // //  push cells into grid
  // for(let i=0;i<row*col;i++){
  //   const cell = document.createElement("div")
  //   cell.classList.add('cell')
  //   grid.appendChild(cell)

  //   const cellFront = document.createElement("div")
  //   cellFront.classList.add('cellFront')
  //   cellFront.innerHTML = `${answer[i]}`

  //   const cellBack = document.createElement("div")
  //   cellBack.classList.add('cellBack')

  //   cell.appendChild(cellFront)
  //   cell.appendChild(cellBack)
  // }
  var str = ''
  for(var i=0;i<36;i++){
    // var cellInformation = `
    // <div class="cell" id=""${i}>
    //   <div class="cellFront">${answer[i]}</div>
    //   <div class="cellBack"></div>
    // </div>
    // `
    var cellInformation = answer[i]
  }
  str = str + cellInformation
  grid.innerHTML = str
} 


function randomSort(a, b) {
  return Math.random()>.5 ? -1 : 1;
  //用Math.random()函式生成0~1之間的隨機數與0.5比較，返回-1或1
}

function openCard(){
  if(CheckCorrect.length == 2){
    CheckCorrect = []
  }else{
    this.classList('open')
    CheckCorrect.push({
      value: this.innerText,
      id: Math.random()
    })
    // check(CheckCorrect)
  }
}

// function check(CheckCorrect){
//   if(CheckCorrect.length == 2 & CheckCorrect[0] !== CheckCorrect[1]){
    
//   }
// }
