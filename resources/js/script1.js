
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
  }
}
