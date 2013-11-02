//Library
function loop(){
	var t = .03;
	for(var i = projectiles.length - 1; i >= 0;i--){
  			projectiles[i].step(t);
  			if(projectiles[i].sprite.getX() + projectiles[i].sprite.getWidth()*projectiles[i].sprite.getScaleX()< 0 ||
  				 projectiles[i].sprite.getX() > stage.getWidth()  || projectiles[i].sprite.getY() > stage.getHeight() || 
  				projectiles[i].sprite.getY() + projectiles[i].sprite.getHeight()*projectiles[i].sprite.getScaleY() < 0){
  				projectiles[i].sprite.remove()
  				projectiles.splice(i,1)
  			}
  				
  	}
  	playerLoop(t);
}
function enemyLoop(t){
}
function playerLoop(t){
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
var number = 4;
var enemies = [];
var projectiles = [];
function start(){
	number--


	if(number <= 0){
		enemies[0] = new Enemy(200,200);
		enemies[0].sprite.afterFrame(2, function(){
    		play_multi_sound('bite',0);
    	});
		ground.add(background);
		stage.add(ground);
		playerLayer.add(player.sprite);
		for(var i = 0; i < enemies.length;i++)
  			playerLayer.add(enemies[i].sprite);
  		stage.add(playerLayer);
  		for(var i = 0; i < projectiles.length;i++)
  			hud.add(projectiles[i].sprite);
  		stage.add(hud);
  		for(var i = 0; i < projectiles.length;i++)
 			projectiles[i].sprite.start();
 		for(var i = 0; i < enemies.length;i++)
 			enemies[i].sprite.start();
 		player.sprite.start();
 		window.setInterval(loop,30)
	}
}
