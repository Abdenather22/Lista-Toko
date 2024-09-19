document.getElementById('addItemButton').addEventListener('click', function() {
    const itemName = document.getElementById('itemName').value.trim(); // Remove espaços em branco
    const itemQuantity = document.getElementById('itemQuantity').value;

    if (itemName) {
        const itemList = document.getElementById('itemList');
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <span>${itemName} - ${itemQuantity}</span>
            <button class="removeButton">Remover</button>
        `;
        itemList.appendChild(newItem);
        document.getElementById('itemName').value = ''; // Limpa o campo após adicionar

        // Foca no campo de nome do próximo item
        document.getElementById('itemName').focus(); 

        newItem.querySelector('.removeButton').addEventListener('click', function() {
            itemList.removeChild(newItem);
        });
    } else {
        alert('Coloque nome do que quer Deficiente.');
    }
});
