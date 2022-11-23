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
        log('inside constructor:');
        this._filter = null;     //will be overwritten by props 'filterOption'
        this._data = null;       //will be overwritten by this.getAndRenderData
        this._kids = [
            AsideBar,
            ContentBar
        ];

        //todo error status
        this._error = [];

        this._kids.forEach(component => this._htmlElem.append(component.getHTMLElem()));

        /**@description Array 'filterOption' is a list of possible 'filters' which can be chosen
         *
         * **/
        if ("filterOption" in props && Array.isArray(props["filterOption"])) {
            this.filterOption = [...props.filterOption];
            this._filter = this.filterOption[0];     //avoiding setter 'filter'
            log(`current filter inside constructor is: ${this.filter}`);
        } else {
            console.log('App has not found "filterOption" in given props to the constructor');
            this.dispatchError(new Error('App has not found "filterOption" in given props'));
        }
    }

    getReadyData(data) {
        if (data[this._filter]) {
            const { fullName, photo, ...restData } = data;

            return {
                fullName,
                photo,
                data: restData[this._filter],
                setFilter: this.setFilter,
                dispatchError: this.dispatchError,
            };
        } else {
            console.log(`no property ${this._filter} in the given data...`);
            this.dispatchError(new Error(`no property ${this._filter} in the given data...`));
        }
    }

/**@description setFilter uses 'setter' and will be sent as the callback to the children **/
    setFilter (value) {
        log('working callback "setFilter" with value: ' + value);
        this.filter = value;    //switching to the setter
        log('filter from setFilter is changed on: ' + this._filter);
    }

    dispatchError (error) {
        if (error.constructor.name === 'Error') {
            this._error.push(error);
            log('error dispatched...');
        }
    }

    get filter () {
        log('reading filter from getter "filter": ' + this._filter);
    }

    /**@description making setter in order to callback on changing value, as on event...
     *'this.filter' initially has null value... so, if 'this.filter' == null, we can init
     * **/
    set filter (value) {
        log('working setter filter with receiving: ' + value);
        if (this.filterOption && this.filterOption.includes(value)) {
            this._filter = value;
            log(this._filter, 'setting filter with value: ');

            this._kids.forEach(component => component.renderData(this.getReadyData(this._data)));


        } else {
            console.log(`the filter ${value} is not in option...`);
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
            this._kids.forEach(component => component.renderData(this.getReadyData(data)));
            }).catch(e => this.dispatchError(e));
    }
}

export default App;

///////////////// dev
function log(it, comments = "value: ") {
    console.log(comments, it);
}