//  
const game = document.querySelector('.game')
const grid = document.querySelector('.grid')
const row = 6
const col = 6
const start = document.querySelector('.start')

//  check if its correct
let CheckCorrect = []
//  the place which can't click
let totalCorrect = []
let point = 0
const correct = false

//  start the game
start.addEventListener('click', function(){
  start.classList.add('none')
  createGame()

  //  cells click events
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    cell.addEventListener('click',function(){
      const vm = this
      openCard(vm, cells)



      console.log(CheckCorrect, point ,totalCorrect)
    })
  })


})

//  initial information
function createGame(){
  //  build an answer
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  const answer = arr.concat(arr).sort(randomSort);

  var str = ''
  for(var i=0;i<36;i++){
    var cellInformation = `
    <div class="cell" id="${i}">
      <div class="cellFront">${answer[i]}</div>
      <div class="cellBack"></div>
    </div>
    `
    str += cellInformation
  }
  grid.innerHTML = str
}

function randomSort(a, b) {
  return Math.random()>.5 ? -1 : 1;
  //用Math.random()函式生成0~1之間的隨機數與0.5比較，返回-1或1
}

function openCard(vm, cells){
  vm.classList.add('open')
  CheckCorrect.push({
    value: vm.innerText,
    id: vm.id
  })

  if(CheckCorrect.length == 2){
    if(CheckCorrect[1].id == CheckCorrect[0].id){
      CheckCorrect.pop()
    }
    else{
      check(CheckCorrect, cells)
      CheckCorrect = []
    }
  }
}

function check(CheckCorrect, cells){
  let value1 = CheckCorrect[0].value
  let value2 = CheckCorrect[1].value
  let id1 = CheckCorrect[0].id
  let id2 = CheckCorrect[1].id
  if(value1 == value2){
    point += 1
    totalCorrect.push(id1, id2)
    return
  }else{
    setTimeout(function() {
      cells[id1].classList.remove('open')
      cells[id2].classList.remove('open')
    }, 1000)
  }
}