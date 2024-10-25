let allQuotes = []; 

fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50")
  .then(response => response.json())
  .then(data => {
    allQuotes = data; 
    displayQuotes(allQuotes); 
  })
  .catch(error => console.error('Error fetching data:', error));

function displayQuotes(quotes) {
  let container = document.getElementById('cardContainer');
  container.innerHTML = '';
  quotes.forEach(item => {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.character}">
      <h3>${item.character}</h3>
      <p>"${item.quote}"</p>
    `;
    container.appendChild(card);
  });
}

function filterQuotes() {
  const input = document.getElementById('searchInput').value.toLowerCase(); 
  const filteredQuotes = allQuotes.filter(item =>
    item.character.toLowerCase().includes(input) 
  );

  displayQuotes(filteredQuotes); 
}
