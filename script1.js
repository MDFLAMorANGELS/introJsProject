let firstName = "";

while (true) {
    letter = prompt('Tape ton prénom :');

    if (letter) {
        firstName += letter; //on rajoute la lettre saisie à la suite du mot
        console.log(`Bonjour ${firstName}`);        
        idBonjour = document.getElementById("bonjour")
        idBonjour.innerHTML += `Bonjour ${letter}`;
        break
    }
}
