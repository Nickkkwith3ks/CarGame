class CarOBJ
{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width;
        this.height=height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=2;
        this.friection=0.05;
        this.angle=0;

       
        this.CarControls = new controls();
    }

    UpdateMethod(roadBorders){
        this.#moving();
    }

    draw(context){
        context.save();
        context.translate(this.x,this.y);
        context.rotate(-this.angle);

        context.beginPath();
        context.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
            );
        
        
        context.fill();
        context.restore();
            
        
    }

    #moving(){
        if(this.CarControls.f){
            this.speed+=this.acceleration;
        }
        if(this.CarControls.b){
            this.speed-=this.acceleration;
        }
        
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed=-this.maxSpeed/2;
        }
 
        if(this.speed>0){
            this.speed-=this.friection;
        }
        if(this.speed<0){
            this.speed+=this.friection;
        }
        if(this.speed<this.friection && this.speed>-this.friection){
            this.speed=0;
        }

        if(this.speed!=0){
            const flip=this.speed>0?1:-1;
            if(this.CarControls.l){
                this.angle+=(1/50)*flip;
            }
            if(this.CarControls.r){
                this.angle-=(1/50)*flip;
            }
        }
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    }

}
