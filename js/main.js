let $ = document;
let navItems = $.querySelectorAll("li.nav-item");
let dropDrop = $.querySelectorAll("div.dd");
let closeModalBtn = $.querySelector(".close");
let containerModal = $.querySelector(".container-modal");
let openModalBtn = $.getElementById("open-modal");
let modalMenu = $.querySelector(".my-modal");
let colResize = $.querySelectorAll(".col-sec-two-js");
let size = window.innerWidth;
let colSecFive = $.querySelectorAll(".col-sec-five");
let helpCol = 0;
let helpCol2;
let rowClick = $.querySelectorAll(".row-click");
let helpRowClick;
let bool = false;



colSecFive.forEach(item => {
    item.addEventListener("click" , event => {
        event.preventDefault();

        let number = item.dataset.number;
        

        item.className += " active shadow";

        if(helpCol == 0){
            helpCol = 1;

            if(number != 0){
                colSecFive[0].classList.remove("active");
                colSecFive[0].classList.remove("shadow");

                rowClick[number].classList.remove("d-none");
                rowClick[0].classList.add("d-none");
            }

            helpCol2 = item;
            
            
            helpRowClick = number;
            
        } else if(helpCol != 0) {
            if(helpCol2 == item){
                bool = true;
            } else {
                bool = false;
            }

            if(!bool){
                helpCol2.classList.remove("active");
                helpCol2.classList.remove("shadow");
            }
            
            helpCol2 = item;
            
            if(number != helpRowClick){
                rowClick[number].classList.remove("d-none");
                rowClick[helpRowClick].classList.add("d-none");
    
                helpRowClick = number;
            }
        }
    })
})

window.addEventListener("resize" , () => {
    size = window.innerWidth;
    resizeFunc();
})

navItems.forEach((item) => {
    item.addEventListener("mouseover" , () => {
        let drop = item.lastElementChild;
        drop.classList.replace("d-none" , "d-block");
    })

    item.addEventListener("mouseout" , () => {
        let drop = item.lastElementChild;
        drop.classList.replace("d-block" , "d-none");
    })
})


dropDrop.forEach((item) => {
    item.addEventListener("mouseover" , () => {
        let drop = item.lastElementChild;
        drop.classList.replace("d-none" , "d-flex");
    })

    item.addEventListener("mouseout" , () => {
        let drop = item.lastElementChild;
        drop.classList.replace("d-flex" , "d-none");
    })
})


closeModalBtn.addEventListener("click" , () => {
    $.body.style.overflowY = "auto";
    modalMenu.style.left = "-400px";
    setTimeout(hiddenModal , 600);
})

openModalBtn.addEventListener("click" , () => {
    $.body.style.overflow = "hidden";
    containerModal.classList.replace("d-none" , "d-block");
    setTimeout(showModal , 0);
})




function showModal() {
    modalMenu.style.left = "0px";
}

function hiddenModal() {
    containerModal.classList.replace("d-block" , "d-none");
}

(function () {
    resizeFunc();
})();

function resizeFunc() {
    if(size < 500){
        colResize.forEach((item) => {
            item.classList.add("col-12");
        })

        colSecFive.forEach((item) => {
            item.classList.replace("col-10" , "col-11");
        })
    }

    if(size > 500){
        colResize.forEach((item) => {
            item.classList.remove("col-12");
        })

        colSecFive.forEach((item) => {
            item.classList.replace("col-11" , "col-10");
        })
    }
}

