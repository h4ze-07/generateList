function generateList (arr) {
    const body = document.body;
    const firstLevelList = document.createElement('ul');
    const listItem = document.createElement('li');
    body.prepend(firstLevelList);

    for (let i = 0; i < arr.length; i++) {

        const ulItem = document.createElement('li');

        if (Array.isArray(arr[i])) {
            const secondLevelList = document.createElement('ul');

            for (let j = 0; j < arr[i].length; j++) {
                secondLevelList.insertAdjacentHTML (
                    'beforeend',
                    `<li>${arr[i][j]}</li>`
                )
            }
            ulItem.append(secondLevelList);
        } else {
            ulItem.innerHTML = arr[i];
        }
        firstLevelList.append(ulItem);
    };
}

generateList([1,2, [1.1,1.2,1.3], 3]);