const menuItems = document.querySelectorAll("#menu li");

let selected = 0;

function updateMenu() {

    menuItems.forEach((item, index) => {

        if(index === selected){

            item.classList.add("selected");
            item.innerHTML = "► " + item.textContent.replace("► ","");

        }else{

            item.classList.remove("selected");
            item.innerHTML = item.textContent.replace("► ","");

        }

    });

}

updateMenu();

document.addEventListener("keydown", function(e){

    if(e.key === "ArrowDown"){

        selected++;

        if(selected >= menuItems.length){
            selected = 0;
        }

        updateMenu();

    }

    if(e.key === "ArrowUp"){

        selected--;

        if(selected < 0){
            selected = menuItems.length - 1;
        }

        updateMenu();

    }

    if(e.key === "Enter"){

        const option = menuItems[selected].textContent.trim();

        switch(option){

            case "► START":
            case "START":
                alert("START");
                break;

            case "OUR STORY":
                alert("OUR STORY");
                break;

            case "MEMORIES":
                alert("MEMORIES");
                break;

            case "LOVE LETTER":
                alert("LOVE LETTER");
                break;

           

            case "MUSIC":
                alert("MUSIC");
                break;

            case "SETTINGS":
                alert("SETTINGS");
                break;

            case "CREDITS":
                alert("CREDITS");
                break;

        }

    }

});
