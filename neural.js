class Neuron{
    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
        this.size = 200 / INPUT_SIZE;
    }

    render(){
        // text(this.type, this.x, this.y - 10);
        ellipse(this.x, this.y, this.size);
    }
}