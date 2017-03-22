  
$(document).ready(function() {

  var url = "https://jsonplaceholder.typicode.com/photos";


  $.ajax({
    url: url,
    type: "GET",
    dataType: 'jsonp',
    success: function(data) {
      console.log(data);
      // var photosOutput = "";
      // $.each(data.photos.photo,function(index, element) {
      //   photosOutput += '<a href="#" class="image show-fullsize">';
      //   photosOutput += '<div class="img-thumbnail"" style="background-image: url(https://farm' + element.farm
      //   + '.staticflickr.com/' + element.server + '/' + element.id
      //   + '_' + element.secret + '_t.jpg);"></div></a>';
      // });

      // $('#photos').html(photosOutput);
    }
  });


  
})