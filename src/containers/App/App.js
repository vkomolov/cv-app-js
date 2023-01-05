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
const scrollingText = 'All the content and the list of the necessary HTML tags to render in the page, where fetched from JSON' +
    ', then stored in the LocalStorage, then rendered by the Components';

class App extends Component {
    constructor(props) {
        super(props);
        this._kids = [AsideBar, ContentBar];
        //will be overwritten by this.getAndRenderData
        this._data = null;
        this._alert = {
            type: null,
            contentArr: [],
        };

        //it wraps the section links and to be appeared on scroll-down event...
        this.barOnScroll = null;

        /**@description Array 'filterOption' is a list of possible 'filters' which can be chosen
         *
         * **/
        this._filterOption = filterOption;
        this._filter = this._filterOption[0];


            //appending children... with 'Component.append(...elems)
            this.append(...this._kids);
            equalCols(...this._kids.map(kid => kid.getHTMLElem()));

            if (!this._data) {
                this.dispatchAlert('loading', ['Loading...']);
            }
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
        if (this._filterOption.length && this._filterOption.includes(value)) {
            this._filter = value;

            if (this._data) {
                this.alertClear();

                this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));
                //equalizing the heights of the kids...
                equalCols(...this._kids.map(kid => kid.getHTMLElem()));
                //scrolling to start of the section
                window.scrollTo(0, 0);

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

    get error () {
        if (this._alert.type === 'error') {
            return this._alert.content;
        }
        return null;
    }

    dispatchAlert (type, ...content) {
        if (this._alert.type && this._alert.type !== type) {
            this.alertClear();
        }
        this._alert.type = type; //for the case, when this._alert.type = null;
        this._alert.contentArr.push(...content);

        document.body.style.overflow = 'hidden';
        this.append(AlertBlock.renderData(this._alert));
    }

    alertClear () {
        document.body.style.overflow = 'auto';
        AlertBlock.getHTMLElem().remove();
        this._alert.type = null;
        this._alert.contentArr = [];
    }

    listenForScroll({scrollPoint, attr, textContentArr}) {
        //future wrapper in position 'fixed', which will appear at scroll-down event and includes BarOnScroll with links
        let WrapperOnScroll;
        //all arguments will be checked and, if errors, the script stops and console.error of all errors at the check end...
        const errorsArr = [];
        //its the flag for limiting scroll event actions
        let isLocked = false;
        /**'forScrollClass' className for the wrapper which will be shown in absolute on scroll-down event
         * 'onScrollEventClass' className on scroll-down event
         * 'wrapperClass' className for the direct wrapper of the elements to show
         * 'elementClass' className for the elements
         * **/
        const {forScrollClass, onScrollEventClass, wrapperClass, elementClass} = attr;

        // the elements which will be shown on scroll down event
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

    initScrollingText(text, duration) {

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

        animateScrollingText(ScrollingTextElem.getHTMLElem(), duration, true);

        function refreshScrollingTextElem() {
            ScrollingTextElem.getHTMLElem().remove();
            ScrollingTextElem.getHTMLElem().style.left = ScrollingTextBar.getHTMLElem().offsetWidth + 10 + 'px';
            ScrollingTextBar.append(ScrollingTextElem);
        }

        function animateScrollingText(elem, time, isInfinite) {
            let startTime = Date.now();
            //checking if the element is in DOM
            if (elem.parentElement) {
                log('elem is in DOM');
            }

        }
    }

    /**@description:
     *
     *
     */
    getAndRenderData(dataPath, delay=0) {
        //const filters = document.getElementById()

        //simulating loading time
        setTimeout(() => {
            getAndStore(dataPath)
                .then(data => {
                    this._data = data;
                    this.alertClear();

                    this._kids.forEach(kid => kid.renderData(this.prepareData(this._data)));

                    //equalizing the heights of AsideBar and ContentBar...
                    equalCols(...this._kids.map(kid => kid.getHTMLElem()));

                    //initialising the scrolling text top of the page
                    this.initScrollingText(scrollingText, 3000);

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