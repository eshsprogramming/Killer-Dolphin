var bottleA = {
  anims:[{name: 'fly', slides:[0,2,1,3,4,6,5,7]}],
         columns:4,rows:2,width:256,height:256};
var dolphinA = {
  anims:[{name: 'swim', slides:[0,1]},
         {name: 'idle', slides:[0]}],
         columns:2,rows:1,width:300,height:120};
var bottleanim = AnimationSet(bottleA);
var dolphinanim = AnimationSet(dolphinA);

function AnimationSet(data){
  var out = {};
  for(var i = 0; i < data.anims.length; i++){
    out[data.anims[i].name]=Animation(data.anims[i].slides,data);
  }
  return out;
}
function Animation(slides, data){
  var x,y;
  var out=[];
  for(var i = 0; i < slides.length; i++){
    x = slides[i]%data.columns;
    y = Math.floor(slides[i]/data.columns);
    out[i] = {'x': x*data.width, 'y' : y*data.height,
           'width': data.width, 'height': data.height}
  }
  return out;
}