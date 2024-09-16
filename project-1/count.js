let counter = document.getElementById('count');
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', function(){
    let convertNumber = Number(counter.innerText);
    convertNumber++;
    counter.innerText = convertNumber;
});

decreaseBtn.addEventListener('click', function(){
    let convertNumber = Number(counter.innerText);
    convertNumber--;
    counter.innerText = convertNumber;
})