import FormView from "./form.view.js";

const view = new FormView();

function SetRandomData(name, tel, email, product) {
  this.name = name;
  this.tel = tel;
  this.email = email;
  this.product = product;
}

let dataArr = [
  new SetRandomData(
    "Pavel Durov",
    "84564561232",
    "abc@gmail.com",
    "course-html"
  ),
  new SetRandomData(
    "Leonid Kanevskiy",
    "89123875641",
    "kanevskiy@mail.ru",
    "course-js"
  ),
  new SetRandomData(
    "Leman Russ",
    "89564782315",
    "russ@rambler.ru",
    "course-vue"
  ),
  new SetRandomData(
    "Rogal Dorn",
    "84563217856",
    "dorn@icloud.com",
    "course-wordpress"
  ),
  new SetRandomData(
    "Lion El'Johnson",
    "89512367564",
    "Johnson@icloud.com",
    "course-php"
  ),
];

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomData() {
  return dataArr[getRandomNumber(dataArr.length)];
}

export default function fillForm() {
  let data = getRandomData();

  view.elements.inputName.value = data.name;
  view.elements.inputPhone.value = data.tel;
  view.elements.inputEmail.value = data.email;
  view.elements.selectProduct.value = data.product;
}
