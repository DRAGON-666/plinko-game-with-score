const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisionHeight=300;

var particles=[];
var division=[];
var plinko=[];


function setup(){
    var canvas = createCanvas(1000,700);

    engine = Engine.create();

    world = engine.world;

    ground = new Ground(200,700,1700,20);


    for (var d =0; d <=width; d = d+ 80){
        division.push(new Division(d , 560,10,260));
   
    }
}

function draw() {
    background("black");  

    Engine.update(engine);

    ground.display();

    
    for (var d =0; d >=700; d = d++){
    console.log("working"); 
    } display();


   

}


