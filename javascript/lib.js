//Library
var bottles = [];
function Bottle(x,y,dx,dy){
	this.sprite = new Kinetic.Sprite({
    	x: x,
    	y:y,
    	image: bottlesheet,
    	animation: 'fly',
    	animations: bottleanim,
    	frameRate: 12,
    	width: 256,
    	height: 256,
    	scaleX: .2,
    	scaleY: .2
	});
	this.dy = dy;
	this.dx = dx;
	this.step = function(t){
		this.sprite.setX(this.sprite.getX()+t*dx);
		this.sprite.setY(this.sprite.getY()+t*dy);
	};
}
function Player(x,y){
	this.x = 100;
	this.y = 100;
	this.setX = function(x){
		this.x = x;
		this.sprite.setX(x);
	};
	this.setY = function(y){
		this.y = y;
		this.sprite.setY(y);
	};
	this.setDirection = function(direction){
                    if(direction > 0){
                        if(this.sprite.getScaleX() < 0){
                                 this.sprite.setScaleX(-this.sprite.getScaleX());
                                 player.setX(this.sprite.getX()-this.sprite.getWidth()/2);
                        }
                    }else{
                        if(this.sprite.getScaleX() > 0){
                          this.sprite.setScaleX(-this.sprite.getScaleX());
                          player.setX(this.sprite.getX()+this.sprite.getWidth()/2);
                        }
                    }
                },
	this.sprite =  new Kinetic.Sprite({
    	x: this.x,
    	y: this.y,
    	image: dolphinsheet,
    	animation: 'swim',
    	animations: dolphinanim,
    	frameRate: 6,
    	width: 300,
    	height: 60,
    	scaleX: .5,
    	scaleY: .5
	});
}
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
var number = 2;
function start(){
	console.log(number);
	number--
	if(number <= 0){
		stage.add(ground);
		playerLayer.add(player.sprite);
  		stage.add(playerLayer);
  		for(var i = 0; i < bottles.length;i++)
  			hud.add(bottles[i].sprite);
  		stage.add(hud);
  		for(var i = 0; i < bottles.length;i++)
 			bottles[i].sprite.start();
 		player.sprite.start();
 		window.setInterval(loop,30)
	}
}