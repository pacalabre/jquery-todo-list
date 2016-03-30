
$('#myForm').submit(function(event) {
  event.preventDefault();
  $(this).children('input:text').each(function(index,elem) {
    var value = $(elem).val();
    $('section').append('<h1>'+value+'</h1>'+'<button class="item-button">x</button>');
    $(elem).val('');
  });
  console.log(event);
})
