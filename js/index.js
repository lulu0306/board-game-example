
const GRASS= 0;
const ROCK = 1;
const PLAYER1 = 2;
const PLAYER2 = 3;
const WEAPON1 = 4;
const WEAPON2 = 5;
const WEAPON3 = 6;
const WEAPON4 = 7;
const rows = 7;
const cols = 10;
/*var map = [
                                              
[7,0,0,0,0,0,6,0,1,0],
[0,0,0,0,2,1,0,0,0,0], 
[0,0,0,0,0,0,0,0,0,0],
[0,4,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,1,0],
[0,0,3,0,0,0,0,0,5,0],
[0,0,1,0,0,0,0,0,0,0]

]
*/

var map = []
let player1X;
let player1Y;
let player2X;
let player2Y;
let currentPlayer = PLAYER1;
let currentPlayerX, currentPlayerY

function draw() {

    let wrapper = document.getElementById('wrapper')  
    wrapper.innerHTML = "";
    for(let i = 0; i < map.length; i++){
        for(let j = 0;  j < map[i].length; j++){
            let box = document.createElement("div")
                box.innerHTML = "&nbsp;"
                box.innerHTML = "("+ i+","+j+")"
     if(map[i][j] === GRASS){  
                box.setAttribute("class","box grass")
                    
  
     }else if(map[i][j]===ROCK){            
                box.setAttribute("class","box rock")
       
     }else if(map[i][j]===PLAYER1){             
                box.setAttribute("class","box player1")
       
     }else if(map[i][j]===PLAYER2){             
                box.setAttribute("class","box player2")
       
     }else if(map[i][j]===WEAPON1){             
                box.setAttribute("class","box weapon1")
       
     }else if(map[i][j]===WEAPON2){             
                box.setAttribute("class","box weapon2")
       
     }else if(map[i][j]===WEAPON3){             
                box.setAttribute("class","box weapon3")
       
     }else{
        box.setAttribute("class","box weapon4")
     }

        wrapper.appendChild(box)
     
    }
}
}



function generateGrass (){
    map = [];
    for(var i = 0 ; i < rows ; i ++){
       let row = new Array(cols).fill(GRASS);
       map.push(row);
    }
}

function generateStone(){
    let numberOfStones = Math.round((10/100)*rows*cols)
    let counter = 0;
    while(counter < numberOfStones){
        let x = Math.floor(Math.random()*rows);
        let y = Math.floor(Math.random()*cols);
        if(map[x][y] === GRASS){
            map[x][y] = ROCK
            counter++;
        }
    }

}




function generatePlayers(){
    let counter = 0;

    while(counter<2){
        let  x = Math.floor(Math.random()*rows);
        let  y = Math.floor(Math.random()*cols);
        if(map[x][y] === GRASS){
            if(counter === 0){
                map[x][y] = PLAYER1;
                player1X = x;
                player1Y = y;
                counter++;
            }else if(counter === 1 && placePlayer2(x,y) === true){
                map[x][y] = PLAYER2;
                player2X =x;
                player2Y = y;
                counter++;
            }
        }
    }
    currentPlayerX =   player1X;
    currentPlayerY = player1Y;
}


function generateWeapons(){

    let weapons = [WEAPON1,WEAPON2,WEAPON3,WEAPON4];
    let counter = 0;


    while(counter < weapons.length){

    let  x = Math.floor(Math.random()*rows);
    let  y = Math.floor(Math.random()*cols); 

    if(map[x][y] === GRASS){
        map[x][y] = weapons[counter];
        counter++;
    }
    }
}


function validPosition(x,y){

   if(x >= 0 && x < rows && y >= 0 && y < cols){
      return true
   }else{
    return false
   }
}


function placePlayer2(x,y){

if(map[x][y]!== PLAYER1 || map[x][y-1] !== PLAYER1 || map[x][y+1] !== PLAYER1 || map[x-1][y] !== PLAYER1 || map[x+1][y] !== PLAYER1){
 return true
}else{
    return false
}
    
}


       

function up(){
    var x =  currentPlayerX;
    var y = currentPlayerY;
    var newX = x-1;
    var newY = y;

    if(validPosition(newX,newY )=== true){
        if(map[newX][newY] === GRASS){

            currentPlayerX = newX
            currentPlayerY= newY
            map[newX][newY] = currentPlayer
            map[x][y] = GRASS;
            sync();
            draw();
        }
    }

}




function down(){
    var x =  currentPlayerX;
    var y = currentPlayerY;
    var newX = x+1;
    var newY = y;

    if (validPosition(newX,newY )=== true){
        if(map[newX][newY] === GRASS){

            currentPlayerX = newX
            currentPlayerY= newY
            map[newX][newY] = currentPlayer
            map[x][y] = GRASS;
            sync();
            draw();
        }
    }

}


function left(){
    var x =  currentPlayerX;
    var y = currentPlayerY;
    var newX = x;
    var newY = y-1;

    if(validPosition(newX,newY )=== true){
        if(map[newX][newY] === GRASS){
            currentPlayerX = newX
            currentPlayerY= newY
            map[newX][newY] = currentPlayer
            map[x][y] = GRASS;
            sync();
            draw();
        }
    }

}



function right(){
    var x =  currentPlayerX;
    var y = currentPlayerY;
    var newX = x;
    var newY = y+1;

    if(validPosition(newX,newY )=== true){
        if(map[newX][newY] === GRASS){

            currentPlayerX = newX
            currentPlayerY= newY
            map[newX][newY] = currentPlayer
            map[x][y] = GRASS;
            sync()
            draw();
        }
    }

}



function changePlayer() {
    if(currentPlayer===PLAYER1) {
        player1X = currentPlayerX
        player1Y = currentPlayerY
        currentPlayer= PLAYER2
        currentPlayerX = player2X
        currentPlayerY = player2Y
    }
    else {
        player2X = currentPlayerX
        player2Y = currentPlayerY
        currentPlayer= PLAYER1
        currentPlayerX = player1X
        currentPlayerY = player1Y
    }
}


function sync() {
    if(currentPlayer===PLAYER1) {
        player1X = currentPlayerX
        player1Y = currentPlayerY

    }
    else {
        player2X = currentPlayerX
        player2Y = currentPlayerY

    }
}





