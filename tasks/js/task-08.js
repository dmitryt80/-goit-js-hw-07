const numberInput = document.querySelector('#controls input');
const renderButton = document.querySelector('button[data-action="render"]');
const clearButton = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

renderButton.addEventListener('click', () => collectionRender(numberInput.value));
clearButton.addEventListener('click', collectionClear);


function collectionRender(amount) {
    let newCollection = [];
    for (let i = 0; i < amount; i += 1) {
        const collection = document.createElement('div');
        collection.style.width = `${30 + i * 10}px`;
        collection.style.height = `${30 + i * 10}px`;
        collection.style.backgroundColor =
            '#' + (((1 << 24) * Math.random()) | 0).toString(16);
        newCollection.push(collection);
    }
    boxes.append(...newCollection);

}

function collectionClear(event) {
  
    boxes.innerHTML = '';

}