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

                pageText.innerHTML = `
Vítej v LOVE BOY ❤️

<br><br>

Tahle retro konzole byla vytvořena jen pro jednu jedinou osobu.

<br><br>

Pro moji nejúžasnější holku Ramonu.

<br><br>

Doufám že se ti bude líbit ❤️
`;

            break;

            case "OUR STORY":

                pageText.textContent = "Sem později napíšeme celý náš příběh.";

            break;

            case "MEMORIES":

                pageText.textContent = "Tady budou naše nejhezčí společné vzpomínky.";

            break;

            case "LOVE LETTER":

                pageText.textContent = "Sem vložíme dlouhý dopis pro Ramonu.";

            break;

            case "CREDITS":

                pageText.innerHTML = `
Made with ❤️ by Patrik

<br><br>

Pro moji Ramonu.

`;

            break;

        }

    }

});

let progress = 0;

const boot = setInterval(()=>{

    progress += 5;

    if(loadingFill){
        loadingFill.style.width = progress + "%";
    }

    if(progress >= 100){

        clearInterval(boot);

        bootScreen.style.display = "none";
        menuScreen.style.display = "block";

    }

},120);
