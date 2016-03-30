

$('#myForm').submit(function(event) {
  event.preventDefault();
  $(this).children('input:text').each(function(index,elem) {
    var value = $(elem).val();
    var eachTask = $('section').append('<div class="task-style"><h1>'+value+'</h1>'+'<button class="item-button">Remove Task</button></div>');
  });
  // $(this).children('input:text').each(function(index, elem) {
  //   $('.task-style').submit(function(event){
  //     console.log("this happened");
  //   });

  })

  $('.item-button').click(function(event) {
    event.preventDefault();
    console.log('this');
  })
// })


/*
$('.item-button').click( function({
  console.log("button was clicked");
}))
*/
