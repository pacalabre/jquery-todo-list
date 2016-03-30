

$('#myForm').submit(function(event) {
  event.preventDefault();
  $(this).children('input:text').each(function(index,elem) {
    var value = $(elem).val();
    var eachTask = $('section').append('<div class="task-style"><h1>'+value+'</h1>'+'</div>');
    $('div').click(function(event) {
    event.preventDefault();
    $(this).remove();
    })
  });
})
