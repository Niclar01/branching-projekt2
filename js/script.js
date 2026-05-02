
const heroBtn = document.querySelector(".btn-hero"); //"Test dig selv her"-knappen
const main = document.querySelector("main"); //Området hvor scenerne vises

heroBtn.addEventListener("click", showStartScreen); //Når knappen klikkes vises start skærmen

//Start skærmen laves
function showStartScreen() {

    const section = document.createElement("section"); //laver en ny sektion

    const h2 = document.createElement("h2"); //laver en ny overskrift
    h2.textContent = "Har du styr på dine adgangskoder?"; //den nye overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Find ud af det her"; //den nye tekst
    section.append(p);

    const btn = document.createElement("button"); //laver en ny knap
    btn.textContent = "Start"; //den nye tekst på knap
    section.append(btn);

    main.innerHTML = ""; //Fjerner alt fra main
    main.append(section); //sætter den nye skærm ind

    btn.addEventListener("click", function () { //når start klikkes føres man til spgs. 1
        showQuestion1();
    });
}

//funktion til spørgsmål 1
function showQuestion1() {

    const section = document.createElement("section"); //laver ny sektion

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Din nye uddannelse beder dig om at oprette en adgangskode til skolens hjemmeside."; //den nye overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Hvad gør du?"; //den nye tekst
    section.append(p);

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A: Jeg opretter en ny adgangskode som jeg har brugt før, så den er nem at huske."; //den nye tekst til knap
    section.append(btnA);

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B: Jeg lader computeren generere en stærk adgangskode for mig."; //den nye tekst til knap
    section.append(btnB);

    btnA.addEventListener("click", function () { //knap A går til spørgsmål 2
    showQuestion2();
    });

    btnB.addEventListener("click", function () { //knap B går til spørgsmål 2
    showQuestion2();
    });

    main.innerHTML = ""; //fjerner alt fra main
    main.append(section);
}

//Spørgsmål 2
function showQuestion2() {

    const section = document.createElement("section"); //laver ny sektion

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Du vil gerne gemme din nye kode, så du hurtigt og nemt kan logge ind næste gang."; //den nye overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Hvad gør du?"; //den nye tekst
    section.append(p);

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A"; //den nye tekst til knap
    section.append(btnA);

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B"; //den nye tekst til knap
    section.append(btnB);

    btnA.addEventListener("click", function () { //knap A går til spørgsmål 3
        showQuestion3();
    });

    btnB.addEventListener("click", function () { //knap B går til spørgsmål 3
        showQuestion3();
    });

    main.innerHTML = ""; //fjerner alt fra main
    main.append(section);
}

//Spørgsmål 3
function showQuestion3() {

    const section = document.createElement("section"); //laver en ny sektion

    const h2 = document.createElement("h2"); //laver en ny overskrift
    h2.textContent = "Spørgsmål 3"; //den nye overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver en ny paragraf
    p.textContent = "Hvad gør du?"; //den nye tekst
    section.append(p);

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A (3)"; //tekst til ny knap
    section.append(btnA);

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B (3)"; //tekst til ny knap
    section.append(btnB);

    btnA.addEventListener("click", function () {  //knap A går til resultat A
        showResultA();
    });

    btnB.addEventListener("click", function () { //knap B går til resultat B
        showResultB();
    });

    main.innerHTML = "";
    main.append(section);
}

//Resultat A
function showResultA() {

    const section = document.createElement("section"); //laver ny sektion

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Resultat A"; //ny tekst til overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Beskrivelse"; //ny tekst
    section.append(p);

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "Start forfra"; //ny tekst til knap
    section.append(btn);

    main.innerHTML = "";
    main.append(section);

    btn.addEventListener("click", function () { //knap fører til start skærm
        showStartScreen();
    });
}

//Resultat B
function showResultB() {

    const section = document.createElement("section"); //laver ny sektion

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Resultat B"; //ny tekst til overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Beskrivelse"; //ny tekst
    section.append(p);

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "Start forfra"; //ny tekst til knap
    section.append(btn);

    main.innerHTML = "";
    main.append(section);

    btn.addEventListener("click", function () { //knap fører til start skærm
        showStartScreen();
    });
}
/*const heroBtn = document.querySelector(".btn-hero");
const main = document.querySelector("main");

heroBtn.addEventListener("click", function () {
    showStartScreen();
});

function showStartScreen() { //start skærm

    const section = document.createElement("section");
    section.classList.add("stage");

    const h2 = document.createElement("h2");
    h2.textContent = "Klar til testen?";
    section.append(h2);


    main.replaceChildren(section);

}

// Funktion, der skal opdatere UI
const updateUI = (h2Text, pText, btnsText, imgPath) => {
    const section = document.createElement("section"); //laver en ny sektion
    section.classList.add("stage"); 
    section.classList.add("active");

    const h2 = document.createElement("h2"); //tilføjer en overskrift
    h2.textContent = h2Text;
    section.append(h2);

    if(imgPath != undefined) { //tilføjer billede hvis der er et
        const img = document.createElement("img");
        img.src = imgPath;
        section.append(img);
    }

    const p = document.createElement("p"); //tilføjer tekst
    p.textContent = pText;
    section.append(p);

    btnsText.forEach(text => { //laver knapper
        const button = document.createElement("button"); //lav en knap
        button.textContent = text; //giv den en tekst
        button.addEventListener("click", nextStage); //gør den klikbar
        section.append(button);
    });

    // Sæt ny section ind i main
    main.replaceChildren(section);
}

// Funktion, der skal finde frem til, hvad der skal vises
const nextStage = (e) => { //kører når knappen klikkes
    console.log(e.target.textContent);
    let h2Text, pText, btnsText, imgPath;
    switch(e.target.textContent) { //kigger på hvad der står på knappen fx. "start", "option 1" osv.
        case "Start": //hvis du klikker star sker følgende:
            h2Text = "Spørgsmål 1"; // skifter overskrift til Stage 1
            pText = "Hvad gør du?"; //skifter tekst til dette
            btnsText = ["A (1)", "B (1)"]; //nye knapper med disse navne
        break;

        case "A (1)": //hvis Option 1 knap klikkes sker følgende:
            h2Text = "Spørgsmål 2"; //"Stage1 ændre til Option 1"
            pText = "Hvad gør du?"; //ændres til denne tekst
            btnsText = ["A (2)", "B (2)"]; //får en start forfra knap
        break;

        case "B (1)":
            h2Text = "Spørgsmål 2";
            pText = "Hvad gør du?";
            btnsText = ["A (2)", "B (2)"];
        break;

        case "A (2)":
            h2Text = "Spørgsmål 3";
            pText = "Hvad gør du?";
            btnsText = ["A (3)", "B (3)"];
        break;

        case "B (2)":
            h2Text = "Spørgsmål 3";
            pText = "Hvad gør du?";
            btnsText = ["A (3)", "B (3)"];
        break;

        case "A (3)":
            h2Text = "Resultat A";
            pText = "Beskrivelse";
            btnsText = ["Start forfra"];
        break;

        case "B (3)":
            h2Text = "Resultat B";
            pText = "Beskrivelse";
            btnsText = ["Start forfra"];
        break;
        default: console.log("Error");
    }

    updateUI(h2Text, pText, btnsText, imgPath); //bygger den nye scene baseret på ens valg
}
*/