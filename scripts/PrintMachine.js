class PrintMachine {
  #font_size;
  #font_color;
  #font_family;
  constructor(font_size, font_color, font_family) {
    this.#font_color = font_color;
    this.#font_family = font_family;
    this.#font_size = font_size;
  }
  print(text) {
    let el = document.getElementById("text");
    el.innerText = text;
    el.style.fontFamily = this.#font_family;
    el.style.fontSize = this.#font_size;
    el.style.color = this.#font_color;
  }
}
export default PrintMachine;
