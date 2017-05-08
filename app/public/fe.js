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
      radioButtonString += ' <input class="rd-button" type="radio" name="agreeDisagree" value="' + i + '" /> ' + i;
    }
    return '<form class="radio-button">' + radioButtonString + '</form>';
  }

  questions.forEach(function (value) { 
    $('#questions').append('<div class="question"><p>' + value + '</p>' + makeRadioButtons() + '</div><hr>');
  });
  
  $('#new-friend').submit(function (e) {
    var scores = [];
    var imageUrl = $('#image-url').val();
    var friendName = $('#name').val();

    for (var i = 0; i < $('.rd-button:checked').length; i ++) {
      scores.push($('.rd-button:checked').eq(i).val())
    }
    
    console.log($('#name').val());
    if (scores.length < questions.length || $('#name').val() === '' || $('#image-url').val() === '') {
      throwErrorModal();
    } else {
      var postObj = { friendName: friendName, imageUrl: imageUrl, scores: scores };
      $.post('/api/friends', postObj).done(function (data) { 
        showFriendModal(data.friendName, data.imageUrl);
      });

    }
    e.preventDefault();
  })

})