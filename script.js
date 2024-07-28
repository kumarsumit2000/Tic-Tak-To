let boxes = document.querySelectorAll(".box");
let turnO = true;
let count = 0;
let reset = document.querySelector("#reset");
let winnershow = document.querySelector("#winnershow");
const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];
function resetd(){
    reset.addEventListener("click", ()=>{
        boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
        winnershow.innerText = "";
        count = 0

        })
    })}
  
    let showwiner = (posFirst) =>{
        winnershow.innerText = `${posFirst} : Side Won The Game`;
        reset.style.display = "block";
    }
    function drawgame(){
        winnershow.innerText = `Game is draw! Try again`;
        reset.style.display = "block";
    
    }
boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                box.style.border = "2px green solid";
                turnO = false;
            } else {
                box.innerText = "X";
                box.style.border = "2px red solid";
                turnO = true;
            }
            box.disabled = true;
            count++;
            let winner = checkWinner()
            if (count === 9 && !winner) {
                drawgame();
                count = 0;
            }
        }
       
    });
});

function checkWinner() {
    for (let pattern of winPattern) {
        let posFirst = boxes[pattern[0]].innerText;
        let posSecond = boxes[pattern[1]].innerText;
        let posLast = boxes[pattern[2]].innerText;
        if (posFirst !== "" && posFirst === posSecond && posFirst === posLast) {
            showwiner(posFirst);
            count = 0;
            // Add logic to disable all boxes or reset the game
            boxes.forEach(box => box.disabled = true);
            reset.style.display = "block";
            return;
        }
    }
 
    resetd();
}


