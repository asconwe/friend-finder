var modal = $('<div id="modal" class="modal-box">');


function throwErrorModal() { 
    $('#modal-label').html('Sorry');
    $('#modal-body').html('Answer all questions before you submit');
}

function showFriendModal(name, photo) { 
    $('#modal-label').html('Meet your friend!');
    $('#modal-body').html('');
    $('#modal-body').append('<h4>' + name + '</h4>');
    $('#modal-body').append('<img src="' + photo + '" class="img img-responsive">')
}