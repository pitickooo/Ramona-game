const menuItems = document.querySelectorAll("#menu li");

const menuScreen = document.getElementById("menuScreen");
const pageScreen = document.getElementById("pageScreen");

const pageTitle = document.getElementById("pageTitle");
const pageText = document.getElementById("pageText");

const bootScreen = document.getElementById("bootScreen");
const loadingFill = document.getElementById("loadingFill");

menuScreen.style.display = "none";
pageScreen.style.display = "none";

let selected = 0;

function updateMenu(){

    menuItems.forEach((item,index)=>{

        item.classList.remove("selected");
        item.textContent = item.textContent.replace("► ","");

        if(index===selected){

            item.classList.add("selected");
            item.textContent = "► " + item.textContent;

        }

    });

}

updateMenu();

document.addEventListener("keydown",(e)=>{

    if(pageScreen.style.display==="block"){

        if(e.key==="Backspace"){

            pageScreen.style.display="none";
            menuScreen.style.display="block";

        }

        return;

    }

    if(menuScreen.style.display==="none") return;

    if(e.key==="ArrowDown"){

        selected++;

        if(selected>=menuItems.length){
            selected=0;
        }

        updateMenu();

    }

    if(e.key==="ArrowUp"){

        selected--;

        if(selected<0){
            selected=menuItems.length-1;
        }

        updateMenu();

    }

    if(e.key==="Enter"){

        const option = menuItems[selected].textContent.replace("► ","");

        menuScreen.style.display="none";
        pageScreen.style.display="block";

        pageTitle.textContent = option;

        switch(option){

            case "START":
                pageText.textContent = "Vítej v LOVE BOY ❤️";
            break;

            case "OUR STORY":
                pageText.textContent = "Sem později napíšeme celý náš příběh.";
            break;

            case "MEMORIES":
                pageText.textContent = "Tady budou naše nejhezčí vzpomínky.";
            break;

            case "LOVE LETTER":
                pageText.textContent = "Sem vložíme tvůj dopis pro Ramonu.";
            break;

            case "CREDITS":
                pageText.textContent = "Made with ❤️ by Patrik.";
            break;

        }

    }

});

let progress = 0;

const boot = setInterval(()=>{

    progress += 5;

    loadingFill.style.width = progress + "%";

    if(progress >= 100){

        clearInterval(boot);

        bootScreen.style.display = "none";
        menuScreen.style.display = "block";

    }

},120);
