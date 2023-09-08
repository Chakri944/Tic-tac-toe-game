const boxes = document.querySelectorAll(".box")
const btn = document.getElementById("btn")
let click = new Audio("click.mp3")
let reset = new Audio("reset.mp3")
let wonbgm = new Audio("win.mp3")
let turn = "X"
function changeTurn(){
    return turn==="X"?"O":"X"
}

function foundWin(){
    let boxText = document.getElementsByClassName("box-text")
    let winsprob=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    winsprob.forEach(e => {
        let info = document.getElementById("info")
        let turnName = document.getElementById("turnName")
        if (
            boxText[e[0]].innerText === boxText[e[1]].innerText &&
            boxText[e[2]].innerText === boxText[e[1]].innerText &&
            boxText[e[0]].innerText !== ""
            
            ) {
                info.style.fontSize="20px"
                info.textContent=`Hurray!! Player won with symbol:"${boxText[e[0]].innerText}"`;
                turnName.style.display="none"
                boxText[e[0]].classList.add("highlight")
                boxText[e[1]].classList.add("highlight")
                boxText[e[2]].classList.add("highlight")  
                wonbgm.play()
        }

    });
}

function removeHighlight() {
    let boxText = document.getElementsByClassName("box-text");
    for (let i = 0; i < boxText.length; i++) {
        boxText[i].classList.remove("highlight");
    }
}

boxes.forEach(box=>{
    let boxText = box.querySelector("#box-text")
    let info = document.getElementById("info")
    let turnName = document.getElementById("turnName")
    box.addEventListener("click",()=>{
        click.play()
        if(box.textContent===""){
            boxText.textContent=turn
            turn=changeTurn()
            turnName.textContent=`Now your's turn "${turn}"`
            foundWin()
            
        
        }
    })
    btn.addEventListener('click',()=>{
        reset.play()
        boxText.textContent=""
        turnName.textContent="Starts with X"
        turn=changeTurn()
        turnName.textContent="Now your's turn"+" "+turn 
        info.style.fontSize="13px"
        info.textContent="Let's embark on a thrilling journey of Xs and Os. Challenge your friends or test your skills against the computer. Are you ready to claim victory, or will you be outwitted? Let the games begin!"
        removeHighlight()
    })
})