var nbEssais;
var nombreAleatoire;
var animation;
var Cheats = false;

var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
    
    if (key == requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    var faces = document.querySelectorAll('.face');
    var points = document.querySelectorAll('.face>div');
    for (var i = 0; i < faces.length; i++) {
        faces[i].style.backgroundColor = "red";
        faces[i].style.border = "7px solid white";
        faces[i].style.opacity = "0.5";
    }
    for ( i = 0; i < points.length; i++) {
        points[i].style.backgroundColor = "white";
    }
    document.getElementsByClassName("container")[0].style.perspective = "1000px";
    document.querySelector('body').style.backgroundColor = "black";
    Cheats = true;
}


function init() {
    nbEssais = 1;
    nombreAleatoire = Math.floor(Math.random() * 6 + 1);
    animation = "loop 7s linear infinite";
}

function proposition() {
    var detection = document.getElementById("numberDice").value;
    var displayHTML = document.getElementById("result");
        
    if (detection != nombreAleatoire) {
        if (!Cheats){
            document.getElementById("backtoback").id = "animateTool";
            document.getElementById("numberDice").style.opacity = "0";
            document.getElementById("bouton").style.display = "none"; 
            setTimeout(function(){
                document.getElementById("animateTool").id = "backtoback";
                document.getElementById("numberDice").style.opacity = "1";
                document.getElementById("bouton").style.display = "initial";
            }, 1000);
        }
      
        nbEssais++;
        
        if (isNaN(detection)) {
            displayHTML.innerHTML = "Veuillez mettre un Chiffre... Bordel!";
        }
        
        else if (detection < 1) {
            displayHTML.innerHTML = "Alerte au gogol!";
        }
        
        else if (detection > 6) {
            displayHTML.innerHTML = "Les jeux de rôles vous montent trop à la tête, c'est un dé de 6!";
        }
        
        else if (detection < nombreAleatoire) {
            displayHTML.innerHTML = "Trop petit";
        }
        
        else {
            displayHTML.innerHTML = "Trop grand";
        }
    }
    
    else {
        displayHTML.innerHTML = "Gagné vous avez gagné en " + nbEssais + " fois";
        if (!Cheats){
            document.getElementById("backtoback").id = "animateTool2";
            setTimeout(function(){
                document.getElementById("animateTool2").id = "backtoback";
            }, 1000);
        }
        setTimeout(function(){
            displayHTML.innerHTML = "";
        }, 4000);
        
        if (nombreAleatoire == 1){
            animation = "loop 7s linear 0s 1 normal forwards";
        }
        else if (nombreAleatoire == 2){
            animation = "loop2 7s linear 0s 1 normal forwards";
        }
        else if (nombreAleatoire == 3){
            animation = "loop3 7s linear 0s 1 normal forwards";
        }
        else if (nombreAleatoire == 4){
            animation = "loop4 7s linear 0s 1 normal forwards";
        }
        else if (nombreAleatoire == 5){
            animation = "loop5 7s linear 0s 1 normal forwards";
        }
        else {
            animation = "loop6 7s linear 0s 1 normal forwards";
        }
        setTimeout(function(){
            init();
            document.getElementById("dice").style.animation = "loop 7s linear infinite";
        }, 14000);
        document.getElementById("numberDice").value = "";
    }
}
document.getElementById("dice").addEventListener("animationiteration", function() {
    document.getElementById("dice").style.animation = animation;
});
init();
