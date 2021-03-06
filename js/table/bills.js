
    let tableBody = document.querySelector("tbody");
    let tableRow = "";

    let hours = [
        '0030', '0100', '0130', '0200', '0230', '0300', '0330', '0400', '0430',
        '0500', '0530', '0600', '0630', '0700', '0730', '0800', '0830', '0900',
        '0930', '1000', '1030', '1100', '1130', '1200', '1230', '1300', '1330',
        '1400', '1430', '1500', '1530', '1600', '1630', '1700', '1730', '1800',
        '1830', '1900', '1930', '2000', '2030', '2100', '2130', '2200', '2230',
        '2300', '2330', '2400'
    ];

    var datas = [
        [932,220,415,297,110,116.8," ",179,252.7," ",62,35,168,208.3," ",187,62.6," "," ",170.9," "," "," "," ",135,100,54.1,22.3,72," ",10.8," ",65,61.4," "," "," ",0],
        [926,204,431,291,102,118.4,180,166,215.7,51,62,30,110,218.4,103.6,194.1,49,41.7,6,173.5,69.1,3.7,199,38,119,80,54.1,21.3,72,81,10.8,7.73,74.1,62,134.4,89.1,149,372.5  ],
        [954,215,454,285,122,109.2," ",160,213.9," ",55,30,110,222.8," ",196.8,49," "," ",170," "," "," "," ",119,80,46.3,21.1,72," ","06.6"," ",74.1,62.4," "," "," ",0  ],
        [1002,224,477,301,130,100,175,154,210,44,52,31,93,206.8,82.4,200,68,41.7,6,166.5,71.3,3.7,203,25,125,74,50.9,21,72,74,"06.6",7.41,61,61.9,129.8,90.3,145.6,365.7  ],
        [956,220,465,271,128,99.5," ",157,209.2," ",55,32,93,201.9," ",195.9,68," "," ",166.1," "," "," "," ",125,74,48.2,20.8,72," ","06.5"," ",61,65," "," "," ",0  ],
        [925,216,452,257,132,99,157,159,209.4,43,52,30,93,194.7,53.7,177.7,72.6,31.7,8,165.7,58.1,3.5,188.3,10,121,66,47.2,20.6,70,74,"06.4",7.09,57,65,123.9,74,127,324.9  ],
        [938,218,445,275,124,99.8," ",162,212.5," ",53,30,93,195.1," ",173.5,72.6," "," ",156.6," "," "," "," ",121,66,45.9,20.5,70," ","06.5"," ",57,65," "," "," ",0  ],
        [951,219,438,294,112,100.6,152,165,219.6,44,54,33,93,191.3,59.5,172.4,51.7,31.7,10,147.5,40.5,3.5,145.6,22,119,64,45.3,20.4,73,62,"10.8",6.93,52,65,119.5,81,133.8,334.3  ],
        [945,220,432,293,108,98.7," ",183,224.4," ",59,34,93,192.2," ",156.5,51.7," "," ",142.4," "," "," "," ",119,64,45.3,20.6,73," ","10.5"," ",52,67.5," "," "," ",0  ],
        [936,220,425,291,96,96.7,141,201,243.8,45,64,55,156,193.7,54.3,159.9,43.9,32.3,4,137.3,52.9,3.7,157.4,24,117,62,45.7,20.2,78,62,"10.6",7.26,53.6,67.8,128.3,74.4,136.6,339.3  ],
        [925,224,407,294,106,97," ",218,250," ",70,62,156,192.2," ",157.9,43.9," "," ",123.3," "," "," "," ",117,62,48.4,20,85," ","10.8"," ",53.6,53.7," "," "," ",0  ],
        [908,225,388,295,84,97.3,142,235,258.7,53,78,67,172,191.7,73.7,149.6,61.7,32.7,4,109.3,50.3,4.4,126.8,25,111,64,49.7,20.3,94,65,"10.9",8.91,39.2,53.7,129.6,67.9,142.8,340.3  ],
        [890.5,215,385.5,290,84,92.8," ",238,259.2," ",95,68,172,187.4," ",145,61.7," "," ",119," "," "," "," ",111,64,46.7,20.8,93," ","12.7"," ",39.2,37.8," "," "," ",0  ],
        [876,206,383,287,82,88.2,135,241,272.6,65,99,77,176,181.1,81.4,135.4,71.9,39.2,5,128.7,30.2,3.1,108.4,13,117,68,55.5,21.4,91,64,"13.5",11.32,45,37.8,125.8,65,134.1,324.9  ],
        [885.5,208,384.5,293,88,81.2," ",232,282.4," ",100,83,176,158.3," ",133.9,71.9," "," ",119.7," "," "," "," ",117,68,50.3,22.6,89," ","15.0"," ",40.1,37.8," "," "," ",0  ],
        [897,211,386,300,86,74.2,112,223,283.1,68,112,71,179,151.5,76.6,124,75.5,41.4,4,110.6,31.4,5.5,89.8,13,117,82,61.6,23.9,87,63,"16.3",13.11,37.8,36.6,132.1,65.4,150.4,347.9  ],
        [926,220,405,301,92,75.9," ",220,286," ",110,76,179,160.7," ",137.7,75.5," "," ",99.2," "," "," "," ",117,82,59.9,24,78," ","15.0"," ",40.1,36.6," "," "," ",0  ],
        [957,230,424,303,100,77.7,90,217,282.8,71,109,84,173,175.2,85.3,141.7,75.6,43.6,4,87.7,37.5,5.9,99.1,18,130,74,52.2,24.2,74,68,"08.8",13.11,42.4,36.6,131.6,36.7,156.8,325.1  ],
        [970.5,232,428.5,310,108,80.4," ",229,280.9," ",109,80,173,177.7," ",152.2,75.6," "," ",87.7," "," "," "," ",130,74,54.1,24.1,66," ","08.8"," ",55.2,56.7," "," "," ",0  ],
        [985,235,433,317,126,83,87,241,277.2,69,110,80,179,164.6,89,157.7,77.4,44.8,5,87.7,33.4,5.9,171.7,22,136,94,54.3,23.8,58,77," ",12.31,75.4,63.5,128.8,42.2,144.2,315.2  ],
        [987,235,439,313,122,99.9," ",247,275.9," ",102,80,179,177.2," ",165.7,77.4," "," ",90," "," "," "," ",136,94,49.2,24.1,64," "," "," ",88.1,63.7," "," "," ",0  ],
        [991,236,445,310,120,116.9,89,253,271.7,70,102,80,198,167,87,145.2,76.7,48.2,5,92.2,38.8,5.7,205.1,34,139,96,48.4,24.3,70,79," ",13.13,104.5,71,115.9,71.9,150.2,338  ],
        [985,232,443,310,80,128.2," ",253,261," ",100,80,198,178.6," ",168.3,76.7," "," ",94.7," "," "," "," ",139,96,53.4,24,70," ","05.8"," ",102.2,71," "," "," ",0  ],
        [981,229,441,311,76,139.4,91,253,257.3,67,100,79,212,186.9,93,169.4,81.4,48.8,5,97.2,47.3,5.7,218.5,35,147,80,58.8,22.7,69,83,"05.5",13.04,101.3,76,142.9,82.6,168,393.5  ],
        [988.5,233,439.5,316,84,139.6," ",234,276.9," ",106,80,212,178.6," ",166.6,81.4," "," ",121.1," "," "," "," ",147,80,59.1,23.1,75," ","10.1"," ",90.4,76.5," "," "," ",0  ],
        [999,238,438,323,96,139.8,93,214,297.6,66,106,78,213,208.7,105,172.9,78,48.9,4,145,64.9,5.4,234.7,33,142,86,58.2,22.4,79,83,"12.4",12.9,87.9,67.9,154.3,87,182.2,423.5  ],
        [1009.5,239,446.5,324,94,139.3," ",215,297.6," ",105,74,213,203.9," ",159.8,78," "," ",136.5," "," "," "," ",142,86,62.2,22.4,78," ","07.4"," ",93.1,68.3," "," "," ",0  ],
        [1020,240,455,325,92,138.7,90,216,286.8,61,101,80,204,208.7,105,166.9,74.8,47.1,4,128,60.7,5.7,205.9,37,137,82,65.1,22.2,77,83,"07.2",12.75,101.4,85.9,163.1,91.7,192.2,447  ],
        [1011,243,442,326,96,129.2," ",203,277," ",99,86,204,218.4," ",170,74.8," "," ",125.4," "," "," "," ",137,82,65.9,23,74," ","11.8"," ",95.1,85.9," "," "," ",0  ],
        [1002,246,429,327,92,119.6,95,190,270.2,64,96,80,212,213.6,101,170.5,82.8,45.3,4,122.8,54.5,5.3,184.9,37,125,88,65.7,23.8,74,83,"07.0",12.43,83.3,82.8,149.4,89.3,171.9,410.6  ],
        [1003.5,234,441.5,328,98,128.7," ",196,266," ",84,80,212,210.7," ",170.8,82.8," "," ",130.3," "," "," "," ",125,88,64.7,24,70," ","14.4"," ",75.3,82.5," "," "," ",0  ],
        [1006,223,454,329,100,137.7,97,202,239.2,72,84,80,208,206.3,105,177.6,92.4,47.7,4,137.7,54.3,5,197.4,36,124,94,62.6,24.8,72,85,"08.3",12.7,71.7,74.4,146.3,94.1,175.2,415.6  ],
        [985.5,214,444.5,327,102,138.2," ",192,245," ",86,79,208,202.9," ",184.2,92.4," "," ",131," "," "," "," ",124,94,59.7,25,57," ","08.7"," ",68.1,54.2," "," "," ",0  ],
        [966,206,435,325,100,138.6,102,182,203.5,71,87,75,197,205.8,92,175,101.6,39.6,4,124.2,52.6,5.3,183.4,37,136,100,60.5,28.5,47,87,"14.6",13.6,65.3,48.2,111.9,89.5,166.9,368.3  ],
        [956.5,207,416.5,333,106,139.8," ",189,231.5," ",80,78,197,195.1," ",164.7,101.6," "," ",121.6," "," "," "," ",136,100,65.1,28.5,47," ","16.0"," ",50.2,48.3," "," "," ",0  ],
        [946,208,398,340,100,141,115,196,214.3,71,70,80,208,188.8,96,165.7,100.1,40.7,4,119,51.5,5.7,155.9,40,130,100,53,26.7,47,87,"16.2",13.9,52,50.7,111.6,74.2,164.4,350.2  ],
        [963,201,412,350,88,137.6," ",218,267.5," ",86,84,208,190.8," ",189.4,100.1," "," ",120.2," "," "," "," ",130,100,64.1,27.5,60," ","16.9"," ",52.9,50.5," "," "," ",0  ],
        [979,194,426,359,78,134.1,125,239,248,79,91,87,227,190.3,107.9,201.5,106.1,36.7,4,121.4,47.8,6,170.9,30,138,120,77.8,31,72,104,"16.8",15.3,47,50.5,128.6,90.2,172.5,391.3  ],
        [973,193,425,355,114,122.1," ",235,263.2," ",95,89,227,196.1," ",219.7,106.1," "," ",128.8," "," "," "," ",138,120,69.3,31.8,75," ","17.1"," ",47.2,50.5," "," "," ",0  ],
        [967,192,424,351,118,110,165,230,266.9,73,98,90,212,204.9,101.8,213.9,85.2,48.5,4,136.2,69.9,5.9,148.9,31,134,120,71.4,32.1,78,107,"16.5",14.7,63,57.7,126.5,71.4,170.6,368.5  ],
        [975,208,417,350,128,110.8," ",227,271.4," ",89,82,212,199.5," ",206.9,85.2," "," ",137.3," "," "," "," ",134,120,69.9,33.6,82," ","16.0"," ",63,57.6," "," "," ",0  ],
        [943,224,410,309,132,111.5,174,223,251.3,61,79,81,128,191.3,92.4,203.6,84.7,55.9,4,138.3,63.4,5.3,181.9,32,163,98,66.6,34.7,85,109,"15.9",13.4,78,66,146.8,64.7,152.3,363.8  ],
        [954.5,225,421.5,308,136,120.9," ",225,267," ",82,72,128,213.1," ",204.5,84.7," "," ",136.2," "," "," "," ",163,98,64.3,33,88," ","15.9"," ",78,65.8," "," "," ",0  ],
        [967,227,433,307,132,130.3,168,227,255.6,58,83,63,140,210.7,87.7,188.4,85.9,46.2,4,134.1,59.7,4.7,122.2,40,150,98,61.4,32.4,91,105,"15.9",12.1,96,79.8,155.9,66.3,148.3,370.5  ],
        [977,225,432,320,134,128.7," ",206,280.6," ",75,64,140,202.4," ",196.2,85.9," "," ",132.5," "," "," "," ",150,98,54.7,29.4,88," ","15.1"," ",95.3,88," "," "," ",0  ],
        [987,224,431,332,132,127,164,185,264.7,51,67,65,165,204.3,92.8,193.5,81,42.6,4,130.8,60.2,3.9,148.8,35,148,94,53.4,27.3,84,90,"07.6",10.2,91.5,80.9,149.8,82.3,155,387.1  ],
        [987,222,433,332,130,129.1," ",171,249.9," ",62,58,165,205.8," ",190.7,81," "," ",121.1," "," "," "," ",148,94,49.3,25.1,80," ","07.3"," ",75.5,80.8," "," "," ",0  ],
        [988,221,435,332,128,131.1,164,157,206.2,45,57,55,182,185.4,84,193.5,66.3,39.5,10,111.4,46.2,3.7,140,27,126,98,46.3,23.8,76,85,"07.2",9.1,73.5,76.4,136.9,75.2,142.7,354.8  ]
    ];

    let states =['lagos','akangba', 'ikeja', 'ajah', 'egbin','olorunsogo','sakete','kaduna','kano','yola',
                'jos', 'gombe', 'ayede', 'osogbo', 'ganmo', 'benin', 'delta', 'asaba','galaxy', 'alaoji',
                'uyo', 'afam','port','adiabor','onitsha','haven', 'makurdi', 'gazaoua', 'kebbi','niamey',
                'jebba','kainji', 'shiroro', 'ajaokuta', 'katampe','gwagwalada','apo', 'abuja' ];
    



    hours.forEach( (hour,index) =>{
        tableRow += `<tr data-row="${hour}">
        <td>
            <div> ${hour}</div>
        </td>
        <td>
            <div data-state="lagos" data-id="lagos-${hour}"> ${datas[index][0]} </div>
        </td>
        <td>
            <div class="view active" data-state="akangba" data-id="lagos-lg-${hour}"> ${datas[index][1]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="ikeja" data-id="lagos-lg-${hour}"> ${datas[index][2]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="ajah" data-id="lagos-lg-${hour}"> ${datas[index][3]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="egbin" data-eval="sum"> ${datas[index][4]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="olorunsogo" data-eval="sum"> ${datas[index][5]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="sakete" data-eval="sum"> ${datas[index][6]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="kaduna" data-eval="sum"> ${datas[index][7]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="kano" data-eval="sum"> ${datas[index][8]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="yola" data-eval="sum"> ${datas[index][9]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="jos" data-eval="sum"> ${datas[index][10]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="gombe" data-eval="sum"> ${datas[index][11]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="ayede" data-eval="sum"> ${datas[index][12]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="osogbo" data-eval="sum"> ${datas[index][13]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="ganmo" data-eval="sum"> ${datas[index][14]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="benin" data-eval="sum"> ${datas[index][15]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="delta" data-eval="sum"> ${datas[index][16]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="asaba" data-eval="sum"> ${datas[index][17]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="galaxy" data-eval="sum"> ${datas[index][18]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="alaoji" data-eval="sum"> ${datas[index][19]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="uyo" data-eval="sum"> ${datas[index][20]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="afam" data-eval="sum"> ${datas[index][21]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="port" data-eval="sum"> ${datas[index][22]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="adiabor" data-eval="sum"> ${datas[index][23]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="onitsha" data-eval="sum"> ${datas[index][24]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="haven" data-eval="sum"> ${datas[index][25]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="makurdi" data-eval="sum"> ${datas[index][26]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active"data-state="gazaoua" data-eval="sum"> ${datas[index][27]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="kebbi" data-eval="sum"> ${datas[index][28]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="niamey" data-eval="sum"> ${datas[index][29]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="jebba" data-eval="sum"> ${datas[index][30]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="kainji" data-eval="sum"> ${datas[index][31]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="shiroro" data-eval="sum"> ${datas[index][32]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="ajaokuta" data-eval="sum"> ${datas[index][33]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="katampe" data-id="abuja-lg-${hour}"> ${datas[index][34]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="gwagwalada" data-id="abuja-lg-${hour}"> ${datas[index][35]} </div>
            <input class="edit" />
        </td>
        <td>
            <div class="view active" data-state="apo" data-id="abuja-lg-${hour}"> ${datas[index][36]} </div>
            <input class="edit" />
        </td>
        <td>
            <div data-state="abuja" data-id="abuja-${hour}" data-eval="sum"> ${datas[index][37]} </div>
        </td>
        <th>
            <div>${hour}</div> 
        </th>
        <th>
            <div data-total="total-${hour}">3936.9</div> 
        </th>
    </tr>`
    });

    
tableBody.insertAdjacentHTML('afterbegin', tableRow);


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
                let cells = tableRow.querySelectorAll(`[data-eval="sum"]`);
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


    states.forEach((state, index) =>{
  

        let stateValue = document.querySelectorAll(`[data-state=${state}]`);

        let values =[];

        if(stateValue){
            stateValue.forEach( el => {
                if(el.textContent.trim() != ''){
                    values.push(parseFloat(el.textContent.trim()));
                }
            })
        }


        maxValue(values, state);
        minValue(values, state);

        

    });

    function maxValue(val, state){
        let stateMax = document.querySelector(`[data-id=max-${state}]`);
        let stateMaxTime = document.querySelector(`[data-id=maxTime-${state}]`);

        let max = Math.max(...val);
        let maxTime = hours[val.indexOf(max)];

        stateMax.textContent = max;
        stateMaxTime.textContent = maxTime;
        

    }


    function minValue( val, state){
        let stateMin = document.querySelector(`[data-id=min-${state}]`);
        let stateMinTime = document.querySelector(`[data-id=minTime-${state}]`);

        let min =  Math.min(...val);
        let minTime = hours[val.indexOf(min)];

        stateMin.textContent = min;
        stateMinTime.textContent = minTime;
    }

});