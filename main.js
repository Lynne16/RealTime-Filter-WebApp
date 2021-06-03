function preload(){
    clown_nose=loadImage('https://i.postimg.cc/mgtMnmWc/clown-nose-removebg-preview.png');
    clown_face=loadImage('https://i.postimg.cc/nhj2mFzw/clown-face-removebg-preview.png');
    mask=loadImage('https://i.postimg.cc/4yHMxzrB/mask-strapless-removebg-preview.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', getPoses);
}

Nose_X=0;
Nose_Y=0;
LeftEar_X=0;
LeftEar_Y=0;
RightEar_X=0;

function getPoses(results)
{
    if(results.length > 0){
        console.log(results);
        Nose_X=results[0].pose.nose.x;
        Nose_Y=results[0].pose.nose.y;
        LeftEar_X=results[0].pose.leftEar.x;
        LeftEar_Y=results[0].pose.leftEar.y;
        RightEar_X=results[0].pose.rightEar.x;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
        console.log("Left Ear X = " + results[0].pose.leftEar.x);
        console.log("Left Ear Y = " + results[0].pose.leftEar.y);
        console.log("Right Ear X = " + results[0].pose.rightEar.x);
    }
}

function modelLoaded(){
    console.log('PoseNet Loaded');
}

function draw(){
    image(video, 0,0,300,300);
    image(mask,LeftEar_X,LeftEar_Y,RightEar_X-LeftEar_X,LeftEar_Y-5);
    //fill(255,0,0)
    //circle(Nose_X,Nose_Y,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}
