const mainBlock = document.getElementById("main-block");
mainBlock.style.display = "flex";
mainBlock.style.justifyContent = "center";
mainBlock.style.alignItems = "center";
mainBlock.style.height = "100vh";

const calendar = document.getElementById("calendar");

calendar.style.backgroundColor = "#e6e8f8";
calendar.style.height = "320px";
calendar.style.width = "325px";
calendar.style.padding = "20px";
calendar.style.borderRadius = "15px";

const inputs = document.querySelectorAll("input");
inputs[0].style.marginRight = "45px";
inputs.forEach((element) => {
  element.style.width = "85px";
});

const btn = document.getElementById("generate");
btn.style.width = "100%";
btn.style.marginTop = "10px";

const tabl = document.getElementById("tabl");
tabl.style.borderCollapse = "collapse";

const tablBody = document.getElementById("table-body");

const title = document.getElementById("date");

function generateCalendar(month, year) {
  let html = "";
  let date = new Date(year, month - 1, 1);
  title.innerText = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  console.log(date.toLocaleDateString("uk-UA"));
  console.log(date.getDay());
  let counter = 1;
  let day = (date.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month, 0).getDate();
  let i = 0;
  while (counter <= daysInMonth) {
    html += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < day) {
        html += "<th></th>";
      } else if (counter <= daysInMonth) {
        html += `<th>${counter}</th>`;
        counter++;
      } else {
        html += "<th></th>";
      }
    }
    html += "</tr>";
    i++;
  }
  tablBody.innerHTML = html;
  const cells = tabl.querySelectorAll("th");

  cells.forEach((cell) => {
    cell.style.border = "1px solid black";
    cell.style.padding = "6px";
  });
}

btn.addEventListener("click", () => {
  let month = inputs[0].value;
  let year = inputs[1].value;

  generateCalendar(month, year);
});

const cells = tabl.querySelectorAll("th");

cells.forEach((cell) => {
  cell.style.border = "1px solid black";
  cell.style.padding = "6px";
});
