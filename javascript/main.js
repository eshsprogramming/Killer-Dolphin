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
     bottle = new Kinetic.Sprite({
    	x: 0,
    	y:0,
    	image: bottlesheet,
    	animation: 'fly',
    	animations: bottleanim,
    	frameRate: 12,
    	width: 256,
    	height: 256,
    	scaleX: .25,
    	scaleY: .25
  });
  stage.add(ground);
  stage.add(playerLayer);
  hud.add(bottle);

  stage.add(hud);
  bottle.start();
  
}
bottlesheet.src = "res/bottle.png"
