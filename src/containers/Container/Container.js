'use strict';

import Component from "../../components/Component/Component";

/**@description it extends Component, adding '_data' property and methods to parse 'data'
 * Also with receiving the data it receives the callback to App: 'this.dispatchError' and 'this.setFilter'...
 * initially they are null and will be overwritten when receiving the data from App with 'this.renderData'
 * **/

export default class Container extends Component {
    constructor(props) {
        super(props);
        this._dataName = props.dataName || null;
        this.dispatchError = null;
        this.setFilter = null;
        this.filterActive = 'personal'; //will be overwritten
    }

    renderData(innData) {
        const {dispatchError, setFilter, filterActive, ...data} = innData;

        /** switching to dispatchError callback of the App (for emitting new Errors)**/
        if (dispatchError) {
            this.dispatchError = dispatchError;
        } else {
            console.error('no "dispatchError" found in data: ');
            console.error(innData);
        }

        /**  **/
        if (setFilter) {
            this.setFilter = setFilter;
        } else {
            this.dispatchError && this.dispatchError(new Error('no "dispatchError" found in data: '));
            console.error('no "dispatchError" found in data: ');
            console.error(innData);
        }

        /**  **/
        if (filterActive) {
            this.filterActive = filterActive;
        } else {
            this.dispatchError && this.dispatchError(new Error('no "filterActive" found in data: '));
            console.error('no "filterActive" found in data: ');
            console.error(innData);
        }

        this.parseData(data['data']);
    }


    parseData(...innData) {
        console.log('new Container object must have its own "parseData" method. Default method is initialised...')
        console.log(innData, 'parsed Data: ');
    }

}

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}