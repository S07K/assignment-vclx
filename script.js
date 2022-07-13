var chats = document.getElementsByClassName('messages');
var chatBox = document.getElementsByClassName('chat-box');
var main = document.querySelector('.main');
var windows =  document.querySelectorAll('.windows> div');

chats[0].addEventListener('click', function() {
    if(chatBox[0].classList.contains('active'))  {
        chatBox[0].classList.remove('active');
        main.classList.remove('main-active');
        windows.forEach(function (el) {
            el.classList.remove('windows-active');
        });
    }else {
        chatBox[0].classList.add('active');
        main.classList.add('main-active');
        windows.forEach(function (el) {
            el.classList.add('windows-active');
        });
    }
}) 

var micIconChange = function(mic) {
    var micBtn = document.querySelector('.mic');
    if(mic.querySelector('i').classList.contains('fa-microphone-slash')) {
        mic.querySelector('i').classList.remove('fa-microphone-slash') 
        micBtn.classList.remove('tool-active');
        micBtn.title = 'mute';
    }else {
        mic.querySelector('i').classList.add('fa-microphone-slash')
        micBtn.classList.add('tool-active');
        micBtn.title = 'unmute';
    }
}
var camIconChange = function(cam) {
    var camBtn = document.querySelector('.camera');
    if(cam.querySelector('i').classList.contains('fa-video-slash')) {
        cam.querySelector('i').classList.remove('fa-video-slash') 
        camBtn.classList.remove('tool-active');
        camBtn.title = 'off cam';
    }else {
        cam.querySelector('i').classList.add('fa-video-slash')
        camBtn.classList.add('tool-active');
        camBtn.title = 'on cam';
    }
}