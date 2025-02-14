let selectByUser = document.querySelectorAll(".icons");
let userscore=document.querySelector(".user p ")
user=0;
let boatScore=document.querySelector(".boat p ")
boat=0;
let reset=document.querySelector(".reset")
let message=document.querySelector(".messageContainer")
let won=document.querySelector(".won")
let lost=document.querySelector(".lost")
function computerChoice() {
    let option = ["bat", "ball", "wicket"]
    let index = Math.floor(Math.random() * 3)
    return option[index]
}

function game(userChoice) {
    console.log("USER CHOISE =", userChoice)
    let comp = computerChoice()
    console.log("COMPUTER CHOICE =", comp)
    determineWinner(userChoice, comp)
}
function determineWinner(userChoice, comp) {
    if (userChoice === comp) {
        console.log("OH! DEAR IT's A TIE")
        message.classList.remove("hide")
        won.classList.add("hide")
        lost.classList.add("hide")
    }
    else if ((userChoice === "bat" && comp === "ball") ||
        (userChoice === "ball" && comp === "wicket") ||
        (userChoice === "wicket" && comp === "bat")) {
        console.log("YOU WIN THIS TIME")
        userscore.innerText=user+=1
        message.classList.add("hide")
        won.classList.remove("hide")
        lost.classList.add("hide")
    }
    else {
        console.log("YOU LOOSE THIS TIME")
        boatScore.innerText=boat+=1
        message.classList.add("hide")
        won.classList.add("hide")
        lost.classList.remove("hide")
    }
}

selectByUser.forEach((val) => {
    val.addEventListener("click", () => {
        let userChoice = val.getAttribute("id");
        game(userChoice)
    })
})
reset.addEventListener("click",()=>{
    userscore.innerText=0
    boatScore.innerText=0
    message.classList.add("hide")
    won.classList.add("hide")
    lost.classList.add("hide")

})
