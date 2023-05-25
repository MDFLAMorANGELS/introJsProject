function pyramide(num) {
    if (Number.isInteger(num) && num >= 1) {
        var pyramideId = document.getElementById('pyramide');
        let diez = "#";
        let space = " ";
        let i = 1;
        while (i <= num && num <= 50){
            let decale = num - i
            console.log(`${space.repeat(decale)}${diez.repeat(i)}`)
            pyramideId.innerHTML += `<pre>${space.repeat(decale)}${diez.repeat(i)}<br></pre>`
            i++
        }
    } else {
        console.log("Veuillez saisir un nombre entier positif.");
        return null;
      }
}

let numberSelect = parseInt(prompt('Choisissez un nombre d étage dans la pyramide :'), 10);
let result = pyramide(numberSelect)

if (result === null) {
    document.getElementById('pyramide').innerHTML += `Veuillez saisir un nombre entier positif.`;
  }