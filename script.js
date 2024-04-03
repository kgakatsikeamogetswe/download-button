let download = document.querySelector('.download');
let container = document.getElementById('container');
let number = document.getElementById('number');

download.addEventListener('click', function(event){
    download.classList.add('start');
    let degree = 0;
    let interval = setInterval(function(){
        degree += 1;
        if(degree > 100){
            clearInterval(interval)
            number.innerHTML = ''
        }
    })
})