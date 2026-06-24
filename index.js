const Kanji = ["日", "月", "火", "水", "木", "金", "土", "山", "川", "人"];
let index = 0;
const Card = document.querySelector(".card");
const Next = document.querySelector(".next");
const Prev = document.querySelector(".prev");

Next.addEventListener("click", function () {
  index++;
  if (index > 9) {
    index = 0;
  }
  Card.textContent = Kanji[index];
});

Prev.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = 9;
  }
  Card.textContent = Kanji[index];
});
