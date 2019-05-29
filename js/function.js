

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

