class ExtendedDate extends Date {
  constructor(date) {
    super(date);
  }
  showDate(cl) {
    let day = this.getDate();
    let month = this.getMonth();
    switch (month) {
      case 0:
        month = "січня";
        break;
      case 1:
        month = "лютого";
        break;
      case 2:
        month = "березня";
        break;
      case 3:
        month = "квітня";
        break;
      case 4:
        month = "травня";
        break;
      case 5:
        month = "червня";
        break;
      case 6:
        month = "липня";
        break;
      case 7:
        month = "серпня";
        break;
      case 8:
        month = "вересня";
        break;
      case 9:
        month = "жовтня";
        break;
      case 10:
        month = "листопада";
        break;
      case 11:
        month = "грудня";
        break;

      default:
        month = "місяць не найдено";
        break;
    }
    cl(`${day} ${month}`);
  }
  checkDate() {
    let currentDate = new Date();
    if (currentDate > this) {
      return false;
    } else {
      return true;
    }
  }
  leapYearCheck(cl) {
    let year = this.getFullYear();
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      cl(`Високосний рік`);
    } else {
      cl(`Не високосний рік`);
    }
  }
  nextDate() {
    let currentDate = new Date();
    currentDate.setDate(this.getDate() + 1);
    return currentDate;
  }
}
export default ExtendedDate;
