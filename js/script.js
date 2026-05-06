
const heroBtn = document.querySelector(".btn-hero"); //"Test dig selv her"-knappen
const main = document.querySelector("main"); //Området hvor scenerne vises


//Hjælpe funktion som samler koden i stedet for gentagelser
function createStage(className) {
    const section = document.createElement("section");
    section.classList.add("stage", className);

    main.innerHTML = ""; //sletter alt i main så man kan opbygge noget nyt
    main.append(section); //Den nye section bliver vist i stedet

    return section;
}

//Start skærmen laves - FÆRDIG
function showStartScreen() {

    const section = createStage("start-stage"); //sletter det gamle, laver en ny section og viser den på siden

    const h2 = document.createElement("h2"); //laver en ny overskrift
    h2.textContent = "Har du styr på dine adgangskoder?"; //den nye overskrift

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Find ud af det her 👇🏼"; //den nye tekst

    const btn = document.createElement("button"); //laver en ny knap
    btn.textContent = "START"; //den nye tekst på knap

    section.append(h2, p, btn);

    btn.addEventListener("click", showQuestion1); //når start klikkes føres man til spgs. 1
}

//Spørgsmål 1 - FÆRDIG
function showQuestion1() {

    const section = createStage("spørgsmål-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Du er startet på din nye uddannelse og bliver bedt om at lave en ny adgangskode."; //den nye overskrift

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Hvad gør du? 🤔"; //den nye tekst

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A: Jeg opretter en ny adgangskode som jeg har brugt før, så den er nem at huske."; //den nye tekst til knap

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B: Jeg lader computeren generere en stærk og unik adgangskode for mig."; //den nye tekst til knap

    section.append(h2, p, btnA, btnB);

    btnA.addEventListener("click", showFeedbackA); //knap A går til Feedback A
    btnB.addEventListener("click", showFeedbackB); //knap B går til Feedback B
}

//Feedback A - FÆRDIG
function showFeedbackA() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Pas på her! 👀"; //den nye overskrift

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Når du vælger en adgangskode du har brugt før, har du større chance for at blive hacket eller få misbrugt din adgangskode. Prøv så vidt det er muligt at oprette en mere unik og sikker adgangskode."; //den nye tekst
    

    const btnNext = document.createElement("button"); //laver en ny knap
    btnNext.textContent = "Næste"; //den nye tekst til knap

    section.append(h2, textBox, btnNext);
    textBox.append(p);

    btnNext.addEventListener("click", showQuestion1A); //knap "Næste" går til spørgsmål 1A
}

//Feedback B - FÆRDIG
function showFeedbackB() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Klogt valg! 🤩"; //den nye overskrift

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Med en unik adgangskode er den sværere at gætte for en potentiel hacker. På den måde kan du sikre dine andre profiler, selv hvis en nogen skulle få adgang til en af dine andre profiler."; //den nye tekst

    const btnNext = document.createElement("button"); //laver en ny knap
    btnNext.textContent = "Næste"; //den nye tekst til knap

    section.append(h2, textBox, btnNext);
    textBox.append(p);

    btnNext.addEventListener("click", showQuestion1B);//knap "Næste" går til spørgsmål 1B
}

