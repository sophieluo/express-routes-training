console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

$('#guess-number-form').on('submit', function(event){
    event.preventDefault();

  $.ajax({
    method: 'GET',
    url: '/pick-a-number',
    success: onSuccess,
    error: onError,
    data: $('#guess-number-form').serialize(),
  });

  function onSuccess(json) {
    $('#high-low-correct').html(json)

  }

  function onError(xhr, status, errorThrown) {
    console.log("error!")
  }
});

$('#target-number-form').on('submit', function(event){
    event.preventDefault();

  $.ajax({
    method: 'POST',
    url: '/pick-a-number',
    success: onSuccess,
    error: onError,
    data: $('#target-number-form').serialize(),
  });

  function onSuccess(json) {
    console.log(json);
  }

  function onError(xhr, status, errorThrown) {
    console.log("error!")
  }
});

});
