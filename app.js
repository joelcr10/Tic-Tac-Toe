 let cells = document.querySelectorAll('.row > div ');
 var symbol = 'X';
 var flag=0;
 console.log(cells);


 var row = ["top","center","bottom"];
 var column = ["left","middle","right"];

 for(let i=0;i<cells.length;i++){
    cells[i].addEventListener('click',cellClicked);
 }

 function cellClicked(event){
    //console.log(event.target.textContent );
    
    if(event.target.textContent == 'X' || event.target.textContent == "O"){
        console.log("invalid move");
        window.alert("invalid move")
    }
    else{

        event.target.textContent = symbol;
        cName = event.target.className;
        
        //console.log(cells[0].target);
        checkDiagonally(event);
        checkHorizontally(event);
        checkVertically(event);
        checkDraw(event);
        //checkDiagonally(event);
        if(symbol == 'X'){
            symbol = 'O';
        }
        else{
            symbol = 'X';
        }
    }
}

function checkHorizontally(event){
    //let temp = document.getElementsByClassName(cName).value;
    //console.log(temp);
    checkrow(0,3,cells[0].textContent);
    checkrow(3,6,cells[3].textContent);
    checkrow(6,9,cells[6].textContent);
}
    
function checkrow(start,end,symbol){
    frequency=0;
    if(symbol == 'X' || symbol =='O'){
        for(let i=start;i<end;i++){
            if(cells[i].textContent == symbol){
                frequency++
            }
        }
        if(frequency==3){
            console.log(symbol+" won");
            displayResult(symbol,frequency);
        }

    }
}

function checkVertically(event){
    checkColumn(0,7,cells[0].textContent);
    checkColumn(1,8,cells[1].textContent);
    checkColumn(2,9,cells[2].textContent);
}

function checkColumn(start,end,symbol){
    frequency=0;
    if( symbol == 'X' || symbol == 'O'){
        for(let i=start;i<end;i=i+3){
            if(cells[i].textContent == symbol){
                frequency++;
            }
        }

        if(frequency==3){
            console.log(symbol," won vertically");
            displayResult(symbol,frequency);
        }
    }
}


function checkDiagonally(event){
    frequency = 0;

    temp = cells[0].textContent;
    if(temp == 'X' || temp == 'O'){
        for(let i=0;i<9;i=i+4){
            if(temp == cells[i].textContent){
                frequency++;
            }
        }
        if(frequency==3){
            console.log(temp+"1 won diagonally");
            displayResult(symbol,frequency);
        }
    }

    frequency = 0;
    temp = cells[2].textContent;
    if(temp == 'X' || temp == 'O'){
        for(let i=2;i<7;i=i+2){
            if(temp == cells[i].textContent){
                frequency++;
            }
        }
        if(frequency==3){
            console.log(temp+"2 won diagonally");
            displayResult(symbol,frequency);
        }
    }
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

function displayResult(symbol,frequency){
    if(frequency==3){
        flag = 1
        console.log(symbol+" won");
        document.getElementById("matchResult").innerHTML=symbol+" won";
        //window.alert('Refresh to start a new game');
    }
    else if(frequency==9 && flag==0){
        console.log("Draw");
        document.getElementById("matchResult").innerHTML="DRAW";
    }

    sleep(1000).then(()=>{
        window.alert("Refresh to start a new game");
    });

    for(let i=0;i<cells.length;i++){
        cells[i].removeEventListener('click',cellClicked);
    }
    
}


function checkDraw(event){
    frequency=0
    for(let i=0;i<9;i++){
        if(cells[i].textContent=='X' || cells[i].textContent=='O'){
            frequency++;
        }
    }

    if(frequency==9){
        displayResult(symbol,frequency);
    }
}


end:
    console.log("Thank you for playing")