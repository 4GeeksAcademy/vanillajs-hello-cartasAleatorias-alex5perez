window.onload = function() {
  //write your code here

  const valor = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const palos = ["♦", "♥", "♠", "♣"];

  const indexNumber = Math.floor(Math.random() * valor.length);
  const indexPalos = Math.floor(Math.random() * palos.length);

  const valorRandom = `${valor[indexNumber]}`;
  const palosRandom = `${palos[indexPalos]}`;

  document.getElementById("number").innerText = valorRandom;
  document.getElementById("top-card").innerText = palosRandom;
  document.getElementById("bottom-card").innerText = palosRandom;

  const topCard = document.getElementById("top-card");
  const bottomCard = document.getElementById("bottom-card");

  if (palosRandom === "♦" || palosRandom === "♥") {
    topCard.style.color = "red";
    bottomCard.style.color = "red";
  }
};

setTimeout(function() {
  window.location.reload();
}, 10000);
