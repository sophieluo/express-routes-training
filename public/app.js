console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

$('#guess-number-form').on('submit', function(event){
    event.preventDefault();

  $.ajax({
    method: 'GET',
    url: '/pickanumber',
    success: onSuccess,
    error: onError,
    data: $('#guess-number-form').serialize(),
  });

  function onSuccess(json) {
    //console.log(json)
    $('#high-low-correct').html(json)

  }

  function onError(xhr, status, errorThrown) {
    console.log("error!")
  }
});

});
