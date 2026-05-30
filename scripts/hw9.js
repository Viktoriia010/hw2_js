// 1) Ім'я, прізвища повинно бути без цифр і не меньше 2 літери
// не забудьте trim для space
// 2) Email
// 3) Пароль не меньше 5-ти символів, не повинен містити space
// 4) Дата народження повинна бути обрана
// 5) Телефон формата +380(9цифр)
// 6) Країна за замовчуванням засобами js поставьте Німмечина
// 7) Стать через js поставьте Чоловік
// 8) Навичок потрібно мінімум 2
// 9) Коментар від 10 до 150 символів
// 10) Я погоджуюсь обов'язково треба бути
// Якщо щось заповнено невірно надати помилковому елементу css клас .error (виділення червоним)
// Якщо все добре виведіть на сторінці повідомлення, що все заповнено вірно
// Створіть масив users і додавайте всіх створених правильно користувачів в цей масив
// Друкуйте його у консоль

const cl = console.log;
const form = document.forms.formcard;
const inputs = form.querySelectorAll("input, textarea, select");

document.getElementById("mySelect").value = "ge";
document.querySelector('input[name="gender"][value="m"]').checked = true;

const users = [];

document.querySelector('input[name="gender"][value="m"]').checked = true;

function validWithPattern(inp, pattern) {
  const value = inp.value.trim();
  if (!pattern.test(value)) {
    inp.classList.add("error");
    return false;
  } else {
    return true;
  }
}

function passwordValid(inp) {
  const value = inp.value.trim();
  if (value.includes(" ") || value.length < 5) {
    inp.classList.add("error");
    return false;
  } else {
    return true;
  }
}

function birthdayValid(inp) {
  const value = inp.value;
  if (value.length === 0) {
    inp.classList.add("error");
    return false;
  } else {
    return true;
  }
}

function validateCheckboxes(checkboxes) {
  const checkedCount = [...checkboxes].filter((cb) => cb.checked).length;
  const group = document.querySelector(".checkbox-group");
  if (checkedCount < 2) {
    group.classList.add("error");
    return false;
  } else {
    group.classList.remove("error");
    return true;
  }
}

function commentsValid(inp) {
  const value = inp.value.trim();
  if (value.length < 10 || value.length > 150) {
    inp.classList.add("error");
    return false;
  } else {
    return true;
  }
}

function agreeValid(inp) {
  if (!inp.checked) {
    inp.classList.add("error");
    return false;
  }
  return true;
}

inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.target.classList.remove("error");
  });
});

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    if (e.target.type === "text" && e.target.value.length < 2) {
      e.target.classList.add("error");
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name;
  const surname = form.surname;
  const email = form.email;
  const password = form.pwd;
  const birthday = form.date;
  const phone = form.phone;
  const checkboxes = document.querySelectorAll(
    '.checkbox-group input[type="checkbox"]',
  );

  const comments = document.getElementById("coment");
  const checkBox = document.getElementById("checkBox");
  const skills = [];

  checkboxes.forEach((cb) => {
    if (cb.checked) {
      skills.push(cb.value);
    }
  });

  if (
    validWithPattern(name, /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]{2,}$/) &&
    validWithPattern(surname, /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]{2,}$/) &&
    validWithPattern(
      email,
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    ) &&
    passwordValid(password) &&
    birthdayValid(birthday) &&
    validWithPattern(phone, /^\+380\d{9}$/) &&
    validateCheckboxes(checkboxes) &&
    commentsValid(comments) &&
    agreeValid(checkBox)
  ) {
    const user = {
      name: name.value.trim(),
      surname: surname.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      birthday: birthday.value,
      phone: phone.value.trim(),
      country: document.getElementById("mySelect").value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      comments: comments.value.trim(),
      skills: skills,
    };
    users.push(user);

    cl(user);
    cl(users);
    document.getElementById("message").textContent = "Все заповнено вірно!";
  } else {
    cl("Form invalid");
  }
});
