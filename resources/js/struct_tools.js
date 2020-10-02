
function create_div(x, y, z, w, h, p_type) {

  document.addEventListener('DOMContentLoaded', function() {

    var div = document.createElement('div');
    div.id = document.body.childElementCount;;
    div.style.position = p_type;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.zIndex = z;
    if(w == "end") div.style.width = '100%';
    else div.style.width = w + 'px';
    if(h == "end") div.style.height = '100%';
    else div.style.height = h +'px';

    document.body.appendChild(div);
  }, false);
}

function create_div_layer(y, h, z, col_x, p_type) {

  for(i = 1; i < col_x.length; ++i) {

    create_div(col_x[i - 1], y, z,
                col_x[i] - col_x[i - 1], h, p_type);
  }
}

function h_slice(location, n, h) {

  document.addEventListener('DOMContentLoaded', function() {

    var divID = String(location[0]);
    for(i = 1; i < location.length; ++i) {
      divID = divID + '-' + location[i];
    }

    var home = document.getElementById(divID);
    var elements = home.childElementCount;

    for(i = 0; i < n; ++i) {
      var div = document.createElement('div');
      div.id = divID + '-' + elements;
      ++elements;
      div.style.zIndex = home.style.zIndex;
      div.style.width = home.style.width;
      div.style.height = h + 'px';

      home.appendChild(div);

    }

  }, false);
}

function v_slice(location, n, w) {

  document.addEventListener('DOMContentLoaded', function() {

    var divID = String(location[0]);
    for(i = 1; i < location.length; ++i) {
      divID = divID + '-' + location[i];
    }

    var home = document.getElementById(divID);
    var elements = home.childElementCount;
    var total_w = 0;

    for(i = 0; i < n; ++i) {
      var div = document.createElement('div');
      div.id = divID + '-' + elements;
      ++elements;
      div.style.position = 'absolute';
      div.style.zIndex = home.style.zIndex;
      div.style.height = home.style.height;

      console.log(home.style.width.slice(0,-2));
      w = Math.min(home.style.width.slice(0,-2) - total_w, w);

      div.style.left = total_w + 'px';
      div.style.width = w + 'px';

      total_w += w;

      home.appendChild(div);

    }

  }, false);
}

function add_innerHTML(divID, text) {

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById(divID).innerHTML = text;
  }, false);
}

function add_sel_field(divID, fieldID) {

  document.addEventListener('DOMContentLoaded', function() {

    var field = document.createElement("select");
    field.setAttribute('type', "text");
    field.id = fieldID;
    field.style.width = '128px';
    document.getElementById(divID).appendChild(field);
  }, false);
}

function add_field_option(elementID, name) {

  document.addEventListener('DOMContentLoaded', function() {

    var field = document.getElementById(elementID);
    var c = document.createElement("option");
    c.text = name;
    field.options.add(c, field.options.length);
  }, false);
}

function add_num_field(divID, fieldID, init) {

  document.addEventListener('DOMContentLoaded', function() {

    var field = document.createElement("input");
    field.type = "number";
    field.value = init;
    field.id = fieldID;
    field.style.width = '120px';
    document.getElementById(divID).appendChild(field);
  }, false);
}

function add_text_field(divID, fieldID, init) {

  document.addEventListener('DOMContentLoaded', function() {

    var field = document.createElement("input");
    field.type = "text";
    field.value = init;
    field.id = fieldID;
    field.style.width = '110px';
    document.getElementById(divID).appendChild(field);
  }, false);
}

function add_button(divID, buttonID, text, onclick, ) {

    document.addEventListener('DOMContentLoaded', function() {

    var button = document.createElement('button');
    button.textContent  = text;
    button.id = buttonID;
    button.onclick = function(){
      onclick()
    };

    document.getElementById(divID).appendChild(button);
  }, false);

}

function add_text_input(divID, fieldID, rows, width) {

  document.addEventListener('DOMContentLoaded', function() {

    var field = document.createElement("textarea");
    field.setAttribute('type', "text");
    field.id = fieldID;
    field.style.width = width + 'px';
    field.rows = rows;
    field.style.resize = 'none';
    document.getElementById(divID).appendChild(field);
  }, false);
}


/// specific tools
