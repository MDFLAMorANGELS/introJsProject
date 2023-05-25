const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  // Est-ce que tous les livres ont été au moins empruntés une fois ?
  const allBooksRented = books.every(book => book.rented > 0);
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
  console.log(allBooksRented ? "Oui" : "Non");
  
  // Quel est le livre le plus emprunté ?
  const mostRentedBook = books.reduce((maxRentedBook, currentBook) => {
    return currentBook.rented > maxRentedBook.rented ? currentBook : maxRentedBook;
  });
  console.log("Le livre le plus emprunté :");
  console.log(mostRentedBook);
  
  // Quel est le livre le moins emprunté ?
  const leastRentedBook = books.reduce((minRentedBook, currentBook) => {
    return currentBook.rented < minRentedBook.rented ? currentBook : minRentedBook;
  });
  console.log("Le livre le moins emprunté :");
  console.log(leastRentedBook);
  
  // Trouve le livre avec l'ID: 873495
  const bookWithId873495 = books.find(book => book.id === 873495);
  console.log("Livre avec l'ID 873495 :");
  console.log(bookWithId873495);
  
  // Supprime le livre avec l'ID: 133712
  const updatedBooks = books.filter(book => book.id !== 133712);
  console.log("Liste des livres après suppression du livre avec l'ID 133712 :");
  console.log(updatedBooks);
  
  // Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
  const sortedBooks = updatedBooks.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  console.log("Livres triés par ordre alphabétique :");
  console.log(sortedBooks);