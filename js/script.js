
const heroBtn = document.querySelector(".btn-hero"); //"Test dig selv her"-knappen
const main = document.querySelector("main"); //Området hvor scenerne vises


//Hjælpe funktion som samler koden i stedet for gentagelser
function createStage(className) {
    const section = document.createElement("section");
    section.classList.add("stage", className);

    main.innerHTML = "";
    main.append(section);

    return section;
}

//Start skærmen laves
function showStartScreen() {

    const section = document.createElement("section"); //laver en ny sektion
    section.classList.add("stage", "start-stage"); //giver 2 classes til sektionen så de kan styles

    const h2 = document.createElement("h2"); //laver en ny overskrift
    h2.textContent = "Har du styr på dine adgangskoder?"; //den nye overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Find ud af det her 👇🏼"; //den nye tekst
    section.append(p);

    const btn = document.createElement("button"); //laver en ny knap
    btn.textContent = "START"; //den nye tekst på knap
    section.append(btn);

    main.innerHTML = ""; //Fjerner alt fra main
    main.append(section); //sætter den nye skærm ind

    btn.addEventListener("click", function () { //når start klikkes føres man til spgs. 1
        showQuestion1();
    });
}

//Spørgsmål 1
function showQuestion1() {

    const section = createStage("spørgsmål-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Du er startet på din nye uddannelse og bliver bedt om at lave en ny adgangskode."; //den nye overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Hvad gør du? 🤔"; //den nye tekst
    section.append(p);

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A: Jeg opretter en ny adgangskode som jeg har brugt før, så den er nem at huske."; //den nye tekst til knap
    section.append(btnA);

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B: Jeg lader computeren generere en stærk og unik adgangskode for mig."; //den nye tekst til knap
    section.append(btnB);

    btnA.addEventListener("click", function () { //knap A går til Feedback A
    showFeedbackA();
    });

    btnB.addEventListener("click", function () { //knap B går til Feedback B
    showFeedbackB();
    });

}

//Feedback A
function showFeedbackA() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Pas på her! 👀"; //den nye overskrift
    section.append(h2);

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Når du vælger en tidligere kode har du større chance for at blive hacket. prøv så vidt det er muligt at oprette en mere sikker kode."; //den nye tekst
    textBox.append(p);
    section.append(textBox);

    const btnNext = document.createElement("button"); //laver en ny knap
    btnNext.textContent = "Næste"; //den nye tekst til knap
    section.append(btnNext);

    btnNext.addEventListener("click", function () { //knap "Næste" går til spørgsmål 1A
    showQuestion1A();
    });

}

//Feedback B
function showFeedbackB() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Klogt valg! 🤩"; //den nye overskrift
    section.append(h2);

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Med en unik kode er det sværere at gætte for en potentiel hacker. På den måde kan du sikre dine andre profiler, selv hvis en hacker skulle få adgang på ét af stederne."; //den nye tekst
    textBox.append(p);
    section.append(textBox);

    const btnNext = document.createElement("button"); //laver en ny knap
    btnNext.textContent = "Næste"; //den nye tekst til knap
    section.append(btnNext);

    btnNext.addEventListener("click", function () { //knap "Næste" går til spørgsmål 1B
    showQuestion1B();
    });

}

