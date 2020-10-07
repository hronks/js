class Network {

  constructor() {

    this.input_type = "Network_input";
    this.inputs = 10;
    this.output_type = "Network_output";
    this.outputs = 1;
    this.cost_function = "Binary_crossentropy";
    this.layers = 3;
    this.layer_type = [];
    this.layer_outputs = [];
    this.layer_activation_function = [];
    this.layer_type[0] = "Dense_layer";
    this.layer_outputs[0] = 32;
    this.layer_activation_function[0] = "ReLU";
    this.layer_type[1] = "Dense_layer";
    this.layer_outputs[1] = 32;
    this.layer_activation_function[1] = "ReLU";
    this.layer_type[2] = "Dense_layer";
    this.layer_outputs[2] = 1;
    this.layer_activation_function[2] = "Sigmoid";
    this.input_data = start_data;
    this.training_proportion = 0.7;
    this.epochs = 30;
    this.learning_rate = 0.001;

    this.signature ="";
  }

  get_signature() {

    this.signature =
      this.input_type+" "+
      this.inputs+" "+
      this.outputs+"\n"+
      this.layers+"\n";

    for(i = 0; i < this.layers; ++i) {
      this.signature +=
        this.layer_type[i]+" "+
        this.layer_outputs[i]+" "+
        this.layer_activation_function[i]+"\n";
    }

    this.signature += this.output_type+" "+
      this.cost_function;


  }
}


live_config = new Network();

window.onload = function () {

  var input_type = document.getElementById("input_type");
  var inputs = document.getElementById("inputs");
  var output_type = document.getElementById("output_type");
  var outputs = document.getElementById("outputs");
  var cost_function = document.getElementById("cost_function");
  var layers = document.getElementById("layers");
  var layer_type = [];
  var layer_outputs = [];
  var layer_activation_function = [];
  for(i = 0; i < 3; ++i) {
    layer_type[i] = document.getElementById("layer_type_"+i);
    layer_outputs[i] = document.getElementById("layer_outputs_"+i);
    layer_activation_function[i] = document.getElementById("layer_activation_function_"+i);
  }
  var input_data = document.getElementById("input_data");
  var training_proportion = document.getElementById("training_proportion");
  var epochs = document.getElementById("epochs");
  var learning_rate = document.getElementById("learning_rate");

  input_type.options[0] = new Option('Standard', 'Network_input');
  output_type.options[0] = new Option('Standard', 'Network_output');
  cost_function.options[0] = new Option('BinXEnt', 'Binary_crossentropy');

  for(i = 0; i < 3; ++i) {
    layer_type[i].options[0] = new Option('Dense', 'Dense_layer');
    layer_activation_function[i].options[0] = new Option('ReLU', 'ReLU');
    layer_activation_function[i].options[1] = new Option('Sigmoid', 'Sigmoid');
  }

  input_type.value = live_config.input_type;
  inputs.value = live_config.inputs;
  output_type.value = live_config.output_type;
  outputs.value = live_config.outputs;
  cost_function.value = live_config.cost_function;
  layers.value = live_config.layers;
  for(i = 0; i < 3; ++i) {
    layer_type[i].value = live_config.layer_type[i];
    layer_outputs[i].value = live_config.layer_outputs[i];
    layer_activation_function[i].value = live_config.layer_activation_function[i];
  }
  input_data.value = live_config.input_data;
  training_proportion.value = live_config.training_proportion;
  epochs.value = live_config.epochs;
  learning_rate.value = live_config.learning_rate;

  document.getElementById("layer_selector_0").style.outline = "solid black";

  live_config.get_signature();
  document.getElementById("live_config_signature_textarea").value =
    live_config.signature;
  document.getElementById("live_config_data_textarea").value =
    live_config.input_data;
}

function click_layer_button(elem) {

  for(i = 0; i < live_config.layers; ++i) {
    document.getElementById("layer_selector_" + i).style.outline = "black";
    document.getElementById("layer_type_" + i).style.display = "none";
    document.getElementById("layer_outputs_" + i).style.display = "none";
    document.getElementById("layer_activation_function_" + i).style.display = "none";
  }

  var n = elem.id.lastIndexOf("_");
  n = elem.id.length - n - 1;
  var l = elem.id.slice(-n);

  document.getElementById("layer_type_" + l).style.display = "block";
  document.getElementById("layer_outputs_" + l).style.display = "block";
  document.getElementById("layer_activation_function_" + l).style.display = "block";

  elem.style.outline = "solid black";
}

function hide_analysis_boxes() {

  document.getElementById("configuration_button").style.outline = "black";
  document.getElementById("configuration_box").style.display = 'none';
  document.getElementById("training_run_button").style.outline = 'black';
  document.getElementById("training_run_box").style.display = 'none';
  document.getElementById("something_else_box").style.display = 'none';
}

function show_analysis_box(btn, elem) {

  hide_analysis_boxes();

  btn.style.outline = "solid black";
  document.getElementById(elem).style.display = 'block';

}
