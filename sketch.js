const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    getBackgroundImg(0);
    loadImaga="polygon.png"}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,400,60,20);
    platform = new Ground(800, 380, 800, 20);
}