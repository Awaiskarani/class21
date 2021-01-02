function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400,200,20,120)
  movingrect.shapeColor="blue"
  movingrect.debug=true

  fixrect=createSprite(400,300,20,120)
 fixrect.shapeColor="blue"
  fixrect.debug=true
}

function draw() {
  background(255,255,0);
  movingrect.x=mouseX;
  movingrect.y=mouseY; 
  
 

//istouching(movingrect,fixrect); 
if(istouching(movingrect,fixrect)){
 // movingrect.shapeColor="green"
 // fixrect.shapeColor="green"
 movingrect.scale=1.5;
 fixrect.scale=1.5;
}else{
  //movingrect.shapeColor="blue"
  //fixrect.shapeColor="blue"
  movingrect.scale=1;
  fixrect.scale=1;
}
drawSprites();
}





