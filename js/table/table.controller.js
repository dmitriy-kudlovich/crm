import Model from "../model.js";
import TableView from "./table.view.js";

const model = new Model();
const tableView = new TableView(...model.users);
