$(document).ready(function () {
  
  var questions = ['Star Wars is better than Star Trek',
    'Star Wars is more culturally significant than Star Trek',
    'Star Wars has better characters than Star Trek',
    'The Empire would defeat the Federation in a war',
    'Han Solo is more charismatic than Captian Kirk',
    'Star Wars is more important to the history of science fiction than Star Trek',
    'Star Wars space ships are cooler than Star Trek space ships',
    'Star Wars books are better than Star Trek books',
    'The future of Star Wars is brighter than the future of Star Trek'
  ];

  function makeRadioButtons() {
    var radioButtonString = '';
    for (var i = 1; i < 6; i++) {
      radioButtonString += ' <input type="radio" name="agreeDisagree" value="' + i + '"> ' + i;
    }
    return '<form>' + radioButtonString + '</form>';
  }

  questions.forEach(function (value) { 
    $('#questions').append('<div class="question"><p>' + value + '</p>' + makeRadioButtons() + '</div><hr>');
  });
  
  $('#new-friend').submit(function (e) {
    e.preventDefault();

    var friendScore = [];
    var imageUrl = $('#image-url').val();
    var friendName = $('#friend-name').val();
    console.log('submitted');
    for (var i = 0; i < questions.length; i++) {
      friendScore.push($('#questions').eq(i).eq(1).val());
    }
    
    $.post('/friends', { friendName: friendName, imageUrl: imageUrl, friendScore: friendScore }, function () { 
      console.log('Should get the best friend match back and display modal');
    })
  })

})