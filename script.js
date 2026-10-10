// Datos de los miembros de BTS
const members = [
  { stageName: "RM", realName: "Kim Nam-joon", role: "Líder, Rapero Principal", initial: "RM" },
  { stageName: "Jin", realName: "Kim Seok-jin", role: "Vocalista, Visual", initial: "J" },
  { stageName: "SUGA", realName: "Min Yoon-gi", role: "Rapero Líder", initial: "SG" },
  { stageName: "J-Hope", realName: "Jung Ho-seok", role: "Bailarín Principal, Rapero", initial: "JH" },
  { stageName: "Jimin", realName: "Park Ji-min", role: "Bailarín Principal, Vocalista", initial: "JM" },
  { stageName: "V", realName: "Kim Tae-hyung", role: "Vocalista Líder, Visual", initial: "V" },
  { stageName: "Jung Kook", realName: "Jeon Jung-kook", role: "Vocalista Principal, Centro, Maknae", initial: "JK" }
];

// Colección de citas
const quotes = [
  { text: "I have come to love myself for who I am, for who I was, and for who I hope to become.", author: "RM" },
  { text: "Your presence can give happiness. I hope you remember that.", author: "Jin" },
  { text: "Never give up on a dream that you've been chasing almost your whole life.", author: "Jimin" },
  { text: "If you don't work hard, there won't be good result.", author: "J-Hope" },
  { text: "Life is tough, and things don't always work out well, but we should be brave and go on with our lives.", author: "SUGA" },
  { text: "Don't be trapped in someone else's dream.", author: "V" },
  { text: "Living without passion is like being dead.", author: "Jung Kook" }
];

// Función para renderizar los miembros en la interfaz
function renderMembers() {
  const container = document.getElementById("members-container");
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <div class="member-avatar">${member.initial}</div>
      <h3>${member.stageName}</h3>
      <p class="role">${member.role}</p>
      <p class="real-name">${member.realName}</p>
    `;

    container.appendChild(card);
  });
}

// Función para cambiar la frase de forma aleatoria
function changeQuote() {
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  quoteText.textContent = `"${selectedQuote.text}"`;
  quoteAuthor.textContent = `- ${selectedQuote.author}`;
}

// Inicialización de eventos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderMembers();

  const quoteButton = document.getElementById("btn-quote");
  quoteButton.addEventListener("click", changeQuote);
});
