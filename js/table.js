
window.addEventListener('load', (e)=> {
    let editButton = document.querySelector('#edit');
    let viewButton = document.querySelector('#view');

    let viewCells = document.querySelectorAll('.view'); 
    let editCells = document.querySelectorAll('.edit');


    editButton.addEventListener('click', (e)=>{
    
        viewCells.forEach( cell =>{
            cell.classList.remove('active');
        });
 
        editCells.forEach( cell=>{
             cell.classList.add('active');
        });

        getViewValue();
    });

    viewButton.addEventListener('click', (e)=>{

        viewCells.forEach( cell =>{
            cell.classList.add('active');
        });
 
        editCells.forEach( cell=>{
             cell.classList.remove('active');
        });

        getEditValue();

    });


    function getEditValue(){
        editCells.forEach( (cell, index) =>{
            let value = cell.value;

            updateViewCell(value, index);
        })
    }

    function updateViewCell(value, index){
        viewCells[index].textContent = value;
    }

    function getViewValue(){
        viewCells.forEach((cell, index) => {
            let value = cell.textContent;

            updateEditCell(value, index);
        })
    }

    function updateEditCell(value, index){
        editCells[index].value = value;
    }

});
