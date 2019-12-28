
// music
  var analyzer;

   analyzer = new p5.Amplitude();
   analyzer.setInput(mySong);

var mySong;
var myImage;
var space;
function preload() {
  mySong = loadSound('./assets/cold.mp3');
  myImage = loadImage('./assets/ufo.png');
  space = loadImage('./assets/bbb.png');
  // myImage2 = loadImage('./Earth.jpg');
}
// let bg;
let y = 0;
function setup() {
  // bg = loadImage('./assets/bbb.png');
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  imageMode(CENTER);
  // image(space,200,200,150,150);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(bg);
  var imgRatio = 8888/5000;
  if (width/height > imgRatio){

image(space, width/2, height/2, width, width/imgRatio);
}
else{
  image(space, width/2, height/2, height*imgRatio, height);

  }
  
  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
let rms = analyzer.getLevel();
  var distx=abs(mouseX-width/2);
  var disty=abs(mouseY-height/2);
  if (distx<90 &&disty<67.5) {
    noStroke();
    for (i=0;i<height;i++){
    fill(lerpColor(color(43,102,177,200),color(185,45,39,200),i/height));
    rect(0,i,width,1);
    }


    image(myImage,width/2, height/2, 200*(rms+1), 150*(rms+1));

    if (mySong.isPlaying() == false) {
      mySong.play();
    }

   if (mySong.isPlaying() == false){ mySong.play();}

  } else {
    noStroke();
    for (i=0;i<height;i++){
    fill(lerpColor(color(112,225,245,200),color(255,209,148,200),i/height));
    rect(0,i,width,1);
    }

    // imageMode(CENTER);
    image(myImage,width/2, height/2, 180, 135);
    mySong.stop();
  }
}
