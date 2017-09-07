// Sets image given a link
function loadImage(image_url){
  $("#image_placeholder").attr('src', image_url);
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
    loadImage(data.image_url);
  }).fail(function(jqxhr, textStatus, error){
    console.log("Request failed : " + error);
  });


});