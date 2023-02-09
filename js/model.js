export default class Model {
  constructor() {
    this.crmData = {
      products: {
        "course-html": "Курс по верстке",
        "course-js": "Курс по JavaScript",
        "course-vue": "Курс по VUE JS",
        "course-php": "Курс по PHP",
        "course-wordpress": "Курс по WordPress",
      },
      users: this.getFromLocalStorage(),
    };
  }

  addItem(data) {
    let newUser = {
      date: new Date().toLocaleDateString(),
      id: this.generateID(),
      ...data,
      status: "new",
    };
    this.crmData.users.push(newUser);
    this.setToLocalStorage(this.crmData.users);
  }

  setToLocalStorage(data) {
    localStorage.setItem("request", JSON.stringify(data));
  }

  getFromLocalStorage() {
    let item = localStorage.getItem("request");

    if (item) {
      return JSON.parse(item);
    } else {
      return [];
    }
  }

  generateID() {
    let ids = this.crmData.users.map((elem) => {
      return elem.id;
    });

    if (ids.length == 0) {
      return 0;
    }

    return ids[ids.length - 1] + 1;
  }
}
