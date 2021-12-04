status1="";
function setup()
{
   canvas=creatCanvas(480,380);
   canvas.center();
   video=creatCapture(VIDEO);
   video.hide();
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status1=true;
}
function draw()
{
    image(video,0,0,480,380);
}