let listItems = document.getElementsByClassName('list-item');
let barIcon = document.getElementById('open-bar');
let closeIcon = document.getElementById('close-bar');
let navbar = document.getElementById('navbar');

barIcon.addEventListener('click', function(event){
    navbar.style.display = "block";
    event.target.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", function(event){
    navbar.style.display = "none";
    event.target.style.display = "none";
    barIcon.style.display = "block";
})





for(let listItem of listItems){
    listItem.addEventListener('click',function(event){
        for(let item of listItems){
            item.classList.remove('bg-color');
        }
        if(event.target){
            listItem.classList.add('bg-color');
        }
    })
}



