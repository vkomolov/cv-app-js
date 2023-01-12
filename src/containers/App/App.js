'use strict';
import Component from "../../components/Component/Component";

import './App.scss';
import { getAndStore } from '../../utils/services/userService';
import { equalCols } from '../../utils/services/index';

//components
import AsideBar from "../AsideBar/AsideBar";
import ContentBar from "../ContentBar/ContentBar";
import AlertBlock from "../../components/AlertBlock/AlertBlock";
const filterOption = [
    'personal',
    'experience',
    'education'
];
const scrollingText = 'Using only vanilla JS, to realize the CV App which will dynamically construct the HTMLElements ' +
    'from the fetched JSON file, and re-render the HTMLElements on changing the value/state of the data or filters. ' +
    'Resembling React, to implement Classes/Components, which shall comprise the logic and the markup/styles of the App. ' +
    'The link to the code is available in the section "Experience"... ';


/**
 * @class
 * @classdesc it adds additional methods to the methods of {@link Component};
 * @extends Component
 */
class App extends Component {
    /**
     * @param {Object} props similar to super {@link Component};
     */
    constructor(props) {
        super(props);

        /**
         * @type {(Component)[]} adding columns to the page: {@link AsideBar}, {@link ContentBar}
         * @protected
         * the elems will be later appended to this._htmlElem {@link this._htmlElem}
         */
        this._kids = [AsideBar, ContentBar];

        /**
         * @type {(Object | null)} will be overwritten on using {@link getAndRenderData} which gets the data when
         * document already loaded
         * @protected
         */
        this._data = null;

        /**
         * @type {{type: (null | string), contentArr: ([] | (HTMLElement | string | Error | number)[])}}
         * @protected
         * @example
         * type: null, 'error', 'loading'... to be scaled
         * contentArr: (new Error() | string | number | HTMLElement)[] ... to be scaled
         */
        this._alert = {
            type: null,
            contentArr: [],
        };

        /**
         * new Component, which wraps the section links and to be appeared on top in the fixed position
         * on scroll-down event...
         * @type {(null | Component)} will be overwritten with the function {@link listenForScroll}
         */
        this.barOnScroll = null;

        /**
         * @description Array 'filterOption' is a list of the sections / filters which can be chosen/clicked with
         * the following re-rendering of the elements with the new data;
         * @type {string[]} {@link filterOption}
         * @protected
         * **/
        this._filterOption = filterOption;
        this._filter = this._filterOption[0]; //choosing the initial section to render

        /**
         * using the method of Component {@link Component.append}
         * As 'this' is not an HTMLElement, which uses 'HTMLElement.append' method, but new Component Object,
         * then to use the method of new Component.append, which appends the elems to
         * innerHTML of Component._htmlElem {@link Component._htmlElem}
         */
        this.append(...this._kids);

        /**
         * it makes all columns of the page to be equal, corresponding to their content size
         * @param {...HTMLElement[]}
         */
            equalCols(...this._kids.map(kid => kid.getHTMLElem()));

            if (!this._data) {
                /**
                 * if still no data loaded, then to dispatch alert with type='loading'
                 */
                this.dispatchAlert('loading', ['Loading...']);
            }
    }
///////////////// END OF CONSTRUCTOR /////////////////

    /**
     * it adds additional properties to the data object which then will be sent by {@link renderData}
     * @param {Object} data, taken from the LocalStorage or fetched...
     * @returns {{data: Object, filterActive: string, setFilter: callback, dispatchAlert: callback}}
     */
    prepareData(data) {
        return {
            data,
            filterActive: this._filter,
            setFilter: this.setFilter.bind(this),
            dispatchAlert: this.dispatchAlert.bind(this),
        };
    }

/**
 * @description setFilter initiates 'setter' on 'filter'... it will be sent as the callback to the children
 * setter {@link filter} will re-render all appended elements with the new data... resembling 'state' changes...
 */
    setFilter (value) {
        this.filter = value;    //switching to the setter (set filter()), not this._filter directly...
    }

    /**
     * @returns {string} this._filter
     */
    get filter () {
        return this._filter;
    }

