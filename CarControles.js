class controls{
    constructor(){
        this.f = false;
        this.b = false;
        this.r = false;
        this.l = false;

        this.#Input();
    }

    #Input(){
        document.onkeydown=(event)=>{
            switch(event.key){

                case "ArrowUp":
                    this.f = true;
                    break;

                case "ArrowDown":
                    this.b = true;
                    break;

                case "ArrowRight":
                    this.r = true;
                    break;

                case "ArrowLeft":
                    this.l = true;
                    break;       
            }
            console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key){

                case "ArrowUp":
                    this.f = false;
                    break;

                case "ArrowDown":
                    this.b = false;
                    break;

                case "ArrowRight":
                    this.r = false;
                    break;

                case "ArrowLeft":
                    this.l = false;
                    break;
            }
            console.table(this);
        }
    }
}