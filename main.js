var song = "";

function preload() { 
    song = loadSound("music.mp3");
}

function setup() {
    var canvas = createCanvas(600, 500);
    canvas.center();
    var video = createCapture(VIDEO);
    video.hide();
} 

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}