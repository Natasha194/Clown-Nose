var noseX = 0;
var noseY = 0;


function preload() {
    clownNose = loadImage('https://i.postimg.cc/3RCLXhmX/4ab14dd9eb4540bc72902b65547ff699-removebg-preview.png');
}

function setup () {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownNose ,noseX, noseY, 40, 40);
} 

function modelLoaded() {
    console.log('poseNet is initialized');
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY =  results[0].pose.nose.y-15;
    }
    
}

function snap() {
    save('sillyClownNose.jpg');
}