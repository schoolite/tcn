
window.addEventListener('load', (e)=> {
    let editButton = document.querySelector('#edit');
    let viewButton = document.querySelector('#view');

    let viewCells = document.querySelectorAll('.view'); 
    let editCells = document.querySelectorAll('.edit');

    let hours = [
                    '0030', '0100', '0130', '0200', '0230', '0300', '0330', '0400', '0430',
                    '0500', '0530', '0600', '0630', '0700', '0730', '0800', '0830', '0900',
                    '0930', '1000', '1030', '1100', '1130', '1200', '1230', '1300', '1330',
                    '1400', '1430', '1500', '1530', '1600', '1630', '1700', '1730', '1800',
                    '1830', '1900', '1930', '2000', '2030', '2100', '2130', '2200', '2230',
                    '2300', '2330', '2400'
                ];


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

        cellSumation();

    });


    function getEditValue(){
        editCells.forEach( (cell, index) =>{
            let value = cell.value;

            if(value != ''){
                updateViewCell(value, index);
            }
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


    function cellSumation(){
        hours.forEach( hour =>{

            if(document.querySelector(`[data-id=lagos-${hour}]`) && document.querySelector(`[data-id=abuja-${hour}]`)){

                let lagos = document.querySelector(`[data-id=lagos-${hour}]`);
                let abuja = document.querySelector(`[data-id=abuja-${hour}]`);
    
                let lagosValues = 0.0; 
                    document.querySelectorAll(`[data-id=lagos-lg-${hour}]`).forEach( cell =>{
                        if(cell.innerText != " "){
                            lagosValues += parseFloat(cell.innerText);
                        }
                    });

                let abujaValues = 0.0; 
                    document.querySelectorAll(`[data-id=abuja-lg-${hour}]`).forEach( cell => {
                        if(cell.innerText){
                            abujaValues += parseFloat(cell.innerText);
                        }
                    });

                lagos.textContent = lagosValues.toFixed(1);
                abuja.textContent = abujaValues.toFixed(1);
            }

            if(document.querySelector(`[data-row="${hour}"]`) && document.querySelector(`[data-total=total-${hour}]`)){
                let tableRow = document.querySelector(`[data-row="${hour}"]`);
                let cells = tableRow.querySelectorAll(`[data-state="sum"]`);
                let cellTotal = document.querySelector(`[data-total=total-${hour}]`);

                let totalValue = 0;
                cells.forEach( cell => {
                    if(cell.innerText){
                        totalValue += parseInt(cell.innerText);
                    }
                })

                cellTotal.textContent = totalValue;
                
            }
        })
    }

    cellSumation();

});
