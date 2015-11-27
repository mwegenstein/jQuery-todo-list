$(document).ready(function(event) {
  var counter = 0

 $('#form').on('click', 'button',function(event){
    counter++;
    event.preventDefault();
    var value = $('input:text').val();
    $('input:text').val("");//clears input
    // store the input value
    console.log(value);
    var classNum = '_'+counter;
    $('ul').append('<li class='+classNum+'><input type="checkbox" name="ossm"><label for="ossm">' + value + '</label><span class='+classNum+'>x</span></li>');
  }); 

 $(document).on('click','span', function(event){
  // console.log('you clicked: ', $(this)[0].className);
  var classClicked = '.'+$(this)[0].className;
  $(classClicked).remove();

 });

});

//todo in future:
//add motivational quotes on refresh
//if long text must word-wrap

