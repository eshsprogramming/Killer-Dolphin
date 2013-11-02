var stage = new Kinetic.Stage({
  container: 'container',
  width: 1000,
  height: 400
});

var playerLayer = new Kinetic.Layer();
var ground = new Kinetic.Layer();
var hud = new Kinetic.Layer();

var bachground;
var backgroundsheet = new Image();
backgroundsheet.onload = function(){
   background = new Kinetic.Image({
      x: 0,
      y: 0,
      image: backgroundsheet,
      width: 1000,
      height:400
    });
   start();
}

var bottlesheet = new Image();
bottlesheet.onload = function(){
    start();
}
var dolphinsheet = new Image();
var player;
dolphinsheet.onload = function(){
    player = new Player(100,100);
    start();
}
var sharksheet = new Image();
var enemies;
sharksheet.onload = function(){
    enemy = new Enemy(200,200);
    enemy.sprite.afterFrame(2, function(){
    	play_multi_sound('bite',0);

    	throw "Biting";
    });
    start();
}
bottlesheet.src = "res/bottle.png"
dolphinsheet.src = "res/dolphin.png"
sharksheet.src = "res/shark.png"
backgroundsheet.src = "res/background.png"

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
	this.x = x;
	this.y = y;
	this.weapon = Bottle;
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
function Enemy(x,y){
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
    	image: sharksheet,
    	animation: 'bite',
    	animations: sharkanim,
    	frameRate: 6,
    	width: 300,
    	height: 60,
    	scaleX: .5,
    	scaleY: .5
	});
}
var sounds = [];
function init_sound(type, channels, volume){
        sounds[type]=[]
        for (var a=0;a<channels;a++) {                                                                        
                sounds[type][a] = {};
                sounds[type][a]['channel'] = new Audio();                
                sounds[type][a]['channel'].src = document.getElementById(type).src;        
                sounds[type][a]['channel'].load();                        
                sounds[type][a]['finished'] = -1;
                if(volume)
                        sounds[type][a]['channel'].volume = volume;                                        
        }
}

function play_multi_sound(s, start) {
        for (var a=0;a<sounds[s].length;a++) {
                thistime = new Date();
                temp = sounds[s]
                if (sounds[s][a]['finished'] < thistime.getTime()) {                        // is this channel finished?
                        sounds[s][a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000 + start*1000;
                        sounds[s][a]['channel'].currentTime = start;
                        sounds[s][a]['channel'].play();
                        break;
                }
        }
}
init_sound('bite',5,.5);