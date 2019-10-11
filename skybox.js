var skyAllowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

var skyCode = ['up', 'down', 'left', 'right'];
var skyCodePosition = 0;

document.addEventListener('keydown', function(e) {
    var skyKey = skyAllowedKeys[e.keyCode];
    var skyRequiredKey = skyCode[skyCodePosition];
    
    if (skyKey == skyRequiredKey) {
        skyCodePosition++;
        if (skyCodePosition == skyCode.length) {
            activateSky();
            skyCodePosition = 0;
        }
    } else {
        skyCodePosition = 0;
    }
});

function activateSky() {
    var skyFaces = document.querySelectorAll('.face');
    var skyPoints = document.querySelectorAll('.face>div');
    for (var i = 0; i < skyFaces.length; i++) {
        skyFaces[i].style.border = "none";
        skyFaces[i].style.opacity = "1";
        skyFaces[i].style.border = "7px solid white";
        skyFaces[i].style.opacity = "0.5";
        skyFaces[i].style.backgroundColor = "transparent";
        skyFaces[i].style.borderRadius = "0px";
        skyFaces[i].style.transform = "translateX(0px) " + faceRotations[i];
    }
    for ( i = 0; i < skyPoints.length; i++) {
        skyPoints[i].style.opacity = "0";
    }
    //konamiCode = [0];
    document.querySelector('body').style.backgroundColor = "black";
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
