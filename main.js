

$('#myForm').submit(function(event) {
  event.preventDefault();
  $(this).children('input:text').each(function(index,elem) {
    var value = $(elem).val();
    var eachTask = $('section').append('<div class="task-style"><h1>'+value+'</h1>'+'<button class="item-button">Remove Task</button></div>');
    $('div').click(function(event) {
    event.preventDefault();
    $(this).remove();
})
  });

  })

$('div').click(function(event) {
  event.preventDefault();
  console.log("this");
  //$('this').remove();
})

// })


/*
$('.item-button').click( function({
  console.log("button was clicked");
}))
*/
