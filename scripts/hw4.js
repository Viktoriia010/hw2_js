import PrintMachine from "./PrintMachine.js";

const machine = new PrintMachine("50px", " #A2D2FF", "Impact");
machine.print("Hello");

import News from "./News.js";

const news = new News(
  "Новий запуск супутника",
  "Сьогодні успішно запустили новий супутник для дослідження космосу.",
  ["космос", "технології", "наука"],
  "2026-05-10",
);

news.print();

import NewsFeed from "./NewsFeed.js";

const news1 = new News(
  "Перша новина",
  "Сьогодні відбувся запуск проєкту",
  ["IT", "JS"],
  "2026-05-13",
);

const news2 = new News(
  "Друга новина",
  "Вийшло нове оновлення",
  ["update", "JS"],
  "2026-05-10",
);

const news3 = new News(
  "Третя новина",
  "Навчання триває",
  ["study", "IT"],
  "2026-05-01",
);

const feed = new NewsFeed([news1, news2]);
console.log("Кількість:", feed.newsCount);

feed.show();
feed.addNews(news3);

console.log("Кількість:", feed.newsCount);
feed.show();
feed.deleteNews(1);
console.log("Кількість:", feed.newsCount);
feed.show();

feed.sortByDate();
feed.show();
const result = feed.findByTag("JS");

console.log(result);
