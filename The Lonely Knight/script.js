//Stat variables
let health;
let stamina=100;
let goback11;
let goback;
let right;
let left;
let up;
let down;
let moveup;
let movedown;
let moveleft;
let moveright;
///Enemy Variables
let mushroom;
let goblin;
let skeleton;
let mushroomi;
let goblini;
let skeletoni;
let enemyhealth;
let enemyattack;
//tele
let place;
let telebat;
function ranattack(){
    sessionStorage.setItem("health",health)
    window.location.href = "ranenemy.html"
    
}
