const btns = document.querySelectorAll(".stage .btn");
const stages = document.querySelectorAll(".stage");
const main = document.querySelector("main"); // forælder til .stage

// Funktion, der skal opdatere UI
const updateUI = (h2Text, pText, btnsText, imgPath, faClasses) => {
    const section = document.createElement("section");
    section.classList.add("stage");
    section.classList.add("active");

    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    section.append(h2);

    if(faClasses != undefined) {
        const icon = document.createElement("i");
        faClasses.forEach(faClass => {
            icon.classList.add(faClass);
        });
        section.append(icon);
    }

    if(imgPath != undefined) {
        const img = document.createElement("img");
        img.src = imgPath;
        section.append(img);
    }

    const p = document.createElement("p");
    p.textContent = pText;
    section.append(p);

    btnsText.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", nextStage);
        section.append(button);
    });

    // Sæt ny section ind i main
    main.replaceChildren(section);
}

// Funktion, der skal finde frem til, hvad der skal vises
const nextStage = (e) => {
    console.log(e.target.textContent);
    let h2Text, pText, btnsText, imgPath, faClasses;
    switch(e.target.textContent) {
        case "Start": 
            h2Text = "Stage 1";
            pText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus itaque provident animi deleniti voluptatibus fugit neque corporis ipsum debitis, expedita explicabo nesciunt sed suscipit. Suscipit facere amet eligendi quis!";
            btnsText = ["Option 1", "Option 2", "Option 3"];
        break;
        case "Option 1":
            h2Text = "Option 1";
            pText = "Lorem Ipsum";
            btnsText = ["Start forfra"];
            faClasses = ["fa-solid", "fa-cat"];
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
    updateUI(h2Text, pText, btnsText, imgPath, faClasses);
}

for(const btn of btns) {
    btn.addEventListener("click", nextStage)
}