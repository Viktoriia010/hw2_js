// масив новин;
// get-властивість, яка повертає кількість новин;
// метод виведення на екран усіх новин;
// метод додавання новини;
// метод видалення новини;
// метод сортування новин за датою (від останніх новин до старих);
// метод пошуку новин за тегом (повертає масив новин, в яких вказано переданий тег у метод).

import News from "./News.js";

class NewsFeed {
  #news = [];
  constructor(news = []) {
    this.#news = news;
  }

  get newsCount() {
    return this.#news.length;
  }
  show() {
    this.#news.forEach((item) => item.print());
  }
  addNews(news) {
    this.#news.push(news);
  }
  deleteNews(index) {
    this.#news.splice(index, 1);
  }
  sortByDate() {
    this.#news.sort(
      (a, b) => new Date(b.publication_date) - new Date(a.publication_date),
    );
  }
  findByTag(tag) {
    return this.#news.filter((news) => news.tags.includes(tag));
  }
}
export default NewsFeed;
