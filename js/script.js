
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
            el.forEach( (el, index) => {
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

    });