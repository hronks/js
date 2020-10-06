
window.onload = function () {
  var input_type = document.getElementById("input_type");
  var inputs = document.getElementById("inputs");
  var output_type = document.getElementById("output_type");
  var outputs = document.getElementById("outputs");
  var cost_function = document.getElementById("cost_function");
  var layers = document.getElementById("layers");

  var layer_type = document.getElementById("layer_type");
  var layer_outputs = document.getElementById("layer_outputs");
  var layer_activation_function = document.getElementById("layer_activation_function");

  var input_data = document.getElementById("input_data");

  var training_proportion = document.getElementById("training_proportion");
  var epochs = document.getElementById("epochs");
  var learning_rate = document.getElementById("learning_rate");

  input_type.options[input_type.options.length] = new Option('Standard', 'Value1');
  inputs.value = 10;
  output_type.options[output_type.options.length] = new Option('Standard', 'Value1');
  outputs.value = 1;
  cost_function.options[cost_function.options.length] = new Option('BinXEnt', 'Value1');
  layers.value = 3;

  layer_type.options[layer_type.options.length] = new Option('Dense', 'Value1');
  layer_outputs.value = 32;
  layer_activation_function.options[layer_activation_function.options.length] =
    new Option('ReLU', 'Value1');
  layer_activation_function.options[layer_activation_function.options.length] =
    new Option('Sigmoid', 'Value1');

    var client = new XMLHttpRequest();
    client.open('GET', './resources/data/housepricedata.csv');
    client.onreadystatechange = function() {
      alert(client.responseText);
    }
    client.send();

//  get_start_data.send();

//  .open("./resources/data/housepricedata.csv", file, false);

}


class Network {

  constructor() {

    this.input_type = "";

    this.layers = 0;
    this.layer_type = [];
    this.layer_outputs = [];
    this.layer_activation_function = [];

    this.output_string ="";
  }

}
