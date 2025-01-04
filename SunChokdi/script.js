// Declaration of checking array
let crossChecker = new Array(10).fill(false);
let zeroChecker = new Array(10).fill(false);

let counter = 2;
console.log
let win = false;


let Won = (a,b,c) => {
    counter--;
    document.querySelector('.Turn').textContent = "WON :";
    win = true;

    //Coloring the win Boxes
    if(counter%2 === 0){
    
        document.querySelector(`${boxName[a]} .cross`).style.backgroundColor = '#fdd813';
        document.querySelector(`${boxName[b]} .cross`).style.backgroundColor = '#fdd813';
        document.querySelector(`${boxName[c]} .cross`).style.backgroundColor = '#fdd813';
    }else{
        document.querySelector(`${boxName[a]} .circle`).style.backgroundColor = '#fdd813';
        document.querySelector(`${boxName[b]} .circle`).style.backgroundColor = '#fdd813';
        document.querySelector(`${boxName[c]} .circle`).style.backgroundColor = '#fdd813';

        document.querySelector(`${boxName[a]} .circle .innerCircle`).style.backgroundColor = '#fdd813';
        document.querySelector(`${boxName[b]} .circle .innerCircle`).style.backgroundColor = '#fdd813';
        document.querySelector(`${boxName[c]} .circle .innerCircle`).style.backgroundColor = '#fdd813';
    }
}
//Rule BOOKs
let RuleBook = arr => {
    if (((arr[1] === arr[2]) && (arr[1]) === arr[3]) && arr[1] === true) {
        Won(1,2,3);
        
    } else if (((arr[4] === arr[5]) && (arr[5]) === arr[6]) && arr[4] === true) {
        Won(4,5,6);
    } else if (((arr[7] === arr[8]) && (arr[7]) === arr[9]) && arr[7] === true) {
        Won(7,8,9);
    } else if (((arr[1] === arr[5]) && (arr[5]) === arr[9]) && arr[1] === true) {
        Won(1,5,9);
    } else if (((arr[3] === arr[5]) && (arr[3]) === arr[7]) && arr[3] === true) {
        Won(3,5,7);
    } else if (((arr[1] === arr[4]) && (arr[4]) === arr[7]) && arr[7] === true) {
        Won(1,4,7);
    } else if (((arr[2] === arr[5]) && (arr[5]) === arr[8]) && arr[2] === true) {
        Won(2,5,8);
    } else if (((arr[3] === arr[6]) && (arr[3]) === arr[9]) && arr[6] === true) {
        Won(3,6,9);
    }
}



//unHideing the cross and zeros at each div box
let boxName = ['Kasu_Nathi', '.box1', '.box2', '.box3', '.box4', '.box5', '.box6', '.box7', '.box8', '.box9', '.box10'];
console.log(boxName[0]);
for (let i = 1; i < 10; i++) {
    document.querySelector(boxName[i]).addEventListener('click', function () {
        if ((crossChecker[i] === false && (zeroChecker[i] === false)) && (counter % 2 === 0)&&(win === false)) {
            document.querySelector(`${boxName[i]} .cross`).classList.remove('hidden');
            crossChecker[i] = true;
            counter++;
            RuleBook(crossChecker);

        } else if ((crossChecker[i] === false) && (zeroChecker[i] === false) && (counter % 2 === 1)&&(win === false)) {
            document.querySelector(`${boxName[i]} .circle`).classList.remove('hidden');
            zeroChecker[i] = true;
            counter++;
            console.log(counter);
            RuleBook(zeroChecker);
        }
        console.log(boxName[i])
        console.log(crossChecker, " ", zeroChecker);
        if(counter%2 === 0){
            document.querySelector('.PlayerNo').textContent = "Player1";
        }else if(counter%2 ===1){
            document.querySelector('.PlayerNo').textContent = "Player2";
        }
    })

}

//Reset the board
document.querySelector('.btn').addEventListener('click',function (){
    location.reload();
})
