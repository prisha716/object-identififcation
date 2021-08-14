img="";
status="";
object=[];

function preload() 
{
    img=loadImage("dog_cat.jpg");
}

function setup()
 {
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded")
    status=true;
    objectDetector.detect(video,gotResult);

}
function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}
function draw() 
{

image(video,0,0,380,380);
if(status != "") {
    objectDetector.detect(video,gotResult);
    r=random(225);
    g-random(225);
    b=random(225);
    for(i=0; i<objects.length; i++) {
        document.getElementById("status").innerHTML="Status : Object Detected";
        document.getElementById("numberofobjects").innerHTML="Number of objects detected are :"+object.length;
        fill("rgb");
        percent=floor(objects[i].confidence*100 );
        text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill() ;
        stroke("rgb");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
fill("#000000");
text("Dog",45,75);
noFill();
stroke("#000000");
rect(30,60,450,350);

fill("#eb4034");
text("Cat",320,120);
noFill();
stroke("#eb4034");
rect(300,90,270,320);
}
