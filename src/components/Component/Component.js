'use strict';

/**
 * @class
 * @classdesc Base class for all components that need to be rendered in the DOM.
 */
export default class Component {
    /**
     * @param {Object} params
     * @param {string} params.htmlTagName - the HTML tag name in 'string': 'div'
     * @param {Object} props - any number of the key-value pairs
     * @param {Object} props.attr - attributes
     * @param {string} props.attr.className - the className attribute of the given tag
     * @param {string} props.attr.id - the id attribute of the given tag
     * @param {[string, string][]} [props.attr.dataParams] - is used for dataset params of the given tag
     * dataParams is Array of arrays with [key, value] pairs for dataset[key]=value
     * {string} props.attr.* - it sets any attribute name:
     * the tag is set with dataset[*] = value
     * @param {(Component|HTMLElement|string|number|Array<Component|HTMLElement|string|number>)} [props.innerHTML]
     * - will be placed to innerHTML of HTMLElement
     */
    constructor ({htmlTagName, ...props}) {
        if (!htmlTagName || typeof htmlTagName !== 'string') {
            throw new Error('htmlTagName must be a non-empty string');
        }
        // Create the HTML element
        this._htmlElem = document.createElement(htmlTagName);

        if ('attr' in props) {
            if (typeof props['attr'] === 'object') {
                let attrObj = props['attr'];
                for (let key of Object.keys(attrObj)) {
                    if (key === 'className') {
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
             * if the prop is Array, then spreading array with forwarding to the function {@link this.setInnerHTML}
             * **/
            if (Array.isArray(props['innerHTML'])) {
                this.setInnerHTML(...props['innerHTML']);
            } else {
                this.setInnerHTML(props['innerHTML']);
            }
        }
    }
    ///////////////// END OF CONSTRUCTOR /////////////////

    /**
     * @returns {HTMLElement} the HTMLElement of the Component`s property this._htmlElem
     */
    getHTMLElem () {
        return this._htmlElem;
    }

/**
 * it is a protected Symbol property of the function, which appends the separate element to this._htmlElem
 * the following functions use this func: {@link this.setInnerHTML}, {@link append}
 * @protected is not used directly
 * @param {(HTMLElement | Node | Component | string | number | null)} elem - will be appended to 'innerHTML'
 **/
 [Symbol.for("appendThis")](elem) {
     //can be null
    if (elem) {
        if (elem.getHTMLElem) {
            /**
             * {@link getHTMLElem returns the HMTLElement of Component object}
             */
            this._htmlElem.append(elem.getHTMLElem());
        } else {
            // if it is not a new Component, then to append to this._htmlElem
            this._htmlElem.append(elem);
        }
    }
 }

    /**
     * @description it separates multiple elements and arrays of elements with recursive repeating calls, when the
     * element is Array. Finally it forwards the separate element to the function {@link this[Symbol.for("appendThis")]}
     * @param {...(HTMLElement | HTMLElement[] | Component | Component[] |string | string[] | null)} innerHtmlData
     * for innerHTML
     * **/
    setInnerHTML(...innerHtmlData) {
        if (innerHtmlData.length) {
            /**
             * it cleans innerHTML beforehand
             */
            this._htmlElem.innerHTML = '';
            for (let elem of innerHtmlData) {
                //elem can be 'null'
                if (elem) {
                    //spreading arrays of elems
                    if (Array.isArray(elem)) {
                        this.setInnerHTML(...elem);
                    }
                    else {
                        this[Symbol.for("appendThis")](elem);
                    }
                }
            }
        }
    }

    /**
     * it separates multiple elements and forwards them to {@link this[Symbol.for("appendThis")]}
     * unlike {@link setInnerHTML} it does not clean innerHTML, but appends new elements to existing content;
     * separate forwarding of the elems to {@link this[Symbol.for("appendThis")]}
     * @param {...(HTMLElement | HTMLElement[] | Component | Component[] |string | string[] | null)} innerHtmlData
     * for innerHTML
     */
    append(...innerHtmlData) {
        for (let elem of innerHtmlData) {
            this[Symbol.for("appendThis")](elem);
        }
    }
}

