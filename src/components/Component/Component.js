'use strict';

export default class Component {
    constructor ({htmlTagName, ...props}) {
        this._htmlElem = document.createElement(htmlTagName);
        if ("className" in props) {
            this._htmlElem.classList.add(props["className"]);
        }
        if ("id" in props) {
            this._htmlElem.id = props["id"];
        }
        //dataParams for writing dataset in props
        //props['dataParams'] is Array
        if ("dataParams" in props) {
            for (let dataSetPair of props["dataParams"]) {
                let [propName, propVal] = dataSetPair;
                this._htmlElem.dataset[propName] = propVal;
            }
        }
        if ("innerHTML" in props) {
            this[Symbol.for("setInnerHTML")](props["innerHTML"]);
        }
    }

    getHTMLElem () {
        return this._htmlElem;
    }

    appendKids (...children) {
        this._htmlElem.append(...children);
            log('new kid is appended...');
    }

/**
 * @description:
 * - the main function is hidden with [Symbol.for("setInnerHTML")] from being enumerated
 * with other Prototype methods and being initiated directly...
 * - to achieve the property 'innerHTML' only through getter/setter 'innerHTML';
 * - object 'new Component' does not have its own innerHTML, cause it`s not an HTMLElement,
 * but has the property with the type HTMLElement: 'this.htmlElem'...
 * so, by using getter/setter of on object 'new Component', we can write the property 'innerHTML' of the object`s
 * property 'this.htmlElem', which is HTMLElement...
 * **/
    [Symbol.for("setInnerHTML")](data) {
        if (typeof data === "string" || typeof data === "number") {
            this._htmlElem.innerHTML = data; //can be string, number, bull, null

            //HTMLElement has the 'dataset' property, so: if the data is a node element, then we append it...
        } else if (data.nodeType === 1) { //if it is HTMLElement...
            this._htmlElem.append(data);

            //if data is array, then recursive use of the function
        } else if (Array.isArray(data) && data.length) {
            data.forEach(elem => {
                this[Symbol.for("setInnerHTML")](elem);
            });
        }
    }

    /**@Description: Setter/Getter for the innerHTML property of the class Component, which is not DOM Element, but
     * has the property 'htmlElem', which has the [[prototype]]] of HTMLElement
     *
     */
    set innerHTML (innerHtmlData) {
        this[Symbol.for("setInnerHTML")](innerHtmlData);
    }

    get innerHTML () {
        return this._htmlElem.innerHTML;
    }
}

////  dev  /////////////////////////////
function log(it, comments="value: ") {
    console.log(comments, it);
}