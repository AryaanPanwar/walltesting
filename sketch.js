var wall;
var bullet,speed,weight;



function setup() {
   var canvas = createCanvas(1600,400);

   speed=random(30,52);
   weight=random(233,321);
   thickness=random(22,83);
 
   wall = createSprite(1200, 200, thickness, height/2);
   wall.shapeColor=color(80,80,80)

   bullet = createSprite(50,200,50,5);
   bullet.velocityX = speed;
   bullet.shapeColor = ("white");
}
    var thickness;

  function draw() {
   background(0);  
   if(wall.x-bullet.x < (bullet.width+wall.width)/2)
    {
      bullet.velocityX = 0;
      var deformation = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
      if(deformation>10)
       {
         wall.shapeColor=color(255,0,0);  
       
         
       }    

        if(deformation<10)
        {
         wall.shapeColor=color(0,255,0)
        }
       
        
   }


 

   drawSprites();
}