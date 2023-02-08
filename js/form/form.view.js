export default class FormView {
  constructor() {}

  elements = {
    form: document.querySelector("#form"),
    inputName: document.querySelector("#name"),
    inputPhone: document.querySelector("#phone"),
    inputEmail: document.querySelector("#email"),
    selectProduct: document.querySelector("#product"),
  };

  getData() {
    if (
      this.elements.inputName.value == "" ||
      this.elements.inputPhone.value == "" ||
      this.elements.inputEmail.value == ""
    ) {
      alert("Please, fill the form");
      return false;
    }

    if (!this.validatePhone(this.elements.inputPhone.value)) {
      alert("Please, enter correct phone number");
      return false;
    }

    if (!this.validateEmail(this.elements.inputEmail.value)) {
      alert("Please, enter correct email");
      return false;
    }

    return {
      name: this.elements.inputName.value,
      tel: this.elements.inputPhone.value,
      email: this.elements.inputEmail.value,
      product:
        this.elements.selectProduct.options[
          this.elements.selectProduct.selectedIndex
        ].text,
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
          return false;
        }
      }
    }

    return true;
  }

  clearForm() {
    this.elements.inputName.value = "";
    this.elements.inputPhone.value = "";
    this.elements.inputEmail.value = "";
  }
}
