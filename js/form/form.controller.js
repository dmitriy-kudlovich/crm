import Model from "../model.js";
import FormView from "./form.view.js";
import fillForm from "./form.test-data.js";

const model = new Model();
const formView = new FormView();

fillForm();

formView.elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  fillForm();

  let data = formView.getData();

  if (data) {
    model.addItem(data);
  }
  console.log(model);
});
