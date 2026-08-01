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

                pageText.innerHTML = `
Všechno začalo po škole.

<br><br>

Sebral jsem odvahu a vzal si tvoje číslo. Potom jsem ti napsal první zprávu. Tehdy jsem ještě netušil, že právě tím začne ten nejkrásnější příběh mého života.

<br><br>

Od 7. 8. 2025 jsme spolu a od té doby jsi tou nejdůležitější součástí mého života.

<br><br>

Nevím, kdy přesně jsme si poprvé řekli „Miluju tě“, ale vím, že už od prvního dne jsem cítil, že jsi pro mě výjimečná.

<br><br>

Tohle je teprve začátek našeho společného příběhu. ❤️
`;

            break;

            case "MEMORIES":

                pageText.innerHTML = `
❤️ 7. 8. 2025
Náš první den spolu.

<br><br>

📱 První zpráva.

<br>

Když jsem ti napsal po škole.

<br><br>

🤍 Každé obejmutí.

<br><br>

😂 Každý společný smích.

<br><br>

✨ A hlavně každá chvíle, kterou můžu strávit s tebou.
`;

            break;

            case "LOVE LETTER":

    pageText.innerHTML = `
<h3>❤️ LOVE LETTER ❤️</h3>

<p><b>Page 1 / 5</b></p>

<br>

Ahoj moje nejmilovanejsi laskooo ❤️

<br><br>

Jestli tohle prave ctes tak jsem moc rad ze se mi povedlo dokoncit tuhle malou retro konzoli jen pro tebe.

<br><br>

Nechtel jsem ti dat obycejny darek. Chtel jsem vytvorit neco co ti vzdy pripomene jak moc pro me znamenas a jak moc te miluju.

<br><br>

Kazdy radek teto konzole jsem delal s laskou a myslel jsem u toho jen na tebe. Doufam ze az ji projdes celou tak budes mit usmev na tvari.

<br><br>

Tohle je jen zacatek jednoho dlouheho dopisu.

<br><br>

❤️ Pokracovani priste...
`;

break;

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
