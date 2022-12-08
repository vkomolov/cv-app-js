'use strict';

export default class Component {
    constructor ({htmlTagName, ...props}) {
        if (typeof htmlTagName === 'string') {
            this._htmlElem = document.createElement(htmlTagName);
        } else {
            console.error(new Error('htmlTagName must be of type "string"...'));
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
            this[Symbol.for("appendThis")](props['innerHTML']);
        }
    }
    ///////////////// END OF CONSTRUCTOR /////////////////

    getHTMLElem () {
        return this._htmlElem;
    }

/**
 * @description:
 **/
 [Symbol.for("appendThis")](elem) {

    /** all ancestors of 'Component', including 'Container', which extends 'Component',
     * has the property of the 'Component': 'obj.getHTMLElem'
     * **/
    if (elem.getHTMLElem) {
        this._htmlElem.append(elem.getHTMLElem());
    }
    else {
        this._htmlElem.append(elem);
    }
 }

    /**@description
     * **/
    setInnerHTML(...innerHtmlData) {
        if (innerHtmlData.length) {
            this._htmlElem.innerHTML = '';
            for (let elem of innerHtmlData) {
                this[Symbol.for("appendThis")](elem);
            }
        }
    }

    append(...innerHtmlData) {
        for (let elem of innerHtmlData) {
            this[Symbol.for("appendThis")](elem);
        }
    }
}

////  dev  /////////////////////////////
function log(it, comments="value: ") {
    console.log(comments, it);
}