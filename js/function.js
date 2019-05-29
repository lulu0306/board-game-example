

//show the playing board

function startGame(){
	playerContainerDiv.show();
	wrapper.show();
	generateGrass();
	generateStone();
	generatePlayers();
	generateWeapons();
	draw();
    startContainer.hide();
    $('#player-1').addClass('active-board');
}


/*let scorePlayer1 = document.getElementById('score1').innerHTML = 100;
let  scorepLayer2 =  document.getElementById('score2').innerHTML = 100;*/