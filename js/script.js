const button = document.getElementById('btn');
const griglia = document.getElementById('gril');
const cellTot = 100;

button.addEventListener('click', function () {
    genereteGrill(cellTot, griglia);
})

function genereteGrill(cellNum, conteiner) {
    conteiner.innerHTML = '';
    for (let i = 1; i <= cellNum; i++) {
        genereteCell(conteiner, i);
    }
}

function genereteCell(conteiner, index) {
    const cell = document.createElement('div');
    cell.innerText = index;
    cell.classList.add('cell');
    conteiner.append(cell);
    cell.addEventListener('click', function () {
        cell.classList.add('cell-blu');
        console.log(cell.innerHTML)
    })
}
