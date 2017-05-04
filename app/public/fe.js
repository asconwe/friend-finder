$( document ).ready(function () {
  
  $('#new-friend').submit(function(){
    for (var i = 0; i < 10; i++) {
      friendScore.push($('.friend-quiz').eq(i).val());
    }
    
    $.post('/friends', { })
  })

})