function _el(element) {
  return document.getElementById(element);
}

var keys = _el('All-Keys')
  bigRackTomAudio = _el('bigRackTomAudio'),
  leftTom = _el('Tom-Left-All'),  
  leftTomDrum = _el('Tom-Left-Drum'),  
  crashAudio = _el('crashAudio'),
  crash = _el('crash'),
  crashCymbol = _el('Crash-Cymbol'),
  floorTomAudio = _el('floorTomAudio'),
  floorTom = _el('Floor-Tom'),
  hiHatClosedAudio = _el('hiHatClosedAudio'),
  hiHatStandTop = _el('Hi-Hat-Stand-Top'),
  hiHat = _el('Hi-Hat'),
  hiHatBottom = _el('Hi-Hat-Bottom'),
  hiHatTop = _el('Hi-Hat-Top'),
  hiHatOpenAudio = _el('hiHatOpenAudio'),
  kickAudio = _el('kickAudio'),
  kickDrum = _el('Kick'),
  smallRackTomAudio = _el('smallRackTomAudio'),
  rightTom = _el('Tom-Right-All'),
  rightTomDrum = _el('Tom-Right-Drum'),
  snareAudio = _el('snareAudio'),
  snare = _el('Snare')
  ;

floorTom.addEventListener('click', floorTomCallback);
snare.addEventListener('click', snareDrumCallback);
hiHat.addEventListener('click', hiHatCallback);
kickDrum.addEventListener('click', kickDrumCallback);
crashCymbol.addEventListener('click', crashCymbolCallback);
rightTomDrum.addEventListener('click', rightTomDrumCallback);
leftTomDrum.addEventListener('click', leftTomDrumCallback);

// Animations

// Floor Tom
var floorTomTl = new TimelineMax({
  paused: true
});
floorTomTl
  .to(floorTom, 0.1, { scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(floorTom, 0.1, { scaleY: 0.96, transformOrigin: "50% 100%", ease: Expo.easeOut }, '0')
  .to(floorTom, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });

// Snare Drum
var snareTl = new TimelineMax({
  paused: true
});
snareTl
  .to(snare, 0.1, { scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(snare, 0.1, { scaleY: 0.96, transformOrigin: "50% 100%", ease: Expo.easeOut }, '0')
  .to(snare, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });

// Kick Drum
var kickDrumTl = new TimelineMax({ paused: true });
kickDrumTl
  .to(kickDrum, 0.1, { scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut })
  .to(kickDrum, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Expo.easeOut });

// Left Tom Drum
var leftTomTl = new TimelineMax({ paused: true });
leftTomTl
  .to(leftTomDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(leftTomDrum, 0.1, { scaleY: 0.96, transformOrigin: "50% 50%", ease: Expo.easeOut }, '0')
  .to(leftTom, 0.1, { rotation: -2.4, transformOrigin: "100% 50%", ease: Expo.easeOut }, '0')
  .to(leftTomDrum, 0.4, { scale: 1, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(leftTom, 0.6, { rotation: 0, transformOrigin: "100% 50%", ease: Expo.easeOut }, '-=0.4');

// Right Tom Drum
var rightTomTl = new TimelineMax({ paused: true });
rightTomTl
  .to(rightTomDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(rightTomDrum, 0.1, { scaleY: 0.96, transformOrigin: "50% 50%", ease: Expo.easeOut }, '0')
  .to(rightTom, 0.1, { rotation: 2.4, transformOrigin: "0% 50%", ease: Expo.easeOut }, '0')
  .to(rightTomDrum, 0.4, { scale: 1, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(rightTom, 0.6, { rotation: 0, transformOrigin: "0% 50%", ease: Expo.easeOut }, '-=0.4');

// Crash
var crashTl = new TimelineMax({ paused: true });
crashTl
  .to(crashCymbol, 0.1, { rotation: 8, transformOrigin: "50% 50%" })
  .to(crashCymbol, 1.4, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.4, 0.4) });

// Hit Hat
var hiHatUpperTl = new TimelineMax({ paused: true });
hiHatUpperTl.to(hiHatStandTop, 0.3, { y: '-5%', ease: Bounce.easeOut });

var hiHatTl = new TimelineMax({ paused: true });
hiHatTl
  .to([hiHatTop, hiHatBottom], 0.1, { rotation: -4, transformOrigin: "50% 50%" })
  .to([hiHatTop, hiHatBottom], 0.6, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.4, 0.3) })

// Callbacks
hiHatCounter = 0;
function hiHatCallback() {
  hiHatCounter++;
  hiHatTl.restart();
  hiHatTl.play();

  if (hiHatCounter < 5) {
    playHiHatClosed();
    hiHatUpperTl.reverse();
  } else {
    playHiHatOpen();
    hiHatUpperTl.play();
    hiHatCounter = 0;
  }
}

function crashCymbolCallback() {
  playCrashAudio();
  crashTl.restart();
  crashTl.play();
}
function rightTomDrumCallback() {
  playSmallRackTomAudio();
  rightTomTl.restart();
  rightTomTl.play();
}

function leftTomDrumCallback() {
  playBigRackTomAudio();
  leftTomTl.restart();
  leftTomTl.play();
}
function floorTomCallback() {
  playFloorTomAudio();
  floorTomTl.restart();
  floorTomTl.play();
}
function snareDrumCallback() {
  playSnareAudio();
  snareTl.restart();
  snareTl.play();
}
function kickDrumCallback() {
  playkickAudio();
  kickDrumTl.restart();
  kickDrumTl.play();
}

// Play sounds
function playFloorTomAudio() {
  floorTomAudio.currentTime = 0;
  floorTomAudio.play();
}

function playSnareAudio() {
  snareAudio.currentTime = 0;
  snareAudio.play();
}

function playHiHatClosed() {
  hiHatClosedAudio.currentTime = 0;
  hiHatClosedAudio.play();
}

function playHiHatOpen() {
  hiHatOpenAudio.currentTime = 0;
  hiHatOpenAudio.play();
}

function playkickAudio() {
  kickAudio.currentTime = 0;
  kickAudio.play();
}

function playCrashAudio() {
  crashAudio.currentTime = 0;
  crashAudio.play();
}

function playSmallRackTomAudio() {
  smallRackTomAudio.currentTime = 0;
  smallRackTomAudio.play();
}

function playBigRackTomAudio() {
  bigRackTomAudio.currentTime = 0;
  bigRackTomAudio.play();
}

// keys
function animateKey(key) {
  var timeline = new TimelineMax({ paused: true });
  timeline
    .to(key, 0.1, { scale: 1.05, transformOrigin: '50% 50%', ease: Expo.easeOut })
    .to(key, 0.4, { scale: 1, transformOrigin: '50% 50%', ease: Elastic.easeOut })
    .restart()
    .play();
}

document.onclick = function () {
  keys.classList.add('hidden');
}
document.onkeydown = function (e) {
  keys.classList.remove('hidden');
  var keycode = e.keyCode;
  var keyId = 'Key-' + keycode;
  var key = _el(keyId);

  if (key) {
    animateKey(key);
  }  

  switch (keycode) {
    case 32:
      kickDrumCallback();  
      break;
    case 68:
      leftTomDrumCallback();  
      break;  
    case 70:
      floorTomCallback();  
      break;  
    case 73:
      hiHatCallback();  
      break;  
    case 74:
      snareDrumCallback();  
      break;  
    case 75:
      rightTomDrumCallback();
      break;  
    case 69:
      crashCymbolCallback();  
      break;  
  }
}