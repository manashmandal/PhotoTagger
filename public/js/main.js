// Sets image given a link
var current_id = 1;
var image_count;
var offset;

// Set values 
var set_gender;

var is_male;
var is_female;
var is_valid;

function loadImage(image_url){
  $("#image_placeholder").attr('src', image_url);
}

// Turns on loading progress
function loadingOn(){
  $("#image_placeholder").attr('src', '');
  $("#image_placeholder").addClass('spinner');
}

// Turns off loading progress
function loadingOff(image_url){
  $("#image_placeholder").removeClass('spinner');
  loadImage(image_url);
}

// Show progress bar 
function showProgressAlert(){
  $("#infoalert").empty();
  $("#infoalert").attr('class', 'alert alert-warning');
  $("#infoalert").append(
      '<div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"> <span class="sr-only">45% Complete</span> </div> </div>'
  );
}

// Generic update alert panel function 
function updateAlertPanel(_html, _class){
  $("#infoalert").empty();
  $("#infoalert").attr('class', 'alert alert-' + _class);
  $("#infoalert").append(_html);
}

// Updates info on alert
function updateInfo(data){

  $("#infoalert").empty();
  
  if (data.is_tagged){
    $("#infoalert").attr('class', 'alert alert-success');
    let gender = data.is_male === 1 ? "Male" : "Female";
    gender = data.is_valid === 1 ? gender : "Invalid Image"; 
    $("#infoalert").append(
      '<h3><span class="label label label-success">Tagged</span> <span class="label label label-default">Image ID: ' + data.id + '</span> <span class="label label-primary">' + gender + '</span></h3>'
    );

  } else {
    $("#infoalert").attr('class', 'alert alert-danger');
    $("#infoalert")
            .append('<h3><span class="label label label-danger">Not Tagged</span> <span class="label label label-default">Image ID: ' + data.id + '</span></h3>');

  }
}


// Listen to gender change input 
$("#typeSelectionInput").change(function(){
  set_gender = $(this).prop('checked');
});


// load untagged
function loadUntagged(){
  // Get image at first 
  $.getJSON("/image/untagged").done(function(data){
    data = data[0];
    current_id = data.id;
    offset = current_id;
    loadImage(data.image_url);
    updateInfo(data);
  }).fail(function(jqxhr, textStatus, error){
    console.log("Request failed : " + error);
  });
}


// on save event
$("#saveBtn").on('click', function(){
  is_male = set_gender === true ? 1 : 0;
  is_female = is_male === 1 ? 0 : 1;
  is_valid = $("#fancy-checkbox-danger").prop('checked') === true ? 0 : 1; 
  
  // Add GET request to save data
  $.getJSON('/image/' + current_id, {
    tagged: true, 
    male: is_male,
    female: is_female,
    valid: is_valid
  }).done(function(data){
    console.log("SAVED");
    if (data.status === "saved"){
        updateAlertPanel("<h3>Tagged Successfully</h3>", 'success');
        setTimeout(loadUntagged(), 250);
    }
  }).fail(function(jqxhr, textStatus, error){
    console.log("ERROR OCCURED : " + error);
    updateAlertPanel("<h3>Tagged Failed</h3>", 'danger');
    
  });
});


// Decrease id
function decrease_id(){
  current_id = current_id - 1;
  current_id = current_id % (image_count);
  if (current_id < image_count) current_id = image_count;
  if (current_id == 0) current_id = 1;
  return current_id;
}

// Increase id 
function increase_id(){
  // Increase id
  current_id = current_id + 1;
  // // out of bound error fixer
  if (current_id > image_count){
    current_id = 1;
    return current_id;
  } else if (current_id === image_count) {
    return current_id;
  } else {
    current_id = current_id % (image_count);
  }

  if (current_id === 0) current_id++;
  
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


  // Load untagged image at first
  loadUntagged();

  // Get image count 
  $.getJSON('/image/count').done(function(count){
    image_count = +count;
  }).fail(function(jqxhr, textStatus, error){
    console.log("Request failed : " + error);
  });

  $("#leftBtn").on('click', function(){
    
    // Turn on loading
    loadingOn();
    showProgressAlert();
    decrease_id();

    $.getJSON('/image/get', {id: current_id }).done(function(data){
      data = data[0];
      loadingOff(data.image_url);
      updateInfo(data);
    }).fail(function(jqxhr, textStatus, error){
      console.log("Request failed : " + error);
    });
  });

  $("#rightBtn").on('click', function(){
    loadingOn();
    increase_id();
    showProgressAlert();

    $.getJSON('/image/get', {id: current_id }).done(function(data){
      data = data[0];
      loadingOff(data.image_url);
      updateInfo(data);
    }).fail(function(jqxhr, textStatus, error){
      console.log("Request failed : " + error);
    });
  });
});