// Sets image given a link
var current_id;
var image_count;

function loadImage(image_url){
  $("#image_placeholder").attr('src', image_url);
}


function increase_id(){

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


});