//Spørgsmål 1A - FÆRDIG
function showQuestion1A() {

    const section = createStage("spørgsmål-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Din kode er blevet lækket og hackeren har fået adgang til flere af dine platforme med samme kode."; //den nye overskrift

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Hvad gør du? 🤔"; //den nye tekst

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A: Jeg skifter begge adgangskoder, men denne gang til noget nyt og til to forskellige koder."; //den nye tekst til knap

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B: Jeg skifter begge adgangskoder men til det samme."; //den nye tekst til knap

    section.append(h2,p,btnA,btnB);

    btnA.addEventListener("click", showResult1); //knap A går til resultat R1
    btnB.addEventListener("click", showResult2);  //knap B går til resultat R2
}

//Spørgsmål 1B - FÆRDIG
function showQuestion1B() {

    const section = createStage("spørgsmål-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Du vil gerne gemme din nye kode, så du hurtigt og nemt kan logge ind næste gang."; //den nye overskrift

    const p = document.createElement("p"); //laver ny paragraf
    p.textContent = "Hvad gør du? 🤔"; //den nye tekst

    const btnA = document.createElement("button"); //laver en ny knap
    btnA.textContent = "A: Jeg skriver adgangskoden ned i noter på min computer eller på en lap papir under mit tastatur."; //den nye tekst til knap

    const btnB = document.createElement("button"); //laver en ny knap
    btnB.textContent = "B: Jeg bruger en password-manager."; //den nye tekst til knap

    section.append(h2,p,btnA,btnB);

    btnA.addEventListener("click", showResult3);  //knap A går til Resultat 3
    btnB.addEventListener("click", showResult4); //knap B går til Resultat 4
}

//Resultat 1 - FÆRDIG
function showResult1() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Smart valg! 🤩"; //ny tekst til overskrift

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const pText = [ //samler p elementerne
        "Hvis du får besked om at dine adgangskoder er blevet misbrugt, er det vigtigt at du reagerer med det samme.",
        "Sørg altid for at ændre dine adgangskoder begge steder.",
        "Tip: Genbruger du flere af dine koder, så gå dem igennem med det samme og skift dem til noget forskelligt."
    ];

    pText.forEach(function(text){  //For hver pText i listen gør dette...
        const p = document.createElement("p"); 
        p.textContent = text;
        textBox.append(p);
    });

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "START FORFRA"; //ny tekst til knap

    section.append(h2,textBox,btn);

    btn.addEventListener("click", showStartScreen); //knap fører til start skærm
}

//Resultat 2 - FÆRDIG
function showResult2() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Du leger med ilden her.. 😬"; //ny tekst til overskrift

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const pText = [ //samler p elementerne
        "Selvom du skifter begge dine koder, vil der stadig være en høj risiko for nemmere adgang næste gang, hvis nogen skulle gætte den ene kode.",
        "Tænk over hvor vigtigt det er for dig, at bevare den data som din adgangskode beskytter.",
        "Tip: Vælg noget unikt og forskelligt med både bogstaver, tal, store/små bogstaver og specialtegn."
    ];

    pText.forEach(function(text){ //For hver pText i listen gør dette...
        const p = document.createElement("p");
        p.textContent = text;
        textBox.append(p);
    });

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "START FORFRA"; //ny tekst til knap

    section.append(h2,textBox,btn);

    btn.addEventListener("click", showStartScreen); //knap fører til start skærm
}

//Resultat 3 - FÆRDIG
function showResult3() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Uhh.. Er du nu sikker på at det er en god idé? 🥴"; //ny tekst til overskrift

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const pText = [ //samler p elementerne
        "Når du skriver dine koder ned, enten digitalt eller fysisk, øger du risikoen for at det ender i de forkerte hænder.",
        "Selv hvis du bruger disse metoder, kan du nemt miste adgang til dine digitale noter. Måske rydder din kæreste op på skrivebordet og kommer til at smidde din seddel ud.",
        "Tip: Brug en password-manager som fx. BitWarden, der husker alle dine adgangskoder og opbevarer dem sikkert."
    ];

    pText.forEach(function(text){ //For hver pText i listen gør dette...
        const p = document.createElement("p");
        p.textContent = text;
        textBox.append(p);
    });

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "START FORFRA"; //ny tekst til knap

    section.append(h2,textBox,btn);

    btn.addEventListener("click", showStartScreen); //knap fører til start skærm
}

//Resultat 4 - FÆRDIG
function showResult4() {

    const section = createStage("resultat-stage"); // henter hjælpefunktionen fra toppen

    const h2 = document.createElement("h2"); //laver ny overskrift
    h2.textContent = "Det sikre valg! ⭐️"; //ny tekst til overskrift

    //Tekstboks
    const textBox = document.createElement("div"); //laver ny div
    textBox.classList.add("text-box"); //tilføjer class "text-box"

    const pText = [ //samler p elementerne
        "Med en password-manager har du altid nem og sikker adgang til dine adgangskoder.",
        "Du slipper for at huske dem i hovedet eller at skulle skrive dem ned.",
        "Tip: Prøv en open-source password-manager som fx. BitWarden. Her gemmes alle dine adgangskoder og andre følsomme oplysninger, i et krypteret digitalt pengeskab."
    ];

    pText.forEach(function(text){ //For hver pText i listen gør dette...
        const p = document.createElement("p");
        p.textContent = text;
        textBox.append(p);
    });

    const btn = document.createElement("button"); //laver ny knap
    btn.textContent = "START FORFRA"; //ny tekst til knap

    section.append(h2,textBox,btn);

    btn.addEventListener("click", showStartScreen); //knap fører til start skærm
}

const burger = document.querySelector(".burger"); //Finder .burger knappen
const navLinks = document.querySelector(".nav-links"); //Finder .nav-links

burger.addEventListener("click", () => { //Når der klikkes på knappen sker der følgende:
    navLinks.classList.toggle("active"); //Skift til ".active" ved klik og fjerner ".active" ved klik igen
});

heroBtn.addEventListener("click", showStartScreen); //Når knappen klikkes vises start skærmen
