song="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0; 
scoreleftWrist = 0;
scorerightWrist = 0;

function preload(){
    song = loadSound("song2.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    scorerightWrist = results[0].pose.keypoints[10].score;
    scoreleftWrist = results[0].pose.keypoints[9].score;
    console.log("Score of Left Wrist = "+ scoreleftWrist);
    console.log("Score of Right Wrist = "+ scorerightWrist); 
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = "+ leftWristY);
 
    rightWristX = results[0].pose.rightWrist.x;
 rightWristY = results[0].pose.rightWrist.y;
 
 console.log("Right Wrist X = "+ rightWristX + "Right Wrist Y = "+ rightWristY);
}
}

function modelLoaded(){
    console.log(" Posenet is intialized");
}



function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");

   

    
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

    

