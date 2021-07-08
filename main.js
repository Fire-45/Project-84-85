canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120; // These are for car 1
car1_height = 70;
car1_img = "https://postimg.cc/9rqYz9HM";
car1_x = 10;
car1_y = 10;

car2_width = 120; // These are for car 2
car2_height = 70;
car2_img = "https://postimg.cc/9rqYz9HM";
car2_x = 10;
car2_y = 100;

background_image = "https://postimg.cc/p9D2dqqZ" // This is for the background of Cavas

function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

car1_imgTag = new Image();
car1_imgTag.onload = uploadCar1;
car1_imgTag.src = car1_img;

car2_imgTag = new Image();
car2_imgTag.onload = uploadCar2;
car2_imgTag.src = car2_img;
}

function uploadBackground(){
     ctx.drawImage(background_imgTag,0,0,cavas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2(){
     ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){

     keyPressed = e.keyCode;
     console.log(keyPressed);

     if(keyPressed == '37'){
          car1Left();
          console.log("car1 left arrow key");
     }
     
     if(keyPressed == '38'){
          car1UP();
          console.log("car1 up arrow key");
     }

     if(keyPressed == '39'){
          car1Right();
          console.log("car1 right arrow key");
     }

     if(keyPressed == '40'){
          car1Down();
          console.log("car1 down arrow key");
     }
     // Car 1 commands end beginning Car 2 commands WASD

     if(keyPressed == '87'){
          car2UP();
          console.log("car2 up command W");
     }

     if(keyPressed == '65'){
          car2Left();
          console.log("car2 left command A");
     }

     if(keyPressed == '83'){
          car2Down();
          console.log("car2 down command S");
     }

     if(keyPressed == '68'){
          car2Right();
          console.log("car2 right command D");
     }


}