export default class TableView {
  constructor(data) {
    this.addItem(data);
    this.elements.productSelect.value = data.productFilter;
    this.setActiveStatus(
      sideStatusBar.querySelector(`a[data-value='${data.statusFilter}']`)
    );
    this.getNewRequestsAmount(data);
  }

  elements = {
    productSelect: document.querySelector("#productSelect"),
    topStatusBar: document.querySelector("#topStatusBar"),
    sideStatusBar: document.querySelector("#sideStatusBar"),
    tbody: document.querySelector("#tbody"),
    newRequestsBadge: document.querySelector("#badge-new"),
  };

  statusBadges = {
    new: ["danger", "Новый"],
    inwork: ["warning", "В работе"],
    complete: ["success", "Завершена"],
  };

  getNewRequestsAmount(data) {
    let newRequests = data.users.filter((elem) => {
      if (elem.status == "new") return true;
    });
    this.elements.newRequestsBadge.textContent = newRequests.length;

    if (newRequests.length == 0) {
      this.elements.newRequestsBadge.classList.add("none");
    } else {
      this.elements.newRequestsBadge.classList.remove("none");
    }
  }

  setActiveStatus(item) {
    let sideStatusBarItems = sideStatusBar.querySelectorAll("a");

    sideStatusBarItems.forEach((elem) => {
      elem.classList.remove("active");
    });
    item.classList.add("active");
  }

  getActiveStatus() {
    return sideStatusBar.querySelector(".active").dataset.value;
  }

  productFilter(data) {
    let tableRows = document.querySelectorAll("#tbody tr");
    tableRows.forEach((elem) => {
      elem.classList.remove("none");
    });

    data.users.forEach((elem, index) => {
      if (elem.visibility == "invisible") {
        tableRows[index].classList.add("none");
      }
    });
  }

  addItem(data) {
    let users = data.users;

    if (users.length > 0) {
      users.forEach((elem) => {
        this.elements.tbody.insertAdjacentHTML(
          "beforeend",
          `<tr>
          <th scope="row">${elem.id}</th>
          <td>${elem.date}</td>
          <td>${data.products[elem.product]}</td>
          <td>${elem.name}</td>
          <td>${elem.email}</td>
          <td>${elem.phone}</td>
          <td>
            <div class="badge badge-pill badge-${
              this.statusBadges[elem.status][0]
            }">${this.statusBadges[elem.status][1]}</div>
          </td>
          <td>
            <a href='edit.html?id=${elem.id}'>Редактировать</a>
          </td>
        </tr>`
        );
      });
    }
  }
}
