export default class TableView {
  constructor(data) {
    this.addItem(data);
    this.elements.productSelect.value = data.productFilter;
  }

  elements = {
    productSelect: document.querySelector("#productSelect"),
    topStatusBar: document.querySelector("#topStatusBar"),
    sideStatusBar: document.querySelector("#sideStatusBar"),
    tbody: document.querySelector("#tbody"),
  };

  statusBadges = {
    new: ["danger", "Новый"],
    inwork: ["warning", "В работе"],
    complete: ["success", "Завершена"],
  };

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
