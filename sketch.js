//input
var INPUT_SIZE = 264;
var inputLayer = [];

// hidden


// output


//
function setup(){
  createCanvas(1200, 700);
  noFill();
  rect(0, 0, width - 5, height)
  fill("red");
  noStroke();
}

function draw(){
  for(var i = 0; i < INPUT_SIZE; ++i){
    let neuronSize = 20 + (INPUT_SIZE * 5);
    let yPos = (i + 1) * height / (INPUT_SIZE + 1);
    // inputLayer.push(new Neuron(width / 6, ((height - 20) / INPUT_SIZE ) * i + (200 / INPUT_SIZE / 2 + 20), "input"));
    inputLayer.push(new Neuron(width / 6, yPos, "input"));
    
  }

  inputLayer.forEach(neuron => {
    neuron.render();
  });
}