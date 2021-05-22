function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(200, 200, 100, 150);
  fixed_rect.shapeColor = "red"
  moving_rect = createSprite(300, 100, 150, 100)
  moving_rect.shapeColor = "blue"

  rect1 = createSprite(450,70,10,50);
  rect1.shapeColor="pink";
  rect1.velocityX= -1;

  rect2 = createSprite(250, 70, 10, 50);
  rect2.shapeColor = "yellow"
  rect2.velocityX = 1;
}


function draw() {
  background("black");  
  moving_rect.x = mouseX
  moving_rect.y = mouseY
  bounceOff(rect1,rect2);
  if(isTouching(fixed_rect,moving_rect))  
  {
    fixed_rect.shapeColor = "green";
    moving_rect.shapeColor = "green";
  }
 else
 {
  fixed_rect.shapeColor = "red";
  moving_rect.shapeColor = "blue";
 }

  
 
  drawSprites();
}

