var stage = new Kinetic.Stage({
  container: 'container',
  width: 1000,
  height: 400
});

var playerLayer = new Kinetic.Layer();
var ground = new Kinetic.Layer();
var hud = new Kinetic.Layer();

var bottlesheet = new Image();
bottlesheet.onload = function(){
    bottles[0] = new Bottle(0,0,1000,1);
    bottles[1] = new Bottle(0,64,1,1);
    start();
}
bottlesheet.src = "res/bottle.png"

var dolphinsheet = new Image();
var dolphin;
dolphinsheet.onload = function(){
    dolphin = new Kinetic.Sprite({
    	x: 200,
    	y:100,
    	image: dolphinsheet,
    	animation: 'swim',
    	animations: dolphinanim,
    	frameRate: 6,
    	width: 300,
    	height: 60,
    	scaleX: .5,
    	scaleY: .5
	});
    start();
}
dolphinsheet.src = "res/dolphin.png"
