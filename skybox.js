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
    }
    for ( i = 0; i < skyPoints.length; i++) {
        skyPoints[i].style.opacity = "0";
    }
    document.getElementsByClassName("front")[0].style.backgroundImage = "url('https://i.ibb.co/8b6tYf1/cubemap2.png')";
    document.getElementsByClassName("left")[0].style.backgroundImage = "url('https://i.ibb.co/SJzq3pN/cubemap1.png')";
    document.getElementsByClassName("right")[0].style.backgroundImage = "url('https://i.ibb.co/N28qy98/cubemap3.png')";
    document.getElementsByClassName("back")[0].style.backgroundImage = "url('https://i.ibb.co/gS1VGfh/cubemap0.png')";
    document.getElementsByClassName("top")[0].style.backgroundImage = "url('https://i.ibb.co/4TgVHwS/cubemap5.png')";
    document.getElementsByClassName("floor")[0].style.backgroundImage = "url('https://i.ibb.co/wygNDwZ/cubemap4.png')";
    document.getElementsByClassName("container")[0].style.perspective = "100px";
    //konamiCode = [0];
    document.querySelector('body').style.backgroundColor = "black";
}
