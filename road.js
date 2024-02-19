class Road{
    constructor(x,width,LaneCount=3){
        this.x=x;
        this.width=width;
        this.LaneCount=LaneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity = 100000;
        this.top=-infinity;
        this.bottom=infinity;

        const topleft={x:this.left,y:this.top};
        const topright={x:this.right,y:this.bottom};
        const bottomleft={x:this.left,y:this.top};
        const bottomright={x:this.right,y:this.bottom};
        
        this.borders=[[topleft,bottomleft],[topright,bottomright]];

    }

    getLaneCount(){
        return this.LaneCount;
    }

    getCenter(lindex){
        const laneWidth=this.width/this.LaneCount;
        return this.left+laneWidth/2+lindex*laneWidth;
    }

    draw(context){
        context.lineWidth=5;
        context.strokeStyle="white";


        context.beginPath();
        context.moveTo(this.left,this.top);
        context.lineTo(this.left,this.bottom);
        context.stroke();

        context.beginPath();
        context.moveTo(this.right,this.top);
        context.lineTo(this.right,this.bottom);
        context.stroke();

        for(let i=1;i<=this.LaneCount-1;i++){
            const x=ler(
                this.left,
                this.right,
                i/this.LaneCount
            );

            context.setLineDash([20,20]);
            context.beginPath();
            context.moveTo(x,this.top);
            context.lineTo(x,this.bottom);
            context.stroke();
        }

        context.setLineDash([]);
        this.borders.forEach(border=>{
            context.beginPath();
            context.moveTo(border[0].x,border[0].y);
            context.lineTo(border[1].x,border[1].y);
            context.stroke();
        });
    }
}

