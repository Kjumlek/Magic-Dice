var atomAllowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

var atomCode = ['up', 'right', 'down', 'left'];
var atomCodePosition = 0;
var ii = 7;

document.addEventListener('keydown', function(e) {
    var atomKey = atomAllowedKeys[e.keyCode];
    var atomRequiredKey = atomCode[atomCodePosition];
    
    if (atomKey == atomRequiredKey) {
        atomCodePosition++;
        if (atomCodePosition == atomCode.length) {
            activateAtom();
            atomCodePosition = 0;
        }
    } else {
        atomCodePosition = 0;
    }
});

var faceRotations = [
  "rotateY(0deg)",
  "rotateY(270deg)",
  "rotateY(-270deg)",
  "rotateY(180deg)",
  "rotateX(90deg)",
  "rotateX(-90deg)",
]

function activateAtom() {
    var atomFaces = document.querySelectorAll('.face');
    var atomPoints = document.querySelectorAll('.face>div');
    for (var i = 0; i < atomFaces.length; i++) {
        atomFaces[i].style.border = "7px solid white";
        atomFaces[i].style.opacity = "0.5";
        atomFaces[i].style.backgroundColor = "transparent";
        atomFaces[i].style.borderRadius = "125px";
        atomFaces[i].style.transform = "translateX(0px) " + faceRotations[i];
    }
    for ( i = 0; i < atomPoints.length; i++) {
        atomPoints[i].style.opacity = "1";
        atomPoints[i].style.left = "97.5px";
        atomPoints[i].style.top = "97.5px";
        atomPoints[i].style.right = "97.5px";
        atomPoints[i].style.bottom = "97.5px";
        atomPoints[i].style.backgroundColor = "white";
    }
    
    document.addEventListener('keydown', function(f) {
      if (40 == f.keyCode) {
        
        ii--;
        animation = "loop " + ii + "s linear infinite";
      }
      console.log(f.keyCode);
    });
    
    konamiCode = [0];
    skyCode = [0];
    document.querySelector('body').style.backgroundColor = "black";
}