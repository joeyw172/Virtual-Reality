class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
    this.obj = document.createElement("a-entity");
  
    let dome = document.createElement("a-sphere");
    dome.setAttribute("color","#b8f1ff");
    dome.setAttribute("position","0 5.5 -2");
    dome.setAttribute("radius","2");
    dome.setAttribute("opacity",".5")
    dome.setAttribute( "segments-height", "8");
    dome.setAttribute( "theta-length", "80");
    this.obj.append( dome );

    let saucer = document.createElement("a-torus");
    saucer.setAttribute("color","#595959");
    saucer.setAttribute("position","0 5 -2");
    saucer.setAttribute("radius","2");
    saucer.setAttribute("radius-tubular", ".6");
    saucer.setAttribute("rotation","90 0 0");
    this.obj.append( saucer );

    let beam = document.createElement("a-cone");
    beam.setAttribute("radius-top","0");
    beam.setAttribute("radius-bottom","2");
    beam.setAttribute("height","10");
    beam.setAttribute("color","#26ff00");
    beam.setAttribute("rad ius-top","0");
    beam.setAttribute("position","0 2 -2");
    beam.setAttribute("opacity",".5");
    this.obj.append(beam)

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})  
  }

}