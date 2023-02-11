export default class EditView {
  constructor(data) {
    console.log(data);
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
    return {
      product: this.elements.product.value,
      name: this.elements.name.value,
      email: this.elements.email.value,
      phone: this.elements.phone.value,
      status: this.elements.status.value,
    };
  }
}
