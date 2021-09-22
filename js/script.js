
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



// Dropdown

// const dropDown = document.querySelectorAll('.dropdownList');

// dropDown.forEach( el => {
//     el.addEventListener('click', (e) => {
//         let target = e.currentTarget;
//         let childDom = target.children[1];

//         childDom.innerHTML = ' ';

//         let templateString = `   <div class="z-50 bg-white absolute w-24 -left-4 top-6">
//                                     <ul class="list border rounded-lg text-xs font-medium">
//                                         <li class="p-2 border-b cursor-pointer"><a href="#"> Edit</a></li>
//                                         <li  class="p-2 border-b cursor-pointer"><a href="#"> View Region </a></li>
//                                         <li  class="p-2 border-b cursor-pointer"><a href="#"> View Discos </a></li>
//                                         <li  class="p-2 border-b cursor-pointer"><a href="#"> Change Status</a></li>
//                                         <li  class="p-2 cursor-pointer"><a href="#"> Audit Trail</a></li>
//                                     </ul> 
//                                 </div>`;

//     });
// });

});

function options(ele){
    
   
    if(ele.classList.contains('show-class')){
        const trOption = document.querySelector( '.tr-option-btn.show-class .tr-options');
        if(trOption){
            trOption.remove();
        }
    }else{
        let templateString = `<div class="tr-options z-50 bg-white absolute w-24 -left-4 top-6">
                            <ul class="list border rounded-lg text-xs font-medium">
                                <li class="p-2 border-b cursor-pointer"><a href="#"> Edit</a></li>
                                <li  class="p-2 border-b cursor-pointer"><a href="#"> View Region </a></li>
                                <li  class="p-2 border-b cursor-pointer"><a href="#"> View Discos </a></li>
                                <li  class="p-2 border-b cursor-pointer"><a href="#"> Change Status</a></li>
                                <li  class="p-2 cursor-pointer"><a href="#"> Audit Trail</a></li>
                            </ul> 
                        </div>`;
        ele.insertAdjacentHTML('beforebegin', templateString); 
        ele.classList.add('show-option'); 
    }

}


    
    
