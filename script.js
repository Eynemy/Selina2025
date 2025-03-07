const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const content = document.querySelector("#content");

const page1 = document.querySelector("#p1");
const page2 = document.querySelector("#p2");

// logic
let currentLocation = 1;
let numOfPageclass = 2;
let maxLocation = numOfPageclass + 1;

// listeners
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

// functions
function open(){
    if (window.matchMedia("(max-width: 576px)").matches) {
        content.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-90px)";
        nextBtn.style.transform = "translateX(90px)";
    }else{
    content.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
    }
}

function close(isAtBeginning){
    if(isAtBeginning){
        content.style.transform = "translateX(0%)";
    } else{
        content.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function next(){
    if (currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                open();
                page1.classList.add("flipped");
                page1.style.zIndex = 1;
                break;
            case 2:
                page2.classList.add("flipped");
                page2.style.zIndex = 2;
                close(false);
                break;
            default:
                throw new Error["uknown state"];
        }
        currentLocation++;
    }
}

function prev(){
    if (currentLocation > 1){
        switch(currentLocation){
            case 2:
                close(true);
                page1.classList.remove("flipped");
                page1.style.zIndex = 2;
                break;
            case 3:
                open();
                page2.classList.remove("flipped");
                page2.style.zIndex = 1;
                break;
            default:
                throw new Error["uknown state"];
        }
        currentLocation--;
    }
}