class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("width",1);
    this.obj.setAttribute("height",8);
    this.obj.setAttribute("depth",1);
    this.obj.setAttribute("src","#wall");
    this.obj.setAttribute("repeat", "1 10");
    this.obj.setAttribute("color", "#8b8cb4ff");
    scene.append(this.obj);

  }
}