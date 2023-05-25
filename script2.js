function factorialize(num) {
    if (Number.isInteger(num) && num >= 0) {
      let result = num;
      if (num === 0 || num === 1) {
        return 1;
      }
      while (num > 1) {
        num--;
        result *= num;
      }
      console.log(`Voici le factoriel de ${numberSelect} = ${result}`);
      return result;
    } else {
      console.log("Veuillez saisir un nombre entier positif.");
      return null;
    }
  }
  
  let numberSelect = parseInt(prompt('Choisissez un nombre à factoriser :'), 10);
  let result = factorialize(numberSelect);
  
  if (result !== null) {
    document.getElementById('factoriel').innerHTML += `Voici le factoriel de ${numberSelect} = ${result}`;
  } else {
    document.getElementById('factoriel').innerHTML += `Veuillez entrer un nombre entier positif`;
  }