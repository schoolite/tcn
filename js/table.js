
window.addEventListener('load', (e)=> {
    let cells = document.querySelectorAll('.cell');
    let activeCell;

    cells.forEach(cell => {
        cell.addEventListener('click', (e)=>{
            activeCell = e;
            
            console.log(activeCell);
        });
    })
});
