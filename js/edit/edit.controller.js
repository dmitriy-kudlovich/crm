import Model from "../model.js";
import EditView from "./edit.view.js";

const model = new Model();
const editView = new EditView(model.crmData.users);

editView.elements.btnSave.addEventListener("click", (e) => {
  e.preventDefault();

  let formData = editView.getFormData();
  let id = editView.getUrlParam();

  if (formData && confirm("Save changes?")) {
    model.changeData(id, formData);
    window.location.replace("./table.html");
  }
});

editView.elements.btnRemove.addEventListener("click", (e) => {
  e.preventDefault();

  let id = editView.getUrlParam();

  if (confirm("Remove this request?")) {
    model.removeItem(id);
    window.location.replace("./table.html");
  }
});

