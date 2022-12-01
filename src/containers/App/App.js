'use strict';
import Component from "../../components/Component/Component";

import "./App.scss";
import { getAndStore } from "../../utils/services/userService";

/** components **/
import AsideBar from "../AsideBar/AsideBar";
import ContentBar from "../ContentBar/ContentBar";

class App extends Component {
    constructor(props) {
        super(props);
        this._filter = null;     //will be overwritten by props 'filterOption'
        this._data = null;       //will be overwritten by this.getAndRenderData
        this._kids = [
            AsideBar,
            ContentBar
        ];

        /**TODO: to decide, should the containers start before the data is fetched...
         * TODO: error status
         * */
        //appending children...
        this.append(...this._kids);

        /**@description Array 'filterOption' is a list of possible 'filters' which can be chosen
         *
         * **/
        if ("filterOption" in props && Array.isArray(props["filterOption"])) {
            this.filterOption = [...props.filterOption];
            this._filter = this.filterOption[0];     //avoiding setter 'filter'
        }
        else {
            console.error('App has not found "filterOption" in given props to the constructor');
            this.dispatchError(new Error('App has not found "filterOption" in given props'));
        }
    }
///////////////// END OF CONSTRUCTOR /////////////////

    prepareData(data) {
        return {
            data,
            filterActive: this._filter,
            setFilter: this.setFilter,
            dispatchError: this.dispatchError,
        };
    }

/**@description setFilter uses 'setter' and will be sent as the callback to the children **/
    setFilter (value) {
        this.filter = value;    //switching to the setter (set filter()), not this._filter directly...
    }

    get filter () {
        return this._filter;
    }

    /**@description making setter in order to callback on changing value, as on event...
     *
     * **/
    set filter (value) {
        if (this.filterOption && this.filterOption.includes(value)) {
            this._filter = value;

            //on changing filter to rewrite components with the new data
            if (this._data) {
                /** using the method of the children '.renderData(data) **/
                this._kids.forEach(component => component.renderData(this.prepareData(this._data)));
            }
        } else {
            console.error(`the filter ${value} is not in option...`);
            this.dispatchError(new Error(`the filter ${value} is not in option...`));
        }
    }

    /**@description:
     *
     *
     */
    getAndRenderData(dataPath) {
        getAndStore(dataPath)
            .then(data => {
                this._data = data;
                return this._data;
            }).then(data => {
            this._kids.forEach(container => container.renderData(this.prepareData(data)));
            }).catch(e => this.dispatchError(e));
    }
}

export default App;

///////////////// dev
function log(it, comments = "value: ") {
    console.log(comments, it);
}