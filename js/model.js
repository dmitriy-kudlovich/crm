export default class Model {
  constructor() {
    this.users = [];
    this.getFromLocalStorage();
  }

  addItem(data) {
    let newUser = {
      date: this.getDate(),
      id: this.generateID(),
      userName: data.name,
      tel: data.tel,
      email: data.email,
      product: data.product,
      status: "new",
    };

    this.users.push(newUser);
    this.setToLocalStorage(this.users);
    this.generateID();
  }

  setToLocalStorage(data) {
    localStorage.setItem("request", JSON.stringify(data));
  }

  getFromLocalStorage() {
    let item = localStorage.getItem("request");

    if (item) {
      this.users = JSON.parse(item);
    }
  }

  generateID() {
    let ids = this.users.map((elem) => {
      return elem.id;
    });

    if (ids.length == 0) {
      return 0;
    }

    return ids[ids.length - 1] + 1;
  }

  getDate() {
    let date = new Date();
    let day =
      String(date.getDate()).length < 2
        ? "0" + String(date.getDate())
        : String(date.getDate());
    let month =
      String(date.getMonth()).length < 2
        ? "0" + String(date.getMonth())
        : String(date.getMonth());

    return `${day}.${month}.${date.getFullYear()}`;
  }
}