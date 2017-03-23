 

$(document).ready(function() {

  var url = "https://jsonplaceholder.typicode.com/photos";

  $.getJSON(url, function(json) {

    var photosOutput = "";

    $.each(json,function(index, element) {
      photosOutput += '<a href="#" id="image'+ element.id + '" class="column image show-fullsize">';
      photosOutput += '<div class="img-thumbnail" style="background-image: url(' + element.thumbnailUrl
      + ');"></div><h5>' + element.title +'</h5><p class="img-description"></p></a>';

      if(index >= 24) {
        return false;
      } 
    });

    $('#photos').html(photosOutput);
          getData();

  });

  // Modal Script

  $('#photos').on('click', 'a.show-fullsize', function() {
    // Set the title dynamically
    var title = $(this).find("h5").text();
    $('.modal-title').text(title);
    var id = $(this).attr("id");

    $('#photos').data('imageID', { imageID: id });
    // To retrieve data:

    var idData = $('#photos').data('imageID');

    // Set the large image from url
    var image = $(this).find("div").css('background-image');
    var imageUrl = image.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    imageUrl = imageUrl.replace(/150/, 600);
    $('.imagepreview').attr('src', decodeURI(imageUrl));

    // Show modal
    $('#imagemodal').modal('show');
  });


  // Save description
  $('#save-description').on('click', function() {
    var description = $('#description-text').val();
    var idData = $('#photos').data('imageID');
    
    $('#'+ idData.imageID).find("p").text(description);

    // save in local storage
    localStorage.setItem(idData.imageID, description);
  })

  // get data from local storage
  function getData() {
    for(var i = 0; i < localStorage.length; i++) {
      var imageID = localStorage.key(i);
      var description = localStorage.getItem(imageID);
      var id = '#' + imageID;

      $(id).find('p').text(description);
    }
  }

    getData();
  
})