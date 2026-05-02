const btns = document.querySelectorAll(".stage .btn"); //Find alle knapper
const stages = document.querySelectorAll(".stage"); //find alle sektioner
const main = document.querySelector("main"); // Find main (forælder til .stage)

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
            h2Text = "Stage 1"; // skifter overskrift til Stage 1
            pText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus itaque provident animi deleniti voluptatibus fugit neque corporis ipsum debitis, expedita explicabo nesciunt sed suscipit. Suscipit facere amet eligendi quis!"; //skifter tekst til dette
            btnsText = ["Option 1", "Option 2", "Option 3"]; //nye knapper med disse navne
        break;

        case "Option 1": //hvis Option 1 knap klikkes sker følgende:
            h2Text = "Option 1"; //"Stage1 ændre til Option 1"
            pText = "Lorem Ipsum"; //ændres til denne tekst
            btnsText = ["Start forfra"]; //får en start forfra knap
        break;

        case "Option 2":
            h2Text = "Option 2";
            pText = "Lorem Ipsum";
            btnsText = ["Start forfra"];
        break;

        case "Option 3":
            h2Text = "Option 3";
            pText = "Lorem Ipsum";
            btnsText = ["Start forfra"];
        break;

        case "Start forfra":
            h2Text = "Introduction";
            pText = "Lorem Ipsum";
            btnsText = ["Start"];
        break;
        default: console.log("Error");
    }

    updateUI(h2Text, pText, btnsText, imgPath); //bygger den nye scene baseret på ens valg
}

for(const btn of btns) { //gør knapper klibare
    btn.addEventListener("click", nextStage) //et klik betyder kør "nextStage"
}