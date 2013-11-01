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
    	scaleX: .25,
    	scaleY: .25
	});
	this.dy = dy;
	this.dx = dx;
	this.step = function(t){
		this.sprite.setX(this.sprite.getX()+t*dx);
		this.sprite.setY(this.sprite.getY()+t*dy);
	};
}
function loop(){
	console.log("loop")
	for(var i = 0; i < bottles.length;i++)
  			bottles[i].step(.03);
}
var number = 2;
function start(){
	console.log(number);
	number--
	if(number <= 0){
		stage.add(ground);
		playerLayer.add(dolphin);
  		stage.add(playerLayer);
  		for(var i = 0; i < bottles.length;i++)
  			hud.add(bottles[i].sprite);
  		stage.add(hud);
  		for(var i = 0; i < bottles.length;i++)
 			bottles[i].sprite.start();
 		dolphin.start();
 		window.setInterval(loop,30)
	}
}