   let scene;
   let car;
   let sun;
   let pokemonball;
   let rocket;
   let dude;

   window.addEventListener("DOMContentLoaded",function() {

        scene = document.querySelector("a-scene"); //CSS Selector
        car = document.querySelector("#car");
        car.a = 0;
        car.da = .1;
        sun = document.querySelector("#sun");
        sun.a = 0;
        sun.da = 1;

        loop();
    
    })

    function loop(){
        car.a += car.da;
        car.setAttribute("position",{x:car.a, y:0, z:0});
        window.requestAnimationFrame(loop);
    }
        
    //function loop(){
       // sun.a += sun.da;
       // sun.setAttribute("opacity",{x:sun.a});
       // window.requestAnimationFrame(loop);
   // }


    let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
    
