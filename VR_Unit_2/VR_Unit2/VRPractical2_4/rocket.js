class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = .5;
    this.obj = document.createElement("a-entity");
  
    let nose = document.createElement("a-cone");
    nose.setAttribute("color","red");
    nose.setAttribute("position","0 5 -2");
    nose.setAttribute("height","2");
    nose.setAttribute("bottom-radius",".7")
    this.obj.append( nose );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 2.5 -2");
    body.setAttribute("color","gray");
    body.setAttribute("radius",".7");
    body.setAttribute("height","4");
    this.obj.append( body );

    let orgfire = document.createElement("a-cone");
    orgfire.setAttribute("radius-top","0");
    orgfire.setAttribute("radius-bottom","1");
    orgfire.setAttribute("height","3");
    orgfire.setAttribute("color","orange");
    orgfire.setAttribute("radius-top","0");
    orgfire.setAttribute("position","0 0 -2");
    orgfire.setAttribute("opacity",".5");
    this.obj.append(orgfire)
  
    let rfire = document.createElement("a-cone");
    rfire.setAttribute("radius-top","0");
    rfire.setAttribute("radius-bottom",".5");
    rfire.setAttribute("height","2.5");
    rfire.setAttribute("color","red");
    rfire.setAttribute("radius-top","0");
    rfire.setAttribute("position","0 0 -2");
    rfire.setAttribute("opacity","1");
    this.obj.append(rfire)


    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  fly(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})    
  }

}