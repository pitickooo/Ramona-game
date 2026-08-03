const menuItems = document.querySelectorAll("#menu li");

const menuScreen = document.getElementById("menuScreen");
const pageScreen = document.getElementById("pageScreen");

const pageTitle = document.getElementById("pageTitle");
const pageText = document.getElementById("pageText");

const bootScreen = document.getElementById("bootScreen");
const loadingFill = document.getElementById("loadingFill");

// Mobilní tlačítka
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");

menuScreen.style.display = "none";
pageScreen.style.display = "none";

let selected = 0;
let letterPage = 0;

const letterPages = [

`<h3>❤️ LOVE LETTER ❤️</h3>

<b>Page 1 / 5</b>

<br><br>

Ahoj moje nejmilovanejsi lasko ❤️

<br><br>

Jestli tohle prave ctes tak jsem moc rad ze se mi povedlo vytvorit tuhle malou retro konzoli jen pro tebe.

<br><br>

Nechtel jsem ti dat obycejny darek.

<br><br>

<b>Enter ➜</b>`,

`<h3>❤️ LOVE LETTER ❤️</h3>

<b>Page 2 / 5</b>

<br><br>

Chtel jsem vytvorit neco co ti vzdy pripomene jak moc te miluju.

<br><br>

Kazdy radek jsem delal s laskou.

<br><br>

<b>Enter ➜</b>`,

`<h3>❤️ LOVE LETTER ❤️</h3>

<b>Page 3 / 5</b>

<br><br>

Dekuju ti za kazdy usmev.

<br><br>

Dekuju ti za kazde obejmuti.

<br><br>

Dekuju ze jsi moje.

<br><br>

<b>Enter ➜</b>`,

`<h3>❤️ LOVE LETTER ❤️</h3>

<b>Page 4 / 5</b>

<br><br>

Kazdy den s tebou je pro me ten nejhezci.

<br><br>

Doufam ze spolu zazijeme jeste spoustu dalsich let.

<br><br>

<b>Enter ➜</b>`,

`<h3>❤️ LOVE LETTER ❤️</h3>

<b>Page 5 / 5</b>

<br><br>

Miluju te nejvic na svete.

<br><br>

Stastne prvni vyroci lasko ❤️

<br><br>

Tvuj Pataaa ❤️`

];

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
document.addEventListener("keydown", (e) => {

    // Když je otevřená stránka
    if (pageScreen.style.display === "block") {

        // LOVE LETTER - další stránka po Enter
        if (pageTitle.textContent === "LOVE LETTER" && e.key === "Enter") {

            letterPage++;

            if (letterPage < letterPages.length) {

                pageText.innerHTML = letterPages[letterPage];

            } else {

                pageScreen.style.display = "none";
                menuScreen.style.display = "block";
                letterPage = 0;

            }

            return;

        }

        // Zpět do menu
        if (e.key === "Backspace") {

            pageScreen.style.display = "none";
            menuScreen.style.display = "block";
            letterPage = 0;

            return;

        }

        return;

    }

    // Pokud není menu vidět
    if (menuScreen.style.display === "none") return;

    // Pohyb dolů
    if (e.key === "ArrowDown") {

        selected++;

        if (selected >= menuItems.length) {
            selected = 0;
        }

        updateMenu();

    }

    // Pohyb nahoru
    if (e.key === "ArrowUp") {

        selected--;

        if (selected < 0) {
            selected = menuItems.length - 1;
        }

        updateMenu();

    }

    // Otevření položky
    if (e.key === "Enter") {

        const option = menuItems[selected].textContent.replace("► ", "");

        menuScreen.style.display = "none";
        pageScreen.style.display = "block";

        pageTitle.textContent = option;

        switch (option) {

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

Sebral jsem odvahu a vzal si tvoje číslo. Potom jsem ti napsal první zprávu. Tehdy jsem ještě netušil že právě tím začne ten nejkrásnější příběh mého života.

<br><br>

Od 7. 8. 2025 jsme spolu a od té doby jsi tou nejdůležitější součástí mého života.

<br><br>

Nevím kdy přesně jsme si poprvé řekli Miluju tě ale vím že už od prvního dne jsem cítil že jsi pro mě výjimečná.

<br><br>

Tohle je teprve začátek našeho společného příběhu. ❤️
`;
                break;

            case "MEMORIES":

                pageText.innerHTML = `
❤️ 7. 8. 2025 - Náš první den spolu.

<br><br>

📱 První zpráva po škole.

<br><br>

🤍 Každé obejmutí.

<br><br>

😂 Každý společný smích.

<br><br>

✨ A hlavně každá chvíle kterou můžu strávit s tebou.
`;
                break;

            case "LOVE LETTER":

                letterPage = 0;
                pageText.innerHTML = letterPages[0];

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
// ===============================
// BOOT LOADING
// ===============================

let progress = 0;

const boot = setInterval(() => {

    progress += 5;

    if (loadingFill) {
        loadingFill.style.width = progress + "%";
    }

    if (progress >= 100) {

        clearInterval(boot);

        bootScreen.style.display = "none";
        menuScreen.style.display = "block";

    }

}, 120);

// ===============================
// MOBILNI OVLADANI
// ===============================

function pressKey(key) {

    document.dispatchEvent(
        new KeyboardEvent("keydown", {
            key: key
        })
    );

}

if (btnUp) {

    btnUp.addEventListener("click", () => {
        pressKey("ArrowUp");
    });

}

if (btnDown) {

    btnDown.addEventListener("click", () => {
        pressKey("ArrowDown");
    });

}

if (btnA) {

    btnA.addEventListener("click", () => {
        pressKey("Enter");
    });

}

if (btnB) {

    btnB.addEventListener("click", () => {
        pressKey("Backspace");
    });

}
