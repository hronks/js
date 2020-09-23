function add_line_break(divID) {

  var new_line = document.createElement("br");
  document.getElementById(divID).append(new_line);
}

function add_sel_field(divID, title, init, fieldID) {

  document.getElementById(divID).append(title);

  var field = document.createElement("select");
  field.setAttribute('type', "text");
  field.value = init;
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

function add_num_field(divID, title, init) {

  document.getElementById(divID).append(title);

  var field = document.createElement("input");
  field.setAttribute('type', "number");
  field.value = init;
  field.id = "Hidden layer " + (1 + i) + "_";
  document.getElementById(divID).append(field);

  add_line_break(divID);
  add_line_break(divID);

}

function gen_HL_buttons() {

  var n = document.getElementById("HL").value;

  for(i = 0; i < n; ++i) {

    var btn = document.createElement("button");
    btn.innerHTML = "Hidden layer " + (1 + i);
    btn.id = "HL" + (1 + i);
    document.getElementById("hidden_layer_selection").append(btn);
    document.getElementById("hidden_layer_selection").append(" ");
    document.getElementById("HL" + (1 + i)).addEventListener("click", function() {
      gen_HL_inputs(this.id);
    });
  }
  add_line_break("hidden_layer_selection");
}

function gen_HL_inputs(id) {

  add_sel_field("hidden_layer_inputs", "Type:", "Dense", "type_"+id);
  add_field_option("type_"+id, "Dense");
  add_field_option("type_"+id, "Sparse");
  add_num_field("hidden_layer_inputs", "Outputs:", "32", "outputs_"+id);
  add_sel_field("hidden_layer_inputs", "Function:", "ReLU", "afunct_"+id);
  add_field_option("afunct_"+id, "ReLU");
  add_field_option("afunct_"+id, "Sigmoid");
}
