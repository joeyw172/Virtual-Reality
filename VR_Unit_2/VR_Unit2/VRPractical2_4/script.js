let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets, flyingsaucer;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let i = 0; i < 20; i++){
    let rocket = new Rocket(rnd(-20,20),rnd(-20,20));
    //rockets.push(rocket);
  }
  for(let i = 0; i < 20; i++){
    let ufo = new UFO(rnd(-20,20),rnd(-20,20));
    //rockets.push(rocket);
  }
  loop();
})

function loop(){
  //for(let rocket of rockets){
    rocket.fly();
    ufo.fall();
 // }
  window.requestAnimationFrame( loop );
}
