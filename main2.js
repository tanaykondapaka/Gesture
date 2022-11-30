window.addEventListener("load", run());
function run(){
Webcam.set(
    {
        width:450,
        height:350,
        image_format:"png",
        png_quality:90
    }
);
cam = document.getElementById("camera");
Webcam.attach('#camera');}
function cam_on(){
Webcam.snap(function(data_uri){document.getElementById('selfie').innerHTML="<img id='picture' src='"+data_uri+"'>"})
    
}
console.log('ml5 Version=', ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wq5YlLRRi/model.json", model_ready);


function model_ready(){
    console.log("model Ready!")
    
}

function check(){

    img=document.getElementById("picture");
    classifier.classify(img, gotResults)
    
    }
    
    function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        gesture=results[0].label;
     
        if(gesture=="SUPER"){
document.getElementById("pe").innerHTML="&#128076"
document.getElementById("pt").innerHTML="Super"
        }
        if(gesture=="HIFIVE"){
            document.getElementById("pe").innerHTML="&#9995"
            document.getElementById("pt").innerHTML="Hi Five"
        }
        if(gesture=="PUNCH"){
            document.getElementById("pe").innerHTML=" &#128074"
            document.getElementById("pt").innerHTML="Punch"
        }
        if(gesture=="OK"){
            document.getElementById("pe").innerHTML=" &#128077"
            document.getElementById("pt").innerHTML="Okay"
        }
    }}
