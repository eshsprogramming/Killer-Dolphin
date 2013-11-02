var keys = [];
var bindingsDown = [], bindingsUp = [];
var a=65,w=87,d=68,s=83,space=32;
document.onkeydown = function(evt){
  if(!keys[evt.keyCode] ){
    keys[evt.keyCode] = true;
    console.log(evt.keyCode);
    if(bindingsDown[evt.keyCode])
      bindingsDown[evt.keyCode]();
  }
}
document.onkeyup = function(evt){
  keys[evt.keyCode] = false;
  if(bindingsUp[evt.keyCode])
      bindingsUp[evt.keyCode]();
};
bindingsDown[a]=function(){player.setDirection(-1);}
bindingsDown[d]=function(){player.setDirection(1);}
bindingsDown[space]=function(){
	var ty=0;
	var tx = 300*((player.sprite.getScaleX() > 0)?1:-1);
	if(keys[w])//up
  		ty-=100;
  	if(keys[s])//down
  		ty+=100;
  	var temp = new Bottle(player.x,player.y+player.sprite.getHeight()/2,tx,ty);
  	hud.add(temp.sprite);
  	temp.sprite.start();
	bottles.push(temp);
}