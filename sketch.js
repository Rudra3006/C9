var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(100,100,30,30)
}

function draw() 
{
  background(30);
  if (keyDown(UP_ARROW)){
    box.y -= 2;
  }
  if (keyDown(LEFT_ARROW)){
    box.x -= 2;
  }
  if (keyDown(RIGHT_ARROW)){
    box.x += 2;
  }
  if (keyDown(DOWN_ARROW)){
    box.y += 2;
  }
drawSprites();
}




