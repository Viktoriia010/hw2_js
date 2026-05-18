class EmpTable {
  #employees = [];
  constructor(employees) {
    this.#employees = employees;
  }
  getHtml() {
    let html = "";
    html += `<thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Посада</th>
            <th>Зарплата</th>
          </tr>
        </thead>`;
    this.#employees.forEach((element) => {
      html += `<tr>`;
      html += `<td>${element.firstName}</td>`;
      html += `<td>${element.lastName}</td>`;
      html += `<td>${element.position}</td>`;
      html += `<td>${element.salary}</td>`;
      html += `</tr>`;
    });

    return `<table>${html}</table>`;
  }
}
export default EmpTable;
