
// music
  var analyzer;

   analyzer = new p5.Amplitude();
   analyzer.setInput(mySong);

var mySong;
var myImage;

function preload() {
  mySong = loadSound('/assets/cold.mp3');
  myImage = loadImage('/assets/ufo.png');
  // myImage2 = loadImage('./Earth.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
let rms = analyzer.getLevel();
  var distx=abs(mouseX-width/2);
  var disty=abs(mouseY-height/2);
  if (distx<90 &&disty<67.5) {
    noStroke();
    for (i=0;i<height;i++){
    fill(lerpColor(color('#b92b27'),color('#1565C0'),i/height));
    rect(0,i,width,1);
    }

    imageMode(CENTER);
    image(myImage,width/2, height/2, 200*(rms+1), 150*(rms+1));

    if (mySong.isPlaying() == false) {
      mySong.play();
    }

   if (mySong.isPlaying() == false){ mySong.play();}

  } else {
    noStroke();
    for (i=0;i<height;i++){
    fill(lerpColor(color('#70e1f5'),color('#ffd194'),i/height));
    rect(0,i,width,1);
    }

    imageMode(CENTER);
    image(myImage,width/2, height/2, 180, 135);
    mySong.stop();
  }
}
