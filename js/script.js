
    window.addEventListener('load', (e)=> {
        // Navigation Toggler
        const menu = document.querySelector('.dropdown');
        const navMenu = document.querySelector('.navMenu');
        const navCaret = document.querySelectorAll('.navIcon');

        // User Toggler
        const user = document.querySelector('.profile');
        const userMenu = document.querySelector('.userMenu');
        const userCaret = document.querySelectorAll('.userIcon');


        let toggler = function (el){
            el.classList.toggle('hidden');
        }

        let caretToggle = function(el){
            el.forEach( (el) => {
                el.classList.toggle('hidden');
            });
        }


        let addToggler = function(el, caret){
            if(!el.classList.contains('hidden')){
                el.classList.add('hidden');

                caretToggle(caret)
            }
        }

        menu.addEventListener('click', (e)=>{
            toggler(navMenu);
            caretToggle(navCaret);

            addToggler(userMenu, userCaret);
        });
        
        user.addEventListener('click', (e)=>{
            toggler(userMenu);
            caretToggle(userCaret);

            addToggler(navMenu, navCaret)
        });

        const trOptionBtns = document.querySelectorAll('.tr-option-btn');
        trOptionBtns.forEach(trOptionBtn => {
            trOptionBtn.addEventListener('click', function(btn){
                let ParentElement = trOptionBtn.closest('.details');
                toggleOption(btn.currentTarget, ParentElement);
            })
        });
        
});

function cleartrOptions(){
    const trOptions = document.querySelectorAll('.tr-options');
    trOptions.forEach(trOptionEle => trOptionEle.remove());
};

function toggleOption(ele, tableDom){
            
    cleartrOptions();

    let templateStringOne = `<div class="tr-options z-50 bg-white absolute w-24 -left-4 top-6">
                            <ul class="list border rounded-lg text-xs font-medium">
                                <li class="p-2 border-b cursor-pointer"><a href="#"> Edit</a></li>
                                <li  class="p-2 border-b cursor-pointer"><a href="#"> View Region </a></li>
                                <li  class="p-2 border-b cursor-pointer"><a href="#"> View Discos </a></li>
                                <li  class="p-2 border-b cursor-pointer"><a href="#"> Change Status</a></li>
                                <li  class="p-2 cursor-pointer"><a href="#"> Audit Trail</a></li>
                            </ul> 
                        </div>`;

    let templateStringTwo = `<div class="tr-options z-50 bg-white absolute w-24 -left-4 top-6">
                                <ul class="list border rounded-lg text-xs font-medium">
                                    <li class="p-2 border-b cursor-pointer"><a href="#"> Edit</a></li>
                                    <li  class="p-2 border-b cursor-pointer"><a href="#"> View Users </a></li>
                                    <li  class="p-2 border-b cursor-pointer"><a href="#"> Change Status </a></li>
                                </ul> 
                            </div>`;
    let templateStringThree = `<div class="tr-options z-50 bg-white absolute w-24 -left-4 top-6">
                                <ul class="list border rounded-lg text-xs font-medium">
                                    <li class="p-2 border-b cursor-pointer"><a href="#"> Download </a></li>
                                </ul> 
                            </div>`;
    
    if(ele.classList.contains('show-option')){
        ele.classList.remove('show-option'); 
        if(ele.nextSibling){
            ele.nextSibling.remove();
        }
    }else{
        if(tableDom.dataset.target === 'maxList'){
            ele.insertAdjacentHTML('afterend', templateStringOne); 
        }else if(tableDom.dataset.target === "miniList"){
            ele.insertAdjacentHTML('afterend', templateStringTwo); 
        }else if(tableDom.dataset.target === "archive"){
            ele.insertAdjacentHTML('afterend', templateStringThree); 
        }

        ele.classList.add('show-option'); 

        if(tableDom.scrollHeight > tableDom.clientHeight){
            ele.nextSibling.classList.replace('top-6', 'bottom-6')
        }
    }

   

}
