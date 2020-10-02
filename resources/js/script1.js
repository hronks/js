// generic functions

function add_line_break(divID) {

  var new_line = document.createElement("br");
  document.getElementById(divID).append(new_line);
}

function add_sel_field(divID, title, fieldID) {

  document.getElementById(divID).append(title);

  var field = document.createElement("select");
  field.setAttribute('type', "text");
  field.id = fieldID;
  document.getElementById(divID).append(field);

  add_line_break(divID);
  add_line_break(divID);

}

function add_field_option(elementID, name) {

  var field = document.getElementById(elementID);
  var c = document.createElement("option");
  c.text = name;
  field.options.add(c, field.options.length);
}

function add_num_field(divID, title, init, fieldID) {

  document.getElementById(divID).append(title);

  var field = document.createElement("input");
  field.type = "number";
  field.value = init;
  field.id = fieldID;
  document.getElementById(divID).append(field);

  add_line_break(divID);
  add_line_break(divID);

}

function create_button(divID, text, onclick, buttonID) {

  var button = document.createElement('button');
  button.textContent  = text;
  button.id = buttonID;
  button.onclick = function(){
    onclick()
  };

  document.getElementById(divID).append(button);


}

/// data classes

class ANN_parameters {

  constructor() {

    this.hidden_layers = 0;
    this.hidden_layer_type = [];
    this.hidden_layer_outputs = [];
    this.activation_function = [];
    this.output_string ="";
  }

  get_input_layer(input_type, inputs) {
    this.input_type = input_type;
    this.inputs = inputs;
  }

  get_output_layer(output_type, outputs, cost_function) {
    this.output_type = output_type;
    this.outputs = outputs;
    this.cost_function = cost_function;
  }

  add_hidden_layer(hidden_layer_type, hidden_layer_outputs, activation_function) {
    this.hidden_layers = this.hidden_layers + 1;
    this.hidden_layer_type.push(hidden_layer_type);
    this.hidden_layer_outputs.push(hidden_layer_outputs);
    this.activation_function.push(activation_function);
  }


  write_output_string() {

    var string_out;

    this.output_string =  this.input_type + " " + this.inputs + " " + this.outputs + "\n" +
                  this.hidden_layers + "\n";

    for(var i = 0; i < this.hidden_layers; i++) {
      this.output_string += this.hidden_layer_type[i] + " ";
      this.output_string += this.hidden_layer_outputs[i] + " ";
      this.output_string += this.activation_function[i] + "\n";
    }

    this.output_string += this.output_type + " " + this.cost_function;

  }
}

/// specific functions

param = new ANN_parameters;

function gen_top_inputs() {

  add_sel_field("first_inputs", "Input layer:", "il_type");
    add_field_option("il_type", "Network_input");
  add_num_field("first_inputs", "Inputs:", "10", "inputs");
  add_num_field("first_inputs", "Hidden Layers:", "3", "hidden_layers");
  add_sel_field("first_inputs", "Output layer:", "ol_type");
    add_field_option("ol_type", "Network_output");
  add_num_field("first_inputs", "Outputs:", "1", "outputs");
  add_sel_field("first_inputs", "Cost function:", "c_function");
    add_field_option("c_function", "Binary_crossentropy");

  create_button("hidden_layer_options", "Generate Hidden Layer Options", gen_HL_buttons, "gen_HL_button");
  document.getElementById("hidden_layer_options").append(" ");
  create_button("hidden_layer_options", "Save Parameters", "", "save_params");
  add_line_break("hidden_layer_options");
  add_line_break("hidden_layer_options");
}

function gen_HL_buttons() {

  document.getElementById("hidden_layer_selection").innerHTML = "";
  var n = document.getElementById("hidden_layers").value;

  param.get_input_layer(il_type.value, inputs.value);
  param.get_output_layer(ol_type.value, outputs.value, c_function.value);
  param.hidden_layers = n;

  param.write_output_string();
  alert(param.output_string);

  for(i = 0; i < n; ++i) {

    var btn = document.createElement("button");
    btn.innerHTML = "Hidden layer " + (1 + i);
    btn.id = "HL" + (1 + i);
    document.getElementById("hidden_layer_selection").append(btn);
    document.getElementById("hidden_layer_selection").append(" ");
    document.getElementById("HL" + (1 + i)).addEventListener("click", function() {
      document.getElementById("hidden_layer_inputs").innerHTML = "";
      // store information
      gen_HL_inputs(this.id);
    });
  }
  add_line_break("hidden_layer_selection");
  add_line_break("hidden_layer_selection");
}

function gen_HL_inputs(id) {

  add_sel_field("hidden_layer_inputs", "Type:", "type_"+id);
  add_field_option("type_"+id, "Dense");
  add_field_option("type_"+id, "Sparse");
  add_num_field("hidden_layer_inputs", "Outputs:", "32", "outputs_"+id);
  add_sel_field("hidden_layer_inputs", "Function:", "afunct_"+id);
  add_field_option("afunct_"+id, "ReLU");
  add_field_option("afunct_"+id, "Sigmoid");
}

param.add_hidden_layer("Dense", 32, "ReLU");
param.add_hidden_layer("Dense", 32, "ReLU");
param.add_hidden_layer("Dense", 1, "Sigmoid");
