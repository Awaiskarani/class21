var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400,200,20,120)
  movingrect.shapeColor="blue"
  movingrect.debug=true

  fixrect=createSprite(400,300,20,120)
 fixrect.shapeColor="blue"
  fixrect.debug=true

  gameObject1 = createSprite(500, 100,80,30);
  gameObject2 = createSprite(500, 700,80,30);

 
  gameObject1.velocityY= 5;
  gameObject2.velocityY= -5;
}

function draw() {
  background(0,0,0);  

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


 
  bounceoff(gameObject1,gameObject2);
  drawSprites();
}





