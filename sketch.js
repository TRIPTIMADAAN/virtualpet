
var dog,happyDog,database,foodS,foodStoke,dog1
function preload()
{
  
  dog=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	var canvas=createCanvas(500,500);
  dog1=createSprite(250,300,20,20)
  dog1.addImage(dog)
  dog1.scale=0.2
  database = firebase.database();
  foodStoke=database.ref("food")
  foodStoke.on("value",readStock)
}


function draw() {  
  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStoke(foodS)
    dog1.addImage(dogHappy)
  }
  textSize(15)
  stroke(2)
  fill("yellow")
  text("PRESS UP_ARROW KEY TO FEED THE HUNGRY DOG",30,100)
  textSize(28)
  stroke(4)
  fill("black")
  text("FoodRemaining"+foodS,80,150)
 

drawSprites();
}
function readStock(data){
  foodS=data.val();

  }

  function writeStoke(x){
    if(x<=0){
      x=0

    }
    else{
      x=x-1
    }
    database.ref('/').update({
      food:x
    })
  }



