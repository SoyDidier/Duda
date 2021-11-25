var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i1;
var i2;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");
  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Runner-2.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 
  //crear sprite de boy (niño)
boy = createSprite(100,200,40,20);
  //crear sprite de path (camino) 
 path = createSprite(200,200,40,10);
//agregar imagen de path
 path.addImage(pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
pathImg.velocityY = -4;
path.scale=1.2;


//agregar animación para boy
boy.addAnimation(boyImg);
boy.scale=0.08;

// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,400,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
i1 = createSprite(30,400,400,10);
i1.visible = false
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
i2 = createSprite(370,400,400,10);
i2.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mauseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(i1)
  boy.collide(i2)
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
