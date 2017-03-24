
$(document).ready(function() {

  var url = "https://jsonplaceholder.typicode.com/photos";

  // Modal Script

  $('#photos').on('click', 'a.show-fullsize', function() {
    // Set the title
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

    var text = $(this).find("p").text();
    $('#description-text').text(text);

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
    $('#description-text').val("");
    $('#imagemodal').modal('toggle');
  })

  // get data from local storage
  function getData() {
    for(var i = 0; i < localStorage.length; i++) {
      // console.log("inside forloop");
      var imageID = localStorage.key(i);
      var description = localStorage.getItem(imageID);
      var id = '#' + imageID;
      // console.log(id);
      $(id).find('p').text(description);
    }
  }
  setTimeout(function() {getData(); }, 400);
  
})