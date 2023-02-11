import Model from "../model.js";
import EditView from "./edit.view.js";

const model = new Model();
const editView = new EditView(model.crmData.users);

editView.elements.btnSave.addEventListener("click", (e) => {
  e.preventDefault();

  let formData = editView.getFormData();
  console.log(formData);
  let id = editView.getUrlParam();
  model.changeData(id, formData);
});

editView.elements.btnRemove.addEventListener("click", (e) => {
  e.preventDefault();

  let id = editView.getUrlParam();

  if (confirm("Remove this request?")) {
    model.removeItem(id);
  }
});
