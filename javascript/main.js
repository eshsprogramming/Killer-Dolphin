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
var dolphinsheet = new Image();
var player;
dolphinsheet.onload = function(){
    player = new Player(100,100);
    start();
}
var sharksheet = new Image();
var enemy;
sharksheet.onload = function(){
    enemy = new Enemy(200,200);
    start();
}
bottlesheet.src = "res/bottle.png"
dolphinsheet.src = "res/dolphin.png"
sharksheet.src = "res/shark.png"

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
	this.x = x;
	this.y = y;
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