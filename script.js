var chats = document.getElementsByClassName('messages');
var chatBox = document.getElementsByClassName('chat-box');

chats[0].addEventListener('click', function() {
    if(chatBox[0].classList.contains('active'))  {
        chatBox[0].classList.remove('active');
        console.log('hey')
    }else {
        chatBox[0].classList.add('active');
    }
})