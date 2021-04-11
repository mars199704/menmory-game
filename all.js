//  game const
const game = document.querySelector('.game')
const grid = document.querySelector('.grid')
const row = 6
const col = 6

//  check if its correct
let CheckCorrect = []
//  the place which can't click
let totalCorrect = []
let point = 0

//  timer
const information = document.querySelector('.information')
const create = document.querySelector('.create')
const start = document.querySelector('.startTime')

//  message
const message = document.querySelector('.winningMessage')

//  create the game
create.addEventListener('click', function(){
  createGame()

  //  cells & click events
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    cell.addEventListener('click',function(){
      const vm = this
      openCard(vm, cells)
      console.log(this, CheckCorrect, point ,totalCorrect)
    })
  })

  //  start the game
  start.addEventListener('click', function(){
    cells.forEach(cell => {
      cell.classList.remove('open')
    })
    let time = 0

    //  just improve that someone wanna try the same game again
    CheckCorrect = []
    totalCorrect = []
    point = 0
    startTheTime(time)
  })
})


//  initial information
function createGame(){
  //  build an answer
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  const answer = arr.concat(arr).sort(randomSort);

  CheckCorrect = []
  totalCorrect = []
  point = 0

  let str = ''
  for(var i=0;i<36;i++){
    var cellInformation = `
    <div class="cell open" id="${i}">
      <div class="cellFront">${answer[i]}</div>
      <div class="cellBack"></div>
    </div>
    `
    str += cellInformation
  }
  grid.innerHTML = str
}

//  get random []
function randomSort(a, b) {
  return Math.random()>.5 ? -1 : 1;
}

//  timer
function startTheTime(time){
  const start = setInterval(() => {
    if(totalCorrect.length == 36){
      let totalTime = time
      clearInterval(start);
      let str = `
      <p>${parseInt(totalTime/60)} min ${totalTime % 60} sec</p>
      <button class="restart">restart</button>
      `
      message.innerHTML = str
      message.classList.remove('none')
      const restart = document.querySelector('.restart')
      //  restart
      restart.addEventListener('click', function(){
        message.classList.add('none')
      })
    }
    time ++   
    const CheckTime = document.getElementById("CheckTime")
    CheckTime.innerHTML = `${parseInt(time/60)} min ${time % 60} sec`;
  }, 1000);
}

//  open card function & logic
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
      check(cells)
      CheckCorrect = []
    }
  }
}

//  check if you get the same num
function check(cells){
  let value1 = CheckCorrect[0].value
  let value2 = CheckCorrect[1].value
  let id1 = CheckCorrect[0].id
  let id2 = CheckCorrect[1].id
  if(value1 == value2){   //  change it plz !!
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
