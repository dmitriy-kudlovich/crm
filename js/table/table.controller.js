import Model from "../model.js";
import TableView from "./table.view.js";

const model = new Model();
const tableView = new TableView(model.crmData);

// Если не вызывать эти два метода в начале, то после смены курса в редакторе заявок позиция не отфильтруется по установленному фильтру
model.changeVisibility(
  model.crmData.users,
  tableView.elements.productSelect.value,
  tableView.getActiveStatus()
);
tableView.productFilter(model.crmData);
/*------------------------------------------ */

tableView.elements.productSelect.addEventListener("change", () => {
  model.changeVisibility(
    model.crmData.users,
    tableView.elements.productSelect.value,
    tableView.getActiveStatus()
  );

  tableView.productFilter(model.crmData);
});

tableView.elements.sideStatusBar.addEventListener("click", (e) => {
  if (e.target.dataset.value) {
    tableView.setActiveStatus(e.target);
  }

  model.changeVisibility(
    model.crmData.users,
    tableView.elements.productSelect.value,
    tableView.getActiveStatus()
  );

  tableView.productFilter(model.crmData);
});

tableView.elements.topStatusBar.addEventListener("click", (e) => {
  let sideStatusBar = tableView.elements.sideStatusBar;

  tableView.setActiveStatus(
    sideStatusBar.querySelector(`a[data-value='${e.target.dataset.value}']`)
  );

  model.changeVisibility(
    model.crmData.users,
    tableView.elements.productSelect.value,
    tableView.getActiveStatus()
  );

  tableView.productFilter(model.crmData);
});
