const Kanji = [
  { kanji: "日", meaning: "Day" },
  { kanji: "月", meaning: "Month" },
  { kanji: "火", meaning: "fire" },
  { kanji: "水", meaning: "water" },
  { kanji: "木", meaning: "tree" },
  { kanji: "金", meaning: "gold" },
  { kanji: "土", meaning: "land" },
  { kanji: "山", meaning: "mountain" },
  { kanji: "川", meaning: "river" },
  { kanji: "人", meaning: "person" },
];
let index = 0;
const Card = document.querySelector(".card");
const Next = document.querySelector(".next");
const Prev = document.querySelector(".prev");

Next.addEventListener("click", function () {
  index++;
  if (index > 9) {
    index = 0;
  }
  Card.textContent = Kanji[index].kanji;
});

Prev.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = 9;
  }
  Card.textContent = Kanji[index].kanji;
});
