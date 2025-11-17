/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", /*1*/
  "h--------------------------h----------h---------------h", /*2*/
  "h-hhhhhhhhhhhhh-hhhhhhhhhh-h-hhhhhhhhhh-hhhhhhhhhhhhh-h", /*3*/
  "h-h------------------------h------------------------h-h", /*4*/
  "h-h-hhhhhhhhhhh-h-hhhhhhh-hhhhhhhhhhhhhhhhhhhhhhhhh-h-h", /*5*/
  "h-h-h-----------h----------h----------------------h-h-h", /*6*/  
  "h-h-h-hhhhhhhhhhhhhhhhhhhh-h-hhhhhhhhhhhhhhhhhhhh-h-h-h", /*7*/
  "h-h-h-h---------h--------h-h-h--------h-----------h-h-h", /*8*/ 
  "h-h-h-h-hhhhhhh-h-hhhhhh-h-h-h-hhhhhh-h-hhhhhhhhh-h-h-h", /*9*/
  "h-h-h-h-h-----h-h-h----h-h-h-h------h-h-h-------h-h-h-h", /*10*/
  "h-h-h-h-h-hhh-h-h-h-hh-h-h-h-hhhhhh-h-h-h-hhhhh-h-h-h-h", /*11*/
  "h-h-h-h-h-h---h-h-h----h-h-h------h-h-h-h-----h-h-h-h-h", /*12*/
  "h-h-h-h-hhh-hhh-h-h-hhhh-h-hhhhhh-h-h-h-hhhhh-h-h-h-h-h", /*13*/
  "h-h-h-h---h-h---h--------h--------h---h-----h-h-h-h-h-h", /*14*/
  "h-h-h-hhhhh-h-h-h-hhhh-hhhhhhhhhhhhhh-hhhhh-h-h-h-h-h-h", /*15*/
  "h---h-------h-h---------------------------h---h-h-h---h", /*16*/
  "h-hhhhhhhhhhh-h-hhhhh-hhh-hhh-hhh-hhhhh-h-hhhhh-h-hhh-h", /*17*/
  "h---h-------h-h-h---------------------h-h-------h-----h", /*18*/
  "----hhhhhhh-h-h-h---------------------h-h-hhhhhhhhhhhhh", /*19*/
  "h---h-------h-h-------------------------h---------h---h", /*20*/
  "h-hhh-h-hhhhh-h-h---------------------h-h-hhhhhhh-h-h-h", /*21*/ 
  "h---h-h-h---h-h-h---------------------h-h-h-------h-h-h", /*22*/
  "h-h-h-h-h-h-h-h-hhhhh-hhh-hhh-hhh-hhhhh-h-h-hhhhh-h-h-h", /*23*/
  "h-h-h-h-h-h-h-h-------------------------h-h-h---h-h-h-h", /*24*/
  "h-h-h-h-h-h-h-h-hhhhhhhhh-hhhhh-hhhhhhh-h-h-h-h-h-h-h-h", /*25*/
  "h-h-h-h-h-h-h-----------------------------h-h-h-h-h-h-h", /*26*/
  "h-h-h-h-h-h-hhh-h-hhh-hhhhhhh-hhh-hhhhh-hhh-h-h-h-h-h-h", /*27*/  
  "h-h-h-h-h-h---h-h-h-----h---h-----h---h-----h-h-h-h-h-h", /*28*/
  "h-h-h-h-h-hhh-h-h-h-hhh-h-h-hhhhhhh-h-hhhhhhh-h-h-h-h-h", /*29*/
  "h-h-h-h-h---h-h-h-h---h-h-h---------h---------h-h-h-h-h", /*30*/
  "h-h-h-h-hhh-h-h-h-hhh-h-h-hhhhhhhhhhhhhhhhhhhhh-h-h-h-h", /*31*/
  "h-h-h-h-----h-h-h-----h-h-h---------------------h-h-h-h", /*32*/
  "h-h-h-hhhhhhh-h-hhhhhhh-h-h-hhhhhhhhh-hhhhhhhhhhh-h-h-h", /*33*/
  "h-h-h---------h---------h-h-h-------h-h-----------h-h-h", /*34*/
  "h-h-hhhhhhhhh-hhhhhhhhhhh-h-h-hhhhhhh-h-hhhhhhhhhhh-h-h", /*35*/
  "h-h---------------------h-h-h---------h-------------h-h", /*36*/
  "h-hhhhhhhhhhh-hhhhhhhhh-h-h-hhhhhhhhh-hhhhhhhhhhhhhhh-h", /*37*/
  "h-------------------------h---------------------------h", /*38*/
  "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" /*39*/
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "h"){
        new Wall(c,1,r)
      }

  }

}});