class News {
  #title;
  #text;
  #tags = [];
  #publication_date;
  constructor(title, text, tags, publication_date) {
    this.#publication_date = new Date(publication_date);
    this.#tags = tags;
    this.#text = text;
    this.#title = title;
  }
  get publication_date() {
    return this.#publication_date;
  }
  get tags() {
    return this.#tags;
  }
  getFormattedDate() {
    const dateNow = new Date();
    const diffTime = dateNow - this.#publication_date;

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      return "сьогодні";
    } else if (diffDays < 7) {
      return `${diffDays} днів тому`;
    } else {
      const day = String(this.#publication_date.getDate()).padStart(2, "0");

      const month = String(this.#publication_date.getMonth() + 1).padStart(
        2,
        "0",
      );

      const year = this.#publication_date.getFullYear();

      return `${day}.${month}.${year}`;
    }
  }
  print() {
    let title2 = document.getElementById("title");
    if (title2) {
      title2.style.fontFamily = "Sans-serif";
      title2.innerText = this.#title;

      title2.style.fontFamily = "Sans-serif";
      title2.innerText = this.#title;

      let publication_date2 = document.getElementById("date");
      publication_date2.style.fontFamily = "Sans-serif";
      publication_date2.innerText = this.getFormattedDate();

      let text2 = document.getElementById("text2");
      text2.style.fontFamily = "Sans-serif";
      text2.innerText = this.#text;

      let tags2 = document.getElementById("tags");
      tags2.style.fontFamily = "Sans-serif";
      tags2.innerText = "#" + this.#tags.join(" #");
    }
  }
}
export default News;
