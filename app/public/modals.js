function throwErrorModal() { 
    $('#modal-label').html('Sorry');
    $('#modal-body').html('Answer all questions before you submit');
    $('#modal-footer-target').html('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
}

function showFriendModal(name, photo) { 
    $('#modal-label').html('Meet your friend!');
    $('#modal-body').html('');
    $('#modal-body').append('<h4>' + name + '</h4>');
    $('#modal-body').append('<img src="' + photo + '" class="img img-responsive">')
    $('#modal-footer-target').html('<a href="/"><button type="button" class="btn btn-default">Return Home</button></a>');
}

