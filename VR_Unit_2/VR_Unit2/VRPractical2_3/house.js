class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let base = document.createElement("a-box");
        base.setAttribute("color", "#fff8b0");
        base.setAttribute("position", "0 .5 0")
        this.obj.append( base );

    let roof = document.createElement("a-cone");
        roof.setAttribute("color", "#f23513");
        roof.setAttribute("position", "0 1.2 0");
        roof.setAttribute("radius-bottom",".91");
        roof.setAttribute("radius-top",".1")
        roof.setAttribute("height",".8");
    this.obj.append( roof );
    
    let window1 = document.createElement("a-box");
        window1.setAttribute("color","#a2c1e0");
        window1.setAttribute("width",".4");
        window1.setAttribute("height",".4");
        window1.setAttribute("depth","1.02");
        window1.setAttribute("position","0 .55 0");
    this.obj.append( window1 );

    let window2 = document.createElement("a-box");
        window2.setAttribute("color","#a2c1e0");
        window2.setAttribute("width",".4");
        window2.setAttribute("height",".4");
        window2.setAttribute("depth","1.02");
        window2.setAttribute("position","0 .55 0");
        window2.setAttribute("rotation", "0 90 0")
    this.obj.append( window2 );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}