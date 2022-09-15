export function renderCats(cats) {
    const li = document.getElementById('li');
    li.classList.add('cat-info');

    const headerEl = document.createElement('h2');
    headerEl.textcontent = cats.name;

    const pEl = document.createElement('p');
    pEl.textContent = cats.color + ' ' + cats.size;

    li.append(headerEl, pEl);

    return li;
}
