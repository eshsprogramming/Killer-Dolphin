//Library

function loop(){
	var t = .03;
	console.log("loop")
	for(var i = 0; i < bottles.length;i++)
  			bottles[i].step(t);
  	if(keys[a])//left
  		player.x-=10;
  	if(keys[w])//up
  		player.y-=10;
  	if(keys[d])//right
  		player.x+=10;
  	if(keys[s])//down
  		player.y+=10;
  	if(!keys[a]&&!keys[w]&&!keys[s]&&!keys[d]&&player.sprite.getAnimation()!='idle')
  		player.sprite.setAnimation('idle');
  	else if(player.sprite.getAnimation()=='idle'&&(keys[a]||keys[w]||keys[s]||keys[d]))
  		player.sprite.setAnimation('swim');
  	player.sprite.setX(player.x);
  	player.sprite.setY(player.y);
}
var number = 3;
function start(){
	console.log(number);
	number--
	if(number <= 0){
		stage.add(ground);
		playerLayer.add(player.sprite);
		playerLayer.add(enemy.sprite);
  		stage.add(playerLayer);
  		for(var i = 0; i < bottles.length;i++)
  			hud.add(bottles[i].sprite);
  		stage.add(hud);
  		for(var i = 0; i < bottles.length;i++)
 			bottles[i].sprite.start();
 		player.sprite.start();
 		enemy.sprite.start();
 		window.setInterval(loop,30)
	}
}