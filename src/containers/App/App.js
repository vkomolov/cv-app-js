'use strict';
import Component from "../../components/Component/Component";

import './App.scss';
import { getAndStore } from '../../utils/services/userService';
import { equalCols } from '../../utils/services/index';

/** components **/
import AsideBar from "../AsideBar/AsideBar";
import ContentBar from "../ContentBar/ContentBar";
import AlertBlock from "../../components/AlertBlock/AlertBlock";
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
        //todo: to realize the _error control
        this._alert = {
            type: null,
            contentArr: null,
        };
        this.alert = null; // for the setter 'alert' with the following event

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

            if (this._data) {
                this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));
                //this.setInnerHTML(...this._kids);
                equalCols(...this._kids.map(kid => kid.getHTMLElem()));
            } else {
                console.error(`the data is empty:  ${this._data}`);
                this.dispatchError(new Error(`the data is empty:  ${this._data}`));
            }
        }
        else {
            console.error(`the filter ${value} is not in option...`);
            this.dispatchError(new Error(`the filter ${value} is not in option...`));
        }
    }

    /**@description making setter 'error' in order to callback on changing value, as on event...
     *
     * **/
    set alert (timeStamp) {
        log(timeStamp, 'working setter alert');
        log(this._alert, 'rendering this._alert: ');

        if (!this._alert.type) {
            AlertBlock.getHTMLElem().remove();
        } else {
            this.append(AlertBlock.renderData(this._alert));
        }
    }

    get error () {
        if (this._alert.type === 'error') {
            return this._alert.content;
        }
        return null;
    }

    /**@description: callback to children... initiates the setter 'alert' with the following event **/
    dispatchError (err) {
        if (err.constructor.name === 'Error') {
            log(err.constructor.name, 'dispatched error:');
            if (this._alert.type !== 'error') {
                this._alert.type = 'error';
                this._alert.contentArr = [];   //clean
            }

            this._alert.contentArr.push(err);
        }
        this.renderAlert();
    }

    dispatchAlert (alert) {
        /**when error it is no other alerts**/
        if (this._alert.type !== 'error') {
            if (this._alert.type !== 'alert') {
                this._alert.type = 'alert';
                this._alert.contentArr = [];
            }

            this._alert.contentArr.push(alert);
            this.renderAlert();
        }
    }

    renderAlert() {
        this.alert = Date.now();  //switching setter 'alert'
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
                equalCols(...this._kids.map(kid => kid.getHTMLElem()));
            })
            .catch(e => this.dispatchError(e));
    }
}

export default App;

///////////////// dev
function log(it, comments='value: ') {
    console.log(comments, it);
}