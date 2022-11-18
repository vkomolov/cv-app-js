import Component from "../../components/Component/Component";
import "./App.scss";
import { getAndStore } from "../../utils/services/userService"

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

/**@description: hiding the method from being visible when enumerating the object`s properties...
 * As a rule the methods are kept in the prototype, when creating with 'new'...
 * As 'App' is the special, bundling 'new' object, which is constructed by the general 'Component',
 * I decided not to overload the general constructor with some special methods, addressed directly to 'App', and not
 * to add additional class for the single object 'App'... so, I attached this method directly to the object 'App',
 * but hided from being enumerated in the list with other properties...
 * **/

Object.defineProperty(App, 'getAndRenderData', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (dataPath) {   //writing to the Prototype
        getAndStore(dataPath)
            .then(data => {
                this.data = data;
                return this.data;
            }).then(data => {
            this.appendKids(AsideBar.render(data), ContentBar.render(data));
        })
            .catch(e => {
                console.error(e);
                console.log(error.stack);
            })
    }
});

export default App;

///////////////// dev
function log(it, comments = "value: ") {
    console.log(comments, it);
}