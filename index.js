const Kanji = document.querySelector(".kanji");
const Next = document.querySelector(".next");
const Prev = document.querySelector(".prev");
const FLIP = document.querySelector(".flip");
const meaning = document.querySelector(".meaning");
let index = 0;

const card = [
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
FLIP.addEventListener("click", function () {
  if (meaning.style.display === "flex") {
    meaning.style.display = "none";
  } else {
    meaning.style.display = "flex";
  }
});
Next.addEventListener("click", function () {
  index++;
  if (index > 9) {
    index = 0;
  }
  meaning.style.display = "none";
  Kanji.textContent = card[index].kanji;
  meaning.textContent = card[index].meaning;
});

Prev.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = 9;
  }
  meaning.style.display = "none";
  Kanji.textContent = card[index].kanji;
  meaning.textContent = card[index].meaning;
});
