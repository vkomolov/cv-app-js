import Component from "../../components/Component/Component";
import "./App.scss";

/** components **/
import AsideBar from "../AsideBar/AsideBar";
import ContentBar from "../ContentBar/ContentBar";

/**@description
 * As App will be the only object, we do not need a class-factory which extends Component class...
 *
 * **/


const App = new Component({
    htmlTagName: "div",
    class: "totalWrapper",
    id: "app"
});

App.appendKids(AsideBar.getHTMLElem(), ContentBar.getHTMLElem());

log(App);

App.fetchData = function () {
    console.log('fetchData...');
};

export default App;









///////////////// dev
function log(it, comments = "value: ") {
    console.log(comments, it);
}