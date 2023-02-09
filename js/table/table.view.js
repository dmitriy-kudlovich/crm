export default class TableView {
  constructor(data) {
    this.addItem(data);
  }

  elements = {
    tbody: document.querySelector("#tbody"),
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
          <td>${users[i].tel}</td>
          <td>
            <div class="badge badge-pill badge-danger">Новый</div>
          </td>
          <td>
            <a href="edit.html">Редактировать</a>
          </td>
        </tr>`
        );
      }
    }
  }
}
