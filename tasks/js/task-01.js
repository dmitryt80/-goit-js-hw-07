const countCategories = () => {
    const mainList = document.querySelector('ul#categories');

    const listItems = mainList.querySelectorAll('li.item');
    let message = `в списке ${listItems.length} категории.`
    console.log(message);

    listItems.forEach(li => {
        console.log(`Категории: ${li.querySelector('h2').innerText}`);
        console.log(`Количество элементов: ${li.querySelectorAll('li').length} `)
    });

}

countCategories();