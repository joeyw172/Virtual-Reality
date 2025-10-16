let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createCloud(x,10,z);
  }
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x,0,z);
  }

})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z){
    let clouds = document.createElement("a-entity");

    let cumulus1 = document.createElement("a-sphere");
    cumulus1.setAttribute("color","white");
    cumulus1.setAttribute("position", "0 10 0");
    cumulus1.setAttribute("radius", "2");
    cumulus1.setAttribute("opacity",".7");
    clouds.append(cumulus1);

    let cumulus2 = document.createElement("a-sphere");
    cumulus2.setAttribute("color","white");
    cumulus2.setAttribute("position", "-.2 10 0");
    cumulus2.setAttribute("radius", "1");
    clouds.append(cumulus2);

    let cumulus3 = document.createElement("a-sphere");
    cumulus3.setAttribute("color","white");
    cumulus3.setAttribute("position", ".2 10 0");
    cumulus3.setAttribute("radius", "1");
    clouds.append(cumulus3);
    
     clouds.setAttribute("position",{x:x, y:y, z:z});
     scene.append( clouds );
}


/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
    function createHouse(x, y, z){
        let house = document.createElement("a-entity");

        let base = document.createElement("a-box");
        base.setAttribute("color", "#fff8b0");
        base.setAttribute("position", "0 .5 0")
        house.append(base);

        let roof = document.createElement("a-cylinder");
        roof.setAttribute("color", "#ff3f21");
        roof.setAttribute("position", "0 1.5 0")

        house.append(roof);


        house.setAttribute("position", {x:x, y:y, z:z});
        scene.append(house);


    }


function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 1.5 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 .5 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree );
}