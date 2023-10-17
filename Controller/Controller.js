import Model from "../Model/Model.js";
import UrlapView from "../View/UrlapView.js";
class Controller {
    constructor() {
        this.urlapModel = new Model();
        this.UrlapView = new UrlapView($(".urlap"), this.urlapModel.getLeiro());
    }
}
export default Controller;
