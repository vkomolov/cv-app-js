'use strict';

export default class Component {
    constructor ({htmlTagName, ...props}) {
        /**will be checked before actions
         * todo: to realise the error control
         **/
        this._error = [];

        if (typeof htmlTagName === 'string') {
            this._htmlElem = document.createElement(htmlTagName);
        } else {
            this.dispatchError(new Error('htmlTagName must be of type "string"...'));
        }

        if ('attr' in props) {
            if (typeof props['attr'] === 'object') {
                let attrObj = props['attr'];
                for (let key of Object.keys(attrObj)) {
                    if (key === 'className') {
                        //this._htmlElem.classList.add(attrObj[key]);
                        this._htmlElem.className = attrObj[key];
                    }
                    else if (key === 'id') {
                        this._htmlElem.id = attrObj[key];
                    }
                    else if (key === 'dataParams' && Array.isArray(attrObj[key])) {
                        for (let dataSetPair of attrObj[key]) {
                            let [propName, propVal] = dataSetPair;
                            this._htmlElem.dataset[propName] = propVal;
                        }
                    }
                    else {
                        if (typeof attrObj[key] === 'string') {
                            this._htmlElem.setAttribute(key, attrObj[key]);
                        }
                    }
                }
            }
        }

        if ('innerHTML' in props) {
            /**
             * switching to hidden function with 'false', for rewriting innerHTML
             * **/
            this[Symbol.for('setInnerHTML')](props['innerHTML'], false);
        }
    }
    ///////////////// END OF CONSTRUCTOR /////////////////

    dispatchError (error) {
        if (error.constructor.name === 'Error') {
            this._error.push(error);
            document.console.error('error dispatched...', error.message);
        }
    }

    getHTMLElem () {
        return this._htmlElem;
    }

/**
 * @description:
 * - the main function is hidden with [Symbol.for("setInnerHTML")] from being enumerated
 * with other Prototype methods and being initiated directly...
 * 'toAppend = true' is for appending elements and nodes to the Parent; 'toAppend = false' is for rewriting innerHTML
 **/
 [Symbol.for("setInnerHTML")](data, toAppend = true) {
    if (Array.isArray(data) && data.length) {
        if (!toAppend) {
            this._htmlElem.innerHTML = '';
        }
        data.forEach(elem => {
            this[Symbol.for("setInnerHTML")](elem, true);
        });
    }

    /** all ancestors of 'Component', including 'Container', which extends 'Component',
     * has the property of the 'Component': 'obj.getHTMLElem'
     * **/
    else if (data.getHTMLElem) {
        if (toAppend) {
            this._htmlElem.append(data.getHTMLElem());
        } else {
            this._htmlElem.innerHTML = '';
            this._htmlElem.append(data.getHTMLElem());
        }
    }
    else  {
        if (toAppend) {
            this._htmlElem.append(data);
        } else {
            this._htmlElem.innerHTML = '';
            this._htmlElem.append(data);
        }
    }
 }

    /**@Description: Setter/Getter for the innerHTML property of the class Component, which is not DOM Element, but
     * has the property 'htmlElem', which has the [[prototype]]] of HTMLElement
     *
     */
    set innerHTML (innerHtmlData) {
        this[Symbol.for("setInnerHTML")](innerHtmlData, false);
    }

    get innerHTML () {
        return this._htmlElem.innerHTML;
    }

    /**@description it can use 'append' method directly to the new Component obj, avoiding append method to the
     * HTMLElement, which is in the property 'this._htmlElem' of this new Component obj...
     * **/
    append(...innerHtmlData) {
        this[Symbol.for("setInnerHTML")](innerHtmlData, true);
        //innerHtmlData.forEach(elem => this[Symbol.for("setInnerHTML")](elem, true));
    }
}

////  dev  /////////////////////////////
function log(it, comments="value: ") {
    console.log(comments, it);
}