//Spørgsmål 1A
function showQuestion1A() {

    const section = createStage("spørgsmål-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Din kode er blevet lækket og hackeren har fået adgang til flere af dine platforme med samme kode."; //den nye overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Hvad gør du? 🤔"; //den nye tekst
    section.append(p);

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A: Jeg skifter begge adgangskoder men denne gang til noget nyt og forskellige koder."; //den nye tekst til knap
    section.append(btnA);

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B: Jeg skifter begge koder men til den samme kode."; //den nye tekst til knap
    section.append(btnB);

    btnA.addEventListener("click", function () { //knap A går til resultat R1
        showResult1();
    });

    btnB.addEventListener("click", function () { //knap B går til resultat R2
        showResult2();
    });

}

//Spørgsmål 1B
function showQuestion1B() {

    const section = createStage("spørgsmål-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Du vil gerne gemme din nye kode, så du hurtigt og nemt kan logge ind næste gang."; //den nye overskrift
    section.append(h2);

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Hvad gør du? 🤔"; //den nye tekst
    section.append(p);

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A: Jeg skriver den ned i noter på min computer eller på en lap papir under mit tastatur."; //den nye tekst til knap
    section.append(btnA);

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B: Jeg bruger en password-manager."; //den nye tekst til knap
    section.append(btnB);

    btnA.addEventListener("click", function () { //knap A går til Resultat 3
        showResult3();
    });

    btnB.addEventListener("click", function () { //knap B går til Resultat 4
        showResult4();
    });

}

//Resultat 1
function showResult1() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Smart valg! 🤩"; //ny tekst til overskrift
    section.append(h2);

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const p1 = document.createElement("p");
    p1.textContent = "Hvis du får besked om at dine adgangskoder er blevet misbrugt, er det rigtig vigtigt at du reagerer med det samme.";

    const p2 = document.createElement("p");
    p2.textContent = "Sørg for at ændre dine adgangskoder begge steder.";

    const p3 = document.createElement("p");
    p3.textContent = "Tip - Genbruger du flere af dine koder, så gå dem igennem med det samme og skift dem til noget forskelligt.";

    textBox.append(p1, p2, p3);
    section.append(textBox);

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "Start forfra"; //ny tekst til knap
    section.append(btn);

    btn.addEventListener("click", function () { //knap fører til start skærm
        showStartScreen();
    });
}

//Resultat 2
function showResult2() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Du leger med ilden her 😳"; //ny tekst til overskrift
    section.append(h2);

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const p1 = document.createElement("p");
    p1.textContent = "Selvom du skifter begge dine koder, vil der stadig være en høj risiko for nemmere adgang nælste gang, hvis en hacker gætter den ene kode.";

    const p2 = document.createElement("p");
    p2.textContent = "Tænk over hvor vigtigt det er for dig at bevare den data som din adgangskode beskytter.";

    const p3 = document.createElement("p");
    p3.textContent = "Tip - Vælg noget unikt og forskelligt, med både bogstaver, tal, store/små bogstaver og specialtegn.";

    textBox.append(p1, p2, p3);
    section.append(textBox);

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "Start forfra"; //ny tekst til knap
    section.append(btn);

    btn.addEventListener("click", function () { //knap fører til start skærm
        showStartScreen();
    });
}

//Resultat 3
function showResult3() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Uhh.. Er du nu sikker på at det er en god idé? 😬"; //ny tekst til overskrift
    section.append(h2);

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const p1 = document.createElement("p");
    p1.textContent = "Når du skriver dine koder manuelt ned enten digitalt eller fysisk, øger du risikoen for at det ender i de forkerte hænder.";

    const p2 = document.createElement("p");
    p2.textContent = "Tænk over hvor vigtigt det er for dig at bevare den data som din adgangskode beskytter.";

    const p3 = document.createElement("p");
    p3.textContent = "Tip - Brug en password-manager som fx. BitWarden, der husker alle dine adgangskoder og opbevarer dem sikkert.";

    textBox.append(p1, p2, p3);
    section.append(textBox);

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "Start forfra"; //ny tekst til knap
    section.append(btn);

    btn.addEventListener("click", function () { //knap fører til start skærm
        showStartScreen();
    });
}

//Resultat 4
function showResult4() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Det sikre valg! ⭐️"; //ny tekst til overskrift
    section.append(h2);

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const p1 = document.createElement("p");
    p1.textContent = "Med en password-manager har du altid nem og sikker adgang til dine koder.";

    const p2 = document.createElement("p");
    p2.textContent = "Du slipper for at huske dem i hovedet eller at skulle skrive dem ned.";

    const p3 = document.createElement("p");
    p3.textContent = "Tip - Brug en password-manager som fx. BitWarden, der husker alle dine adgangskoder og opbevarer dem sikkert.";

    textBox.append(p1, p2, p3);
    section.append(textBox);

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "Start forfra"; //ny tekst til knap
    section.append(btn);

    btn.addEventListener("click", function () { //knap fører til start skærm
        showStartScreen();
    });
}

const burger = document.querySelector(".burger"); //Finder .burger knappen
const navLinks = document.querySelector(".nav-links"); //Finder .nav-links

burger.addEventListener("click", () => { //Når der klikkes på knappen sker der følgende:
    navLinks.classList.toggle("active"); //Skift til ".active" ved klik og fjerner ".active" ved klik igen
});

heroBtn.addEventListener("click", showStartScreen); //Når knappen klikkes vises start skærmen