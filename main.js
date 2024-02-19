const canvas=document.getElementById("Canv");
canvas.width=300;

const context = canvas.getContext("2d");
const road = new Road(canvas.width/2,canvas.width*0.9);
const car = new CarOBJ(road.getCenter(road.getLaneCount()-1),100,30,50);



animate();


function animate(){
    car.UpdateMethod();


    
    canvas.height=window.innerHeight;

    context.save();
    context.translate(0,-car.y+canvas.height/1.4);


    road.draw(context);
    car.draw(context);

    context.restore();
    requestAnimationFrame(animate);
}
