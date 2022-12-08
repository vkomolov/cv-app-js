'use strict';
import Component from "../../components/Component/Component";

import './App.scss';
import { getAndStore } from "../../utils/services/userService";

/** components **/
import AsideBar from "../AsideBar/AsideBar";
import ContentBar from "../ContentBar/ContentBar";
const filterOption = [
    'personal',
    'experience',
    'education'
];

class App extends Component {
    constructor(props) {
        super(props);
        this._filter = null;     //will be overwritten by props 'filterOption'
        this._kids = [AsideBar, ContentBar];
        //will be overwritten by this.getAndRenderData
        this._data = null;
        //will collect errors from the components
        this._error = [];

        /**@description Array 'filterOption' is a list of possible 'filters' which can be chosen
         *
         * **/
        this._filterOption = filterOption;
        this._filter = this._filterOption[0];

            /**TODO: to decide, should the containers start before the data is fetched...
             * TODO: error status
             * */
            //appending children... with 'Component.append(...elems)
            this.append(...this._kids);
    }
///////////////// END OF CONSTRUCTOR /////////////////

    prepareData(data) {
        return {
            data,
            filterActive: this._filter,
            setFilter: this.setFilter.bind(this),
            dispatchError: this.dispatchError.bind(this),
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
        if (this._filterOption && this._filterOption.includes(value)) {
            this._filter = value;

            //on changing filter to rewrite components with the new data
            //this.append(...this._kids.map(kid => kid.renderData(this.prepareData(data))));

            if (this._data) {
                this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));
            } else {
                document.console.error(`the data is empty:  ${this._data}`);
                this.dispatchError(new Error(`the data is empty:  ${this._data}`));
            }

            //this.innerHTML = this._kids.map(kid => kid.renderData(this.prepareData(this._data)));
        } else {
            document.console.error(`the filter ${value} is not in option...`);
            this.dispatchError(new Error(`the filter ${value} is not in option...`));
        }
    }

    dispatchError (error) {
        if (error.constructor.name === 'Error') {
            this._error.push(error);
            document.console.error('error dispatched...', error.message);
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
                this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));
            })
            .catch(e => this.dispatchError(e));
    }
}

export default App;

///////////////// dev
function log(it, comments='value: ') {
    console.log(comments, it);
}