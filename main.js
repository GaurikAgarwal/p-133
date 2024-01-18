img="";
function preload() {
    img= loadImage('ALT_01_Bedroom_Cam02.webp');
}
function setup() {
    canvas= createCanvas(640,420);
    canvas.center();
}
function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
    text("T.V",190,100);
    noFill();
    stroke("FF0000");
    rect(190,90,250,200);
    fill("FF0000");
    text("Flower Pot", 500,150);
}
