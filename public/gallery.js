console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

$('#new-artwork-form').on('submit', function(event){
    event.preventDefault();

  $.ajax({
    method: 'POST',
    url: '/artworks',
    success: onSuccess,
    error: onError,
    data: $('#new-artwork-form').serialize(),
  });

  function onSuccess(json) {
    console.log(json)
  }

  function onError(xhr, status, errorThrown) {
    console.log("error!")
  }
});



});
