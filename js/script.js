const button= document.getElementById('btn');
const griglia= document.getElementById('gril');
const cellTot=100;
button.addEventListener('click',function(){
    genereteGrill(cellTot,griglia);
})
function genereteGrill(cellNum,conteiner){
    // conteiner.innerHTML='';
    for(let i=0;i<cellNum;i++){
        genereteCell(conteiner,i);
    }
}
function genereteCell(conteiner,index){
    const cell= document.createElement('div');
    cell.innerText= index;
    cell.classList.add('cell');
    console.log(cell,'hello word')
    // conteiner.append('cell');
}
