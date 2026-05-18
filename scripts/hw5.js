import Employee from "./Employee.js";
import EmpTable from "./EmpTable.js";
import ExtendedDate from "./ExtendedDate.js";

const employee1 = new Employee("Іван", "Петренко", "Менеджер", 25000);

const employee2 = new Employee("Олена", "Коваль", "Касир", 18000);

const employee3 = new Employee("Максим", "Шевченко", "Аналітик", 32000);

const employees = [employee1, employee2, employee3];

const emptTable = new EmpTable(employees);

document.body.innerHTML = emptTable.getHtml();

const extendedDate = new ExtendedDate("2024-05-25");
extendedDate.showDate(alert);
let res = extendedDate.checkDate();
alert(res);
extendedDate.leapYearCheck(alert);
let res2 = extendedDate.nextDate();
alert(res2.toDateString());
