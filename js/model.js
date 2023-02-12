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
      productFilter: this.getFilterFromLocalStorage(),
      statusFilter: this.getStatusFilterFromLocalStorage(),
      users: this.getFromLocalStorage(),
    };
  }

  addItem(data) {
    let newUser = {
      date: new Date().toLocaleDateString(),
      id: this.generateID(),
      ...data,
      status: "new",
      visibility: "visible",
    };
    this.crmData.users.push(newUser);
    this.setToLocalStorage(this.crmData.users);
  }

  removeItem(id) {
    let currentData = this.getFromLocalStorage();
    let index = currentData.findIndex((elem) => {
      return elem.id == id;
    });
    this.crmData.users.splice(index, 1);
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

  setFilterToLocalStorage(data) {
    localStorage.setItem("filter", JSON.stringify(data));
  }

  getFilterFromLocalStorage() {
    let item = localStorage.getItem("filter");
    if (item) {
      return JSON.parse(item);
    } else {
      return "all";
    }
  }

  setStatusFilterToLocalStorage(data) {
    localStorage.setItem("filterStatus", JSON.stringify(data));
  }

  getStatusFilterFromLocalStorage() {
    let item = localStorage.getItem("filterStatus");
    if (item) {
      return JSON.parse(item);
    } else {
      return "all";
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

  changeData(id, data) {
    let currentData = this.getFromLocalStorage();
    let index = currentData.findIndex((elem) => {
      return elem.id == id;
    });

    currentData[index].product = data.product;
    currentData[index].name = data.name;
    currentData[index].email = data.email;
    currentData[index].phone = data.phone;
    currentData[index].status = data.status;

    this.setToLocalStorage(currentData);
  }

  changeVisibility(data, product, status) {
    data.forEach((elem) => {
      elem.visibility = "visible";

      if (product == "all" && status == "all") {
        elem.visibility = "visible";
      } else if (product == "all" && status != "all") {
        if (elem.status != status) {
          elem.visibility = "invisible";
        }
      } else if (status == "all" && product != "all") {
        if (elem.product != product) {
          elem.visibility = "invisible";
        }
      } else if (status != "all" && product != "all") {
        if (elem.product != product || elem.status != status) {
          elem.visibility = "invisible";
        }
      }
    });
    this.setToLocalStorage(data);

    this.setFilterToLocalStorage(product);
    this.setStatusFilterToLocalStorage(status);
  }
}
