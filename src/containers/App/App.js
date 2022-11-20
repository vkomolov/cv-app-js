import Component from "../../components/Component/Component";
import "./App.scss";
import { getAndStore } from "../../utils/services/userService"

/** components **/
import AsideBar from "../AsideBar/AsideBar";
import ContentBar from "../ContentBar/ContentBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.filter = null;     //will be overwritten by props 'filterOption'

        /**@description Array 'filterOption' is a list of possible 'filters' which can be chosen
         *
         * **/
        if ("filterOption" in props && Array.isArray(props["filterOption"])) {
            log('filterOption exists');
            this.filterOption = [...props.filterOption];
            this.filter = this.filterOption[0];
        } else {
            console.log('App has not found "filterOption" in given props to the constructor');
            throw new Error('App has not found "filterOption" in given props')
        }
    }

    /**@description making setter in order to callback on changing value, as on event...
     *'this.filter' initially has null value... so, if 'this.filter' == null, we can init
     * **/
    set (filter, value) {
        if (this.filterOption && this.filterOption.includes(filter)) {
            this[filter] = value;

            log('filter is changed on: ' + this.filter);
        } else {
            console.log(`the filter ${filter} is not in option...`);
            throw new Error(`the filter ${filter} is not in option...`);
        }
    }

    get (filter) {
        return this[filter];
    }

    /**@description:
     *
     *
     */
    getAndRenderData(dataPath) {
        getAndStore(dataPath)
            .then(data => {
                this.data = data;
                return this.data;
            }).then(data => {
            this.appendKids(AsideBar.render(data), ContentBar.render(data));
            });
    }
}

export default App;

///////////////// dev
function log(it, comments = "value: ") {
    console.log(comments, it);
}