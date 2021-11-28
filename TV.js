img = "";
status = "";
function setup()
{
    canvas = createCanvas(640,300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status:detecting objects";
}
function modelLoaded()
{
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
   if(error)
   {
     console.log(error);
   }
   console.log(results);
}
function preload()
{
    img = loadImage('tv.jpg');
}
function logout()
{
    window.location="index.html";
}
function draw()
{
    image(img,0,0,640,420);
}