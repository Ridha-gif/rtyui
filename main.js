leftwristX=0;
rightwristX=0;
difference=0
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(800,600);
canvas.position(640,250);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes)
}
function draw(){
document.getElementById("asx").innerHTML=difference
 
background("white")
    text("Ridhaan",10,300);
    textSize(difference)

}
function modelloaded(){
    console.log("modelLoaded!!")
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    }
}