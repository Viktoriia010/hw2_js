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

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 356 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const themeBtn = document.getElementById("white-button");

function applyTheme(theme) {
  document.body.classList.toggle("white", theme === "light");
  if (theme === "light") {
    g[1].classList.add("white-item-moon");
    g[0].classList.remove("white-item-sun");

    themeBtn.classList.add("white-btn-moon");
    themeBtn.classList.remove("white-btn-sun");
  } else {
    g[1].classList.remove("white-item-moon");
    g[0].classList.add("white-item-sun");

    themeBtn.classList.remove("white-btn-moon");
    themeBtn.classList.add("white-btn-sun");
  }

  setCookie("theme", theme);
}

const g = document.querySelectorAll("g");

themeBtn.addEventListener("click", () => {
  const current = getCookie("theme") || "dark";
  const newTheme = current === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

applyTheme(getCookie("theme") || "dark");

const language = {
  uk: {
    title: "Реєстраційна форма",
    desc: "Приклад сучасної HTML форми з різними елементами",
    name: "Ім'я",
    surname: "Прізвище",
    email: "Email",
    password: "Пароль",
    birthday: "Дата народження",
    phone: "Телефон",
    coun: "Країна",
    country: {
      uk: "Україна",
      pl: "Польща",
      ge: "Німеччина",
      usa: "США",
    },
    gen: "Стать",
    gender: {
      m: "Чоловік",
      w: "Жінка",
    },
    skil: "Ваші навички",

    range: "Рівень досвіду",
    file: "Завантажити файл",
    comments: "Коментар",
    agree: "Я погоджуюсь з умовами",
    submit: "Відправити",
    reset: "Очистити",
  },
  en: {
    title: "Registration form",
    desc: "Example of modern HTML form with different elements",
    name: "Name",
    surname: "Surname",
    email: "Email",
    password: "Password",
    birthday: "Birthday",
    phone: "Phone",
    coun: "Country",
    country: {
      uk: "Ukraine",
      pl: "Poland",
      ge: "Germany",
      usa: "United States",
    },
    gen: "Gender",
    gender: {
      m: "Male",
      w: "Female",
    },
    skil: "Your skills",

    range: "Experience level",
    file: "Upload file",
    comments: "Comment",
    agree: "I agree to the terms",
    submit: "Submit",
    reset: "Reset",
  },
};

const selectLang = document.getElementById("lang");
function applyLang(lang) {
  const t = language[lang];

  document.querySelector("h1").textContent = t.title;
  document.querySelectorAll("p")[1].textContent = t.desc;

  document.querySelectorAll("label")[0].textContent = t.name;
  document.querySelectorAll("label")[1].textContent = t.surname;
  document.querySelectorAll("label")[2].textContent = t.email;
  document.querySelectorAll("label")[3].textContent = t.password;
  document.querySelectorAll("label")[4].textContent = t.birthday;
  document.querySelectorAll("label")[5].textContent = t.phone;
  document.querySelectorAll("label")[6].textContent = t.coun;
  document.querySelectorAll("#mySelect option")[0].textContent = t.country.uk;
  document.querySelectorAll("#mySelect option")[1].textContent = t.country.pl;
  document.querySelectorAll("#mySelect option")[2].textContent = t.country.ge;
  document.querySelectorAll("#mySelect option")[3].textContent = t.country.usa;
  document.querySelectorAll("label")[7].textContent = t.gen;
  document.querySelectorAll(".radio-group label span")[0].textContent =
    t.gender.m;
  document.querySelectorAll(".radio-group label span")[1].textContent =
    t.gender.w;
  document.querySelectorAll("label")[10].textContent = t.skil;
  document.querySelectorAll("label")[15].textContent = t.range;
  document.querySelectorAll("label")[16].textContent = t.file;
  document.querySelectorAll("label")[17].textContent = t.comments;
  document.querySelector("#checkBoxContent").textContent = t.agree;
  document.querySelector(".submit-btn").textContent = t.submit;
  document.querySelector(".reset-btn").textContent = t.reset;

  setCookie("lang", lang);
}

selectLang.addEventListener("change", (e) => {
  applyLang(e.target.value);
});

applyLang(getCookie("lang") || "uk");
selectLang.value = getCookie("lang") || "uk";
