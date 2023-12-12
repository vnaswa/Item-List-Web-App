document.addEventListener('DOMContentLoaded', function() {
});
let items = [];
function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    if (itemName && !isNaN(itemPrice)) {
        items.push({ name: itemName, price: itemPrice });
        clearInputFields();
    } else {
        alert('Please enter valid item name and price.');
    }
}
function displayItems() {
    const itemListContainer = document.getElementById('itemList');
    const itemList = document.createElement('ul');
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name} - $${item.price}</span>
                        <div class="editControls">
                            <button onclick="editItem(${index})">Edit</button>
                            <button onclick="deleteItem(${index})">Delete</button>
                        </div>`;
        itemList.appendChild(li);
    });
    itemListContainer.innerHTML = '';
    itemListContainer.appendChild(itemList);
    itemListContainer.style.display = 'block';
}
function clearList() {
    const itemListContainer = document.getElementById('itemList');
    itemListContainer.innerHTML = '';
    items = [];
}
function clearInputFields() {
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
}
function editItem(index) {
    const itemName = prompt('Enter new item name:', items[index].name);
    const itemPrice = prompt('Enter new item price:', items[index].price);
    if (itemName !== null && itemPrice !== null) {
        items[index] = { name: itemName, price: parseFloat(itemPrice) };
        displayItems();
    }
}
function deleteItem(index) {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
        items.splice(index, 1);
        displayItems();
    }
}