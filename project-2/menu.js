let listItems = document.getElementsByClassName('list-item');

for(let listItem of listItems){
    listItem.addEventListener('click',function(event){
        if(event.target){
            listItem.classList.add('bg-color');
        }
    })
}

// how to remove without null bal sal;