// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var world, engine;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
createCanvas(800,500);
engine=Engine.create();
world=engine.world
Ground=new Ground(400,480,800,20);
Tanker = new Tanker(50,460,100,10);
Ball1 = new Ball();
Ball2 = new Ball();
Ball3 = new Ball();
Ball4 = new Ball();

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Ground.display();
Tanker.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}