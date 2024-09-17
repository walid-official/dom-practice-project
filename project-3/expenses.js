let amountInsertItem = document.getElementById('amount');
let itemInput = document.getElementById('item');
let expensesInput = document.getElementById('expenses');
let insert_btn = document.getElementById('insertBtn');
let storeContainer = document.getElementById('store');

insert_btn.addEventListener('click',function(){
    let expensesConvert = Number(expensesInput.value);
    let amountSum = Number(amountInsertItem.innerText);
    amountInsertItem.innerHTML = amountSum + expensesConvert;
    expensesInput.value = ""
    let itemsValue = itemInput.value;
    itemInput.value = "";
    let row = `
            <div class="Items-adding" style="display: flex; gap: 30px">
                <h2>${itemsValue}</h2>
                <h2>${expensesConvert}</h2>
            </div>
    `
    storeContainer.innerHTML += row;
    let 
});