

$('#myForm').submit(function(event) {
  event.preventDefault();
  $(this).children('input:text').each(function(index,elem) {
    var value = $(elem).val();
    var eachTask = $('section').append('<div class="task-style"><h1 class="task-style-h1">'+value+'<button class="task-button">X</button>'+'</h1>'+'</div>');
    //This would not work outside of the function
    $('div').click(function(event) {
    event.preventDefault();
    $(this).remove();
    })
  });
})

 // This does work outside of the scope -- ask why above will not work, but this will work
 // $('section').on('click', 'div', function(event) {
 //    $(this).remove();
 //    })
