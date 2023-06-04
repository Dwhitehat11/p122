Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90 
});

camera = document.getElementById("camera");

webcam.attach( '#camera' )

function take_snapshot()
{
  webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  })
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tAPJPzgLI/')

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechsynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "Amd the second predection is " + predction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
 if (error) {
  console.error(error);
 } else {
  console.log(results);
  
  document.getElementById("result_object_name").innerHTML = results[0].label;

  gesture = results[0].label;

  toSpeak = "";

  if(gesture == "amazing")
  {
    toSpeak = "This is looking amazing";
    document.getElementById("result_object_gesture_icon").innerHTML = "&3128076;";
  }
  else if(gesture == "best")
  {
    toSpeak = "All the best";
    document.getElementById(result_object_gesture_icon).innerHTMl = "&#9996;";
  }

  speak();
}
}
