const car = {
  manufacturer: "Alex",
  model: "BMW",
  year: 1954,
  speed: 90,
  show: function () {
    console.log(
      `${this.manufacturer} ${this.model} ${this.year} ${this.speed}`,
    );
  },
  countTime: function (S) {
    let t = S / this.speed;
    let break1 = Math.floor(t / 4);
    if (t % 4 == 0) {
      break1--;
    }
    t += break1 * 1;
    return t;
  },
};

const printMachine = {
  font_size: 12,
  font_color: "black",
  font_family: "Arial",
  print: function (text) {
    alert(
      `${this.font_size} ${this.font_color} ${this.font_family}  -  ${text}`,
    );
  },
};

car.show();
let t = car.countTime(60);
console.log(t);

setTimeout(() => {
  printMachine.print("Hello");
}, 5000);
