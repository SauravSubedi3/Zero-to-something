const Kanji = document.querySelector(".kanji");
const Next = document.querySelector(".next");
const Prev = document.querySelector(".prev");
const FLIP = document.querySelector(".flip");
const meaning = document.querySelector(".meaning");
let index = 0;
const words = ["日曜日", "日本", "毎日"];
const card = [
  {
    kanji: "日",
    meaning: "Day",
    Onyoumi: "ニチ,ジツ",
    Kunyoumi: "ひ,び,か",
    Words: ["日曜日", "日本", "毎日"],
  },
  {
    kanji: "月",
    meaning: "Month",
    Onyoumi: "ゲツ,ガツ",
    Kunyoumi: "つき",
    Words: ["月曜日", "今月", "一月"],
  },
  {
    kanji: "火",
    meaning: "Fire",
    Onyoumi: "カ",
    Kunyoumi: "ひ",
    Words: ["火曜日", "花火", "火事"],
  },
  {
    kanji: "水",
    meaning: "Water",
    Onyoumi: "スイ",
    Kunyoumi: "みず",
    Words: ["水曜日", "水道", "水泳"],
  },
  {
    kanji: "木",
    meaning: "Tree",
    Onyoumi: "モク",
    Kunyoumi: "き",
    Words: ["木曜日", "木", "大木"],
  },
  {
    kanji: "金",
    meaning: "Gold",
    Onyoumi: "キン",
    Kunyoumi: "かね",
    Words: ["金曜日", "お金", "金魚"],
  },
  {
    kanji: "土",
    meaning: "Land",
    Onyoumi: "ド",
    Kunyoumi: "つち",
    Words: ["土曜日", "土地", "土"],
  },
  {
    kanji: "山",
    meaning: "Mountain",
    Onyoumi: "サン",
    Kunyoumi: "やま",
    Words: ["富士山", "山", "火山"],
  },
  {
    kanji: "川",
    meaning: "River",
    Onyoumi: "セン",
    Kunyoumi: "かわ",
    Words: ["川", "小川", "川岸"],
  },
  {
    kanji: "人",
    meaning: "Person",
    Onyoumi: "ジン,ニン",
    Kunyoumi: "ひと",
    Words: ["日本人", "人", "一人"],
  },
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
