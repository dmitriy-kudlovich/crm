export default class TableView {
  constructor(data) {
    this.addItem(data);
  }

  elements = {
    tbody: document.querySelector("#tbody"),
  };

  statusBadges = {
    new: ["danger", "Новый"],
    inwork: ["warning", "В работе"],
    complete: ["success", "Завершена"],
  };

  addItem(data) {
    let users = data.users;

    if (users.length > 0) {
      for (let i = 0; i < users.length; i++) {
        this.elements.tbody.insertAdjacentHTML(
          "beforeend",
          `<tr>
          <th scope="row">${users[i].id}</th>
          <td>${users[i].date}</td>
          <td>${data.products[users[i].product]}</td>
          <td>${users[i].name}</td>
          <td>${users[i].email}</td>
          <td>${users[i].phone}</td>
          <td>
            <div class="badge badge-pill badge-${
              this.statusBadges[users[i].status][0]
            }">${this.statusBadges[users[i].status][1]}</div>
          </td>
          <td>
            <a href='edit.html?id=${users[i].id}'>Редактировать</a>
          </td>
        </tr>`
        );
      }
    }
  }
}