    /**
     * @description making setter in order to re-render the children with the new data on changing value, as on event...
     * @param {string} value, which must be one of {@link this._filterOption}
     * @example
     * this.filter = 'personal' | 'experience' |'education'
     * **/
    set filter (value) {
        if (this._filterOption.length && this._filterOption.includes(value)) {
            this._filter = value;

            if (this._data) {
                /**
                 * on getting data to clear all alerts {@link this._alert}, removing 'loading' element
                 */
                this.alertClear();

                //sending new data to the Component ancestors
                this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));

                //equalizing the heights of the kids...
                equalCols(...this._kids.map(kid => kid.getHTMLElem()));

                //scrolling up to start of the page
                window.scrollTo(0, 0);

                /**
                 * if {@link this.barOnScroll} is already Component and it has own
                 * method {@link this.barOnScroll.renderFilter} then to style the filters according to new active filter
                 */
                this.barOnScroll && this.barOnScroll.getHTMLElem && this.barOnScroll.renderFilter(this._filter);

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

    /**
     * if {@link this._alert.type} equals 'error', then to return {@link this._alert.contentArr} as the array of Errors
     * @returns {null|Error[]}
     */
    get error () {
        if (this._alert.type === 'error') {
            return this._alert.content;
        }
        return null;
    }

    /**
     * it receives the type of the alert
     * it receives multiple content items to add to the alert block, which will be re-rendered, when
     * {@link dispatchAlert} is initiated with a new content;
     * If current type of this._alert.type equals to the type, given in arguments, then to add new content
     * to the existing at {@link this._alert.contentArr},
     * else to change this._alert.type to arguments['type'] and to overwrite the content of {@link this._alert.contentArr}
     * with the new content, given in arguments...
     * @param {string} type: 'error', 'loading'... to be scaled
     * @param {...(string | HTMLElement | Component)} content
     * @example
     * dispatchAlert('error', new Error('too many comments for all this :)'), new Error('bla bla bla :)'));
     */
    dispatchAlert (type, ...content) {
        if (this._alert.type && this._alert.type !== type) {
            this.alertClear();
        }
        this._alert.type = type; //for the case, when this._alert.type = null;
        this._alert.contentArr.push(...content);

        document.body.style.overflow = 'hidden';
        this.append(AlertBlock.renderData(this._alert));
    }

    /**
     * it removes the alert block from DOM, resetting {@link this._alert} properties to default values
     */
    alertClear () {
        document.body.style.overflow = 'auto';
        AlertBlock.getHTMLElem().remove();
        this._alert.type = null;
        this._alert.contentArr = [];
    }

    /**
     * it hangs EventListener on scroll untill window.pageYOffset >= scrollPoint
     * then it appends the bar on top of the page in absolute position
     * @param {number} scrollPoint
     * @param {Object} attr contains the keys: 'forScrollClass', 'onScrollEventClass', 'wrapperClass', 'elementClass'
     * @param {string[]} textContentArr - the array of filters which will be shown in the top bar
     */
    listenForScroll({scrollPoint, attr, textContentArr}) {
        //future wrapper in fixed position ,which will appear with the filters included at scroll-down event
        let WrapperOnScroll;

        //all arguments will be checked and, if errors, the script stops and console.error of all errors at the check end...
        const errorsArr = [];

        //the flag for limiting scroll event actions
        let isLocked = false;

        /**
         * @type {Object} attr
         * @type {string} attr.forScrollClass - className for the wrapper which will be shown in absolute position
         * on scroll-down event;
         * @type {string} attr.onScrollEventClass - className on scroll-down event
         * @type {string} attr.wrapperClass - className for the direct wrapper of the elements to show
         * @type {string} attr.elementClass - className for the filters
         * **/
        const {forScrollClass, onScrollEventClass, wrapperClass, elementClass} = attr;

        // HTMLElement[] which will be shown on scroll down event
        let preparedElemsArr;

        //CHECKING FOR ERRORS
        if (!+scrollPoint) {
            errorsArr.push(new Error(`given scrollPoint: ${scrollPoint} is not of type 'number'...`));
        }
        if (!forScrollClass) {
            errorsArr.push(new Error(`given value: ${forScrollClass} is not found...`));
        }
        if (!onScrollEventClass) {
            errorsArr.push(new Error(`given onScrollEventClass: ${onScrollEventClass} is not found...`));
        }
        if (!wrapperClass) {
            errorsArr.push(new Error(`given wrapperClass: ${wrapperClass} is not found...`));
        }
        if (!elementClass) {
            errorsArr.push(new Error(`given elementSpecClass: ${elementClass} is not found...`));
        }
        if (!textContentArr || !textContentArr.length) {
            errorsArr.push(new Error(`given array: ${textContentArr} is not found or empty...`));
        }

        if (errorsArr.length) {
            this.dispatchAlert('error', ...errorsArr);
        }
        // END OF CHECK /////////////////////

        preparedElemsArr = textContentArr.map(text => {
            let specClass = text === this._filter ? 'specClass' : 'toBeHovered';

            return new Component({
                htmlTagName: 'span',
                attr: {
                    className: `${elementClass} ${specClass}`,
                    dataParams: [
                        ['section', text],
                    ],
                },
                innerHTML: text
            });
        });

        this.barOnScroll = new Component({
            htmlTagName: 'div',
            attr: {
                className: wrapperClass,
            },
            innerHTML: preparedElemsArr
        });
        this.barOnScroll.renderFilter = function(activeFilter) {
            //clearing previous styles of the shown elements and applying with the current activeFilter
            [...this.getHTMLElem().children].forEach(el => {
                el.classList.remove('specClass');
                el.classList.remove('toBeHovered');

                let specClass = el.dataset.section === activeFilter ? 'specClass' : 'toBeHovered';
                el.classList.add(specClass);
            });
        };

        //The top wrapper which is fixed on scroll, and keeps the shown block in the middle...
        WrapperOnScroll = new Component({
            htmlTagName: 'div',
            attr: {
                className: forScrollClass
            },
            innerHTML: this.barOnScroll,
        });

        //if clicked on the new section elem then to change filter and run setter 'filter' with rerendering elements...
        this.barOnScroll.getHTMLElem().addEventListener('click', (e) => {
            let target = e.target;
            if (target.dataset.section !== this._filter) {
                /**callback to App with changing setter filter and rerendering the elements with a new content**/
                this.filter = target.dataset.section;
            }
        });

        window.addEventListener('scroll', () => {
            if (isLocked) {
                return;
            }

            isLocked = true;
            //restricting scroll event callbacks
            setTimeout(() => {
                //log(window.pageYOffset, 'window.pageYOffset');
                const shownBar = WrapperOnScroll.getHTMLElem();

                if (window.pageYOffset >= scrollPoint) {
                    //log('height is 400 or more...');
                    this.append(shownBar);

                    setTimeout(() => {
                        //adding possibly multiple classNames
                        shownBar.classList.add(onScrollEventClass);
                    }, 100);

                } else {
                    shownBar.classList.remove(onScrollEventClass);

                    setTimeout(() => {
                        shownBar.remove();
                    }, 100);
                }

                isLocked = false;
            }, 300);
        });

    }

    /**
     *
     * @param {string} text to be animated scrolling
     * @param {number} duration of the animation in ms
     * @param {boolean} [isInfinite = false] if true then animation infinite
     * @example
     * initScrollingText('some text', 2000, true);
     * will animate 'some text' with 2000ms, continuous
     */
    initScrollingText(text, duration, isInfinite = false) {
        //id of requestAnimationFrame, which to be initiated;
        let reqId;

        const ScrollingTextElem = new Component({
            htmlTagName: 'p',
            attr: {
                className: 'scrolling-text',
            },
            innerHTML: text,
        });

        const ScrollingTextBar = new Component({
            htmlTagName: 'div',
            attr: {
                id: 'scrolling-text-wrapper'
            }
        });

        /**hiding the element in absolute to the right from the parent, which is in overflow:hidden,
         * then animating the style 'left' to the left for scrolling text...
         * **/
        this.getHTMLElem().before(ScrollingTextBar.getHTMLElem());
        ScrollingTextElem.getHTMLElem().style.left = ScrollingTextBar.getHTMLElem().offsetWidth + 10 + 'px';
        ScrollingTextBar.append(ScrollingTextElem);

        /**
         * {@link animateScrollingText}
         */
        animateScrollingText(ScrollingTextElem.getHTMLElem(), duration, isInfinite);

        /**
         * resetting the position of the text to initial state, right from the parent, which is in overflow:hidden;
         * in order to avoid transition on 'style.left' during change, the text is removed, then repositioned and
         * appended again;
         */
        function refreshScrollingTextElem() {
            ScrollingTextElem.getHTMLElem().remove();
            ScrollingTextElem.getHTMLElem().style.left = ScrollingTextBar.getHTMLElem().offsetWidth + 10 + 'px';
            ScrollingTextBar.append(ScrollingTextElem);
        }

        /**
         * It realized the scrolling animation of the given DOM element
         * @param {HTMLElement} elem for animation must be in DOM, otherwise it will dispatch new Error...
         * @param {number} duration in ms for animation of the text scrolling through all the width of the main wrapper
         * @param {boolean} [isInfinite = false] ... if true the cycling animation
         */
        function animateScrollingText(elem, duration, isInfinite = false) {
            let startTime = null;
            const scrollingTextWidth = ScrollingTextElem.getHTMLElem().offsetWidth;
            const scrollingTextBarWidth = ScrollingTextBar.getHTMLElem().offsetWidth;
            const distance = scrollingTextWidth + scrollingTextBarWidth + 10;
            let initialLeft = parseInt(ScrollingTextElem.getHTMLElem().style.left);

            //checking if the element is in DOM
            if (elem.parentElement) {
                requestAnimationFrame(function measure(time) {
                    if (!startTime) {
                        startTime = time;
                    }
                    //getting the percentage of time, passed from startTime...
                    let progress = (time - startTime)/duration;   //from 0 to 1
                    if (progress > 1) {
                        progress = 1;
                    }

                    //getting the portion of distance to animate
                    let shift = distance * progress;
                    ScrollingTextElem.getHTMLElem().style.left = (initialLeft - shift) + 'px';

                    //recycling function till come to 100%
                    if (progress < 1) {
                        requestAnimationFrame(measure);
                    } else {
                        /**
                         * if fulfilled, then to replace the scrolling element to the initial position, unvisible right
                         * only in case of isInfinite === true
                         */
                        if (isInfinite) {
                            refreshScrollingTextElem();
                            startTime = null;
                            requestAnimationFrame(measure);
                        }
                        console.log('text scrolling ended...');
                    }
                });
            }
            else {
                throw new Error('given parentElement is not in DOM...');
            }
        }
    }

    /**
     * @description: it is the main start method, which is initiated right after the App is appended to DOM
     *
     * @param { string } dataPath url to the source for fetching data
     * @param {number} [delay = 0] optional delay for rendering the data, imitating the delay in loading
     */
    getAndRenderData(dataPath, delay = 0) {
        //simulating loading time
        setTimeout(() => {

            /**
             * {@link getAndStore} for fetchig and storing the data in the LocalStorage
             */
            getAndStore(dataPath)
                .then(data => {
                    this._data = data;
                    //clearing the previous alerts
                    this.alertClear();

                    //re-rendering the elements with the new and prepared data
                    this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));

                    //equalizing the heights of AsideBar and ContentBar...
                    equalCols(...this._kids.map(kid => kid.getHTMLElem()));

                    //initialising the scrolling text top of the page
                    this.initScrollingText(scrollingText, 50000, true);

                    //setting the listener on scroll with the following showing elements on scroll down
                    this.listenForScroll({
                        scrollPoint: 400,
                        attr: {
                            forScrollClass: 'wrapper-on-scroll',
                            onScrollEventClass: 'scroll-active',
                            wrapperClass: 'bar-on-scroll',
                            elementClass: 'elem-on-scroll'
                        },
                        textContentArr: this._filterOption,
                    });
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