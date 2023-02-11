import Model from "../model.js";
import TableView from "./table.view.js";

const model = new Model();
const tableView = new TableView(model.crmData);

// tableView.elements.tbody.addEventListener("click", (e) => {
//   if (e.target.classList.contains("badge")) {
//     console.log(e.target);
//   }
// });
