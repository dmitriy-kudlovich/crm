export default class EditView {
  constructor(data) {
    this.fillForm(data);
  }

  elements = {
    number: document.querySelector("#number"),
    date: document.querySelector("#date"),
    product: document.querySelector("#product"),
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    phone: document.querySelector("#phone"),
    status: document.querySelector("#status"),
    btnSave: document.querySelector("#btnSave"),
    btnRemove: document.querySelector("#btnRemove"),
  };

  getUrlParam() {
    let params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  fillForm(data) {
    let user = data.find((elem) => {
      return elem.id == this.getUrlParam();
    });

    this.elements.number.textContent = user.id;
    this.elements.date.textContent = user.date;
    this.elements.product.value = user.product;
    this.elements.name.value = user.name;
    this.elements.email.value = user.email;
    this.elements.phone.value = user.phone;
    this.elements.status.value = user.status;
  }

  getFormData() {
    if (
      this.elements.name.value == "" ||
      this.elements.phone.value == "" ||
      this.elements.email.value == ""
    ) {
      alert("Please, fill the form");
      return false;
    }

    if (!this.validatePhone(this.elements.phone.value)) {
      alert("Please, enter correct phone number");
      return false;
    }

    if (!this.validateEmail(this.elements.email.value)) {
      alert("Please, enter correct email");
      return false;
    }

    return {
      product: this.elements.product.value,
      name: this.elements.name.value,
      email: this.elements.email.value,
      phone: this.elements.phone.value,
      status: this.elements.status.value,
    };
  }

  validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  validatePhone(phone) {
    let arr = phone.split("");

    if (arr[0] == "+" || Number(arr[0])) {
      for (let i = 1; i < arr.length; i++) {
        if (!Number(arr[i])) {
          console.log(arr[i]);
          return false;
        }
      }
    } else {
      return false;
    }

    return true;
  }
}
