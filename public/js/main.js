// Sets image given a link
var current_id;
var image_count;
var offset;

function loadImage(image_url){
  $("#image_placeholder").attr('src', image_url);
}

function loadingOn(){
  $("#image_placeholder").attr('src', '');
  $("#image_placeholder").addClass('spinner');
}

function loadingOff(image_url){
  $("#image_placeholder").removeClass('spinner');
  loadImage(image_url);
}


function decrease_id(){
  current_id = current_id - 1;
  current_id = current_id % (offset + image_count);
  if (current_id < offset) current_id = image_count +  offset - 1;
  return current_id;
}

function increase_id(){
  // Increase id
  current_id = current_id + 1;
  // // out of bound error fixer
  current_id = current_id % (offset + image_count);

  if (current_id <= offset) current_id = offset;
  
  // return current_id;
  return current_id;
}

$(document).ready(function(){


  var male = false;
  var female = true;

  // Rename the labels
  $('#typeSelectionInput').bootstrapToggle({
    on: 'Male',
    off: 'Female'
  });

  // Select male or female
  $("#typeSelectionInput").on('change', function(){
      male = $("#typeSelectionInput").prop('checked');
      female = !male;
  });


  // Get image at first 
  $.getJSON("/image/untagged").done(function(data){
    data = data[0];
    current_id = data.id;
    offset = current_id;
    loadImage(data.image_url);
  }).fail(function(jqxhr, textStatus, error){
    console.log("Request failed : " + error);
  });

  // Get image count 
  $.getJSON('/image/count').done(function(count){
    image_count = +count;
    console.log("IMAGE COUNT  : " + image_count);
  }).fail(function(jqxhr, textStatus, error){
    console.log("Request failed : " + error);
  });

  $("#leftBtn").on('click', function(){
    console.log("CURRENT ID : " + current_id);
    // Turn on loading
    loadingOn();

    decrease_id();
    $.getJSON('/image/get', {id: current_id }).done(function(data){
      data = data[0];
      loadingOff(data.image_url);
    }).fail(function(jqxhr, textStatus, error){
      console.log("Request failed : " + error);
    });
  });

  $("#rightBtn").on('click', function(){
    loadingOn();
    increase_id();

    $.getJSON('/image/get', {id: current_id }).done(function(data){
      data = data[0];
      loadingOff(data.image_url);
    }).fail(function(jqxhr, textStatus, error){
      console.log("Request failed : " + error);
    });
  });


});