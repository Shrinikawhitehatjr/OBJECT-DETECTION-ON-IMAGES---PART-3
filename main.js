img = "";
status = "";
objects = [];

function preload(){
    img = preload('princess_decoration for room');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetect = p5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function draw(){
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
        document.getElementById("status").innerHTML = "Status : Detecting objects";
        fill('#FF0000');
        percent = floor(objects[1].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15 );
        noFill();
        stroke('#FF0000');
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    text("Dog", 45, 75);
    rect(30, 60, 450, 350 );

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}
function modelLoaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){

        if(error){
            console.log(error);
            {
            console.log(results); 
            }
        }
    }