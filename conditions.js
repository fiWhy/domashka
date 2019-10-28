var msg = 'valid';
var password = '1234';
var notification = document.querySelector('.notification');

var blockClass = msg === 'valid' ? password === '123' ? 'valid' : 'error' : 'error';

if (msg === 'valid') {



    if (password === '123') {
        blockClass = 'valid';
    } else {
        blockClass = 'error';
    }
} else {
    blockClass = 'error';
}