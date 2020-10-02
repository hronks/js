const y1 = 80;
const y2 = 140;

create_div_layer(0, y1, 1, [0, 2000], 'absolute');
create_div_layer(y1, 1200, 0, [0, 400, 2000], 'absolute');

/// left column

h_slice([1], 1, 270);
h_slice([1,0], 1, 50);
h_slice([1,0], 6, 30);
for(i = 1; i <= 6; ++i) {
  v_slice([1,0,i], 2, 180);
}
h_slice([1,0], 1, 40);

h_slice([1], 1, 220);
h_slice([1,1], 1, 50);
h_slice([1,1], 1, 40);
h_slice([1,1], 3, 30);
for(i = 2; i <= 4; ++i) {
  v_slice([1,1,i], 2, 180);
}
h_slice([1,1], 1, 40);

h_slice([1], 1, 330);
h_slice([1,2], 1, 50);
h_slice([1,2], 1, 30);
h_slice([1,2], 1, 180);
h_slice([1,2], 1, 30);
  v_slice([1,2,3], 2, 180);
h_slice([1,2], 1, 40);

h_slice([1], 1, 150);
h_slice([1,3], 1, 50);
h_slice([1,3], 2, 30);
for(i = 1; i <= 2; ++i) {
  v_slice([1,3,i], 2, 180);
}
h_slice([1,3], 1, 40);

/// right column

h_slice([2], 1, 50);
h_slice([2], 1, 1150);




add_innerHTML('0',"<h1>Artificial Neural Network<hr></h1>");

document.addEventListener('DOMContentLoaded', function() {
//  document.getElementById('0').style.backgroundColor = 'lightblue';
  document.getElementById('0').style.position = 'fixed';
}, false);


document.addEventListener('DOMContentLoaded', function() {
//  document.getElementById('1').style.backgroundColor = 'lightblue';
  document.getElementById('1').style.overflow = 'scroll';
  document.getElementById('1').style.position = 'fixed';
  document.getElementById('1').style.height = (window.innerHeight-y1)+'px';
}, false);



add_innerHTML('1-0-0',"<h3>Network Parameters</h3>");

add_innerHTML('1-0-1-0',"Input layer");
add_sel_field('1-0-1-1', 'input_layer_type');
  add_field_option('input_layer_type', 'Network_input')

add_innerHTML('1-0-2-0',"Inputs");
add_num_field('1-0-2-1', 'inputs', 10);

add_innerHTML('1-0-3-0',"Output Layer");
add_sel_field('1-0-3-1', 'output_layer_type');
    add_field_option('output_layer_type', 'Network_output')

add_innerHTML('1-0-4-0',"Outputs");
add_num_field('1-0-4-1', 'outputs', 1);

add_innerHTML('1-0-5-0',"Cost function");
add_sel_field('1-0-5-1', 'cost_function');
    add_field_option('cost_function', 'Binary_crossentropy');

add_innerHTML('1-0-6-0',"Layers");

add_num_field('1-0-6-1', 'layer', 3);

add_button('1-0-7', 'save_parameters', 'Save', );

add_innerHTML('1-1-0',"<h3>Layer Parameters");

document.addEventListener('DOMContentLoaded', function() {

  for(i = 0; i < layer.value; ++i) {

    var button = document.createElement('button');
    button.textContent  = 'Layer '+(i+1);
    document.getElementById('1-1-1').appendChild(button);
    document.getElementById('1-1-1').append(' ');

  }
}, false);

add_innerHTML('1-1-2-0', 'Layer type');
add_sel_field('1-1-2-1', 'layer_type');
  add_field_option('layer_type', 'Dense_layer');

add_innerHTML('1-1-3-0', 'Outputs');
add_num_field('1-1-3-1', 'Outputs', 32);

add_innerHTML('1-1-4-0', "Activation function");
add_sel_field('1-1-4-1', 'activation_function');
  add_field_option('activation_function', 'ReLU');
  add_field_option('activation_function', 'Sigmoid');

add_button('1-1-5', 'save_layer_parameters', 'Save', );

add_innerHTML('1-2-0',"<h3>Data</h3>");
add_innerHTML('1-2-1', 'Paste input data below');
add_text_input('1-2-2', 'data', 10, 300);
add_innerHTML('1-2-3-0', 'Training proportion');
add_text_field('1-2-3-1', 'training_proportion', 0.7);
add_button('1-2-4', 'save_data', 'Save', );

add_innerHTML('1-3-0',"<h3>Training Parameters</h3>");
add_innerHTML('1-3-1-0',"Epochs");
add_num_field('1-3-1-1', 'epochs', 50);
add_innerHTML('1-3-2-0',"Learning rate");
add_text_field('1-3-2-1', 'leanring_rate', 0.001);
add_button('1-3-3', 'save_training_parameters', 'Save', );

add_button('2-0', 'save_training_parameters', 'Data', );
add_button('2-0', 'save_training_parameters', 'Option 2', );
add_button('2-0', 'save_training_parameters', 'Option 3', );
add_button('2-0', 'save_training_parameters', 'Option 4', );
add_button('2-0', 'save_training_parameters', 'Option 5', );
//document.addEventListener('DOMContentLoaded', function() {
//  document.getElementById('2-0').innerHTML='<hr>';
//}, false);
