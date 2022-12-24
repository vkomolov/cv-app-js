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
        this._alert = {
            type: null,
            contentArr: null,
        };

        /**@description Array 'filterOption' is a list of possible 'filters' which can be chosen
         *
         * **/
        this._filterOption = filterOption;
        this._filter = this._filterOption[0];

            //appending children... with 'Component.append(...elems)
            this.append(...this._kids);

            !this._data && this.dispatchAlert('loading', 'Loading...');
    }
///////////////// END OF CONSTRUCTOR /////////////////

    prepareData(data) {
        return {
            data,
            filterActive: this._filter,
            setFilter: this.setFilter.bind(this),
            dispatchAlert: this.dispatchAlert.bind(this),
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
                this.alertClear();
                this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));
                //equalizing the heights of the kids...
                equalCols(...this._kids.map(kid => kid.getHTMLElem()));
            } else {
                console.error(`the data is empty:  ${this._data}`);
                this.dispatchAlert('error', new Error(`the data is empty:  ${this._data}`));
            }
        }
        else {
            console.error(`the filter ${value} is not in option...`);
            this.dispatchAlert('error', new Error(`the filter ${value} is not in option...`));
        }
    }

    get error () {
        if (this._alert.type === 'error') {
            return this._alert.content;
        }
        return null;
    }

    dispatchAlert (type, content) {
        if (this._alert.type !== type) {
            this._alert.type = type;
            this._alert.contentArr = [];
        }

        this._alert.contentArr.push(content);
        this.renderAlert();
    }

    /**is used for re-rendering AlertBlock**/
    renderAlert() {
        if (!this._alert.type) {
            AlertBlock.getHTMLElem().remove();
        } else {
            this.append(AlertBlock.renderData(this._alert));
        }
    }

    alertClear() {
        this._alert.type = null;
        this._alert.contentArr = null;
        this.renderAlert();
    }

    /**@description:
     *
     *
     */
    getAndRenderData(dataPath, delay = 0) {
        setTimeout(() => {
            getAndStore(dataPath)
                .then(data => {
                    this._data = data;
                    this.alertClear(); //cleaning alerts
                    this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));

                    //equalizing the heights of the kids...
                    equalCols(...this._kids.map(kid => kid.getHTMLElem()));
                })
                .catch(e => {
                    this.dispatchAlert('error', e);
                    console.error(e.message);
                });
        }, delay);
    }
}

export default App;

///////////////// dev
function log(it, comments='value: ') {
    console.log(comments, it);
}