//Elements
const envelope = document.getElementById("envelopeContainer")
const letter = document.getElementById("letterContainer")
const noBtn = document.querySelector(".NoBtn")
const yesBtn = document.querySelector(".btn[alt='Yes']")

const title = document.getElementById("letterTitle")
const catImg = document.getElementById("letterCat")
const buttons = document.getElementById("letterButtons")
const finalText = document.getElementById("finalText")

//Click envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none"
    letter.style.display = "flex"

    setTimeout( () => {
        document.querySelector(".letterWindow").classList.add("open")
    }, 50)
})

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


//Logic to make YES btn to grow
/*
let yesScale = 1

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center"
yesBtn.style.transition = "transform 0.3s ease"

noBtn.addEventListener("click", () => {
    yesScale += 2
    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed"
        yesBtn.style.top = "50%"
        yesBtn.style.left = "50%"
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`
    } else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`
    }
})
*/

//Yes is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!"

    catImg.src = "./Assets/cat_dance.gif"

    document.querySelector(".letterWindow").classList.add("final")

    buttons.style.display = "none"

    finalText.style.display = "block"
})