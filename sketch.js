var r=255
var g= 0
var b=0
var myColor;
var song;
var canzone=false;
var songs;


function preload(){
  songs = [
       {song: loadSound("assets/1.mp3"),},
       {song: loadSound("assets/2.mp3"), },
       {song: loadSound("assets/3.mp3"),},
           ];
 angleMode(DEGREES);
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  myColor = color(r,g,b)
  background(myColor)

   amp = new p5.Amplitude();

    numSong = 0;
   songs[numSong].song.play();
}

function draw() {


    var vol = amp.getLevel();

  myColor = color(r,g,b)
  background(myColor)
  if (r >5){
    r-=5
  }
  if (g >5){
    g-=5
  }

  fill('white');
  textSize(30);
  textStyle('bold')
  textFont('gotham')
  text("SHAKE TO CHANGE SONG", width/2, height/2);

}

function deviceTurned(){

  if (turnAxis === 'X'){

    r = 255
  } else if (turnAxis === 'Z'){
    g = 255
  }
}


function deviceShaken(){
    songs[numSong].song.stop();
    numSong = numSong + 1;

if (numSong >= songs.length) {
            numSong = 0;
        }
    songs[numSong].song.play();
}
