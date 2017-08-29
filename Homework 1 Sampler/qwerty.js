console.log("Hello");
var mySound, mySound2, mySound3;
var actualSound;
var octave=60;
var chooseSample;

function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('pianoSampling/60.mp3');
    mySound2 = loadSound('pianoSampling/bell.wav');
    mySound3 = loadSound('pianoSampling/guitar.wav');
  }

function setup(){
    console.log("This is setup");
    
    mySound.setVolume(1);

    chooseSample = createSelect();
    chooseSample.position(650, 400);
    chooseSample.option('piano');
    chooseSample.option('bell');
    chooseSample.option('guitar');
    chooseSample.changed(sampleChange);
    actualSound = mySound;
}

function draw(){

}

function keyPressed(){
    //console.log("You pressed the " + key + " key.");

    switch(key){
        case 'Q':
        octave=60;
        break;
        case '2':
        octave = 65;
        break;
        case 'W':
        octave = 70;
        break;
        case '3':
        octave = 75;
        break;
        case 'E':
        octave = 80;
        break;
        case 'R':
        octave = 85;
        break;
        case '5':
        octave = 90;
        break;
        case 'T':
        octave = 95;
        break;
        case '6':
        octave = 100;
        break;
        case 'Y':
        octave = 105;
        break;
        case '7':
        octave = 110;
        break;
        case 'U':
        octave = 115;
        break;
    }
    actualSound.rate(octave/60);
    actualSound.play();
}

function keyReleased(){
    //console.log("You released the " + key + " key.");
}

function sampleChange() {
    var item = chooseSample.value();
    switch(item){
        case 'piano':
            actualSound = mySound;
        break;
        case 'bell':
            actualSound = mySound2;
        break;
        case 'guitar':
            actualSound = mySound3;
        break;
    }
  }