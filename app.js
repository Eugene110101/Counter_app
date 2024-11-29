const button = document.querySelectorAll('button');
const counterText = document.querySelector('.counter');

let count = 0;

button[1].addEventListener('click', function(){
    count = count + 1;
    counterText.innerText = count;
});

button[0].addEventListener('click', function(){
    if (count > 0) {
    count = count - 1;
    counterText.innerText = count;
}
});

button[2].addEventListener('click', function(){
    count = 0;
    counterText.innerText = count;
});








