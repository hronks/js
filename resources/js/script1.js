
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
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
}

function add_field(divID, title, element, type) {

  var new_line1 = document.createElement("br");
  var new_line2 = document.createElement("br");

  document.getElementById(divID).append(title);

  var field = document.createElement(element);
  field.setAttribute('type', type);
  field.id = "Hidden layer " + (1 + i) + "_type";
  document.getElementById(divID).append(field);

  document.getElementById(divID).append(new_line2);
  document.getElementById(divID).append(new_line1);

}

function gen_HL_inputs(id) {

  add_field("hidden_layer_inputs", "Type:", "select", "text");
  add_field("hidden_layer_inputs", "Outputs:", "input", "number");
  add_field("hidden_layer_inputs", "Function:", "select", "text");

//  alert("activated " + id);

//  var para = document.createElement("B");
//  var node = document.getElementById("hidden_layer_inputs");

//  var field = document.createElement("select");
//  field.id = "Hidden layer " + (1 + i) + "_type";
//  node.append("Type:");
//  node.append(field);
//  node.append(para);

//  var field = document.createElement("select");
//  field.id = "Hidden layer " + (1 + i) + "_type";
//  node.append("Type:");
//  node.append(field);
//  node.append(para);

//  var field = document.createElement("number");
//  field.id = "Hidden layer " + (1 + i) + "_outputs";
//  node.append("Outputs:");
//  node.append(field);
//  node.append(para);

//  field2.appendChild("<br><br>");

}
