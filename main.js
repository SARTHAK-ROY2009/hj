rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('poseNet is initialised');
}
function gotPoses(results) {
  if(results.length > 0) {
      console.log(results);
       rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightwristx = " + rightWristX + " leftwristx = " + leftWristX+" difference = "+difference);
  } else {
      console.error("nobody in front of camera");
    }
}
function draw() {
    background('blue');
    textSize(difference);
    fill("pink");
    text("sarthak", 200, 275);
    document.getElementById("fs").innerHTML = "font size is " + difference;
}