'use strict';

import "./GraphBlock.scss";
import Component from "../../components/Component/Component";

export default class GraphBlock extends Component {
    constructor(props) {
        super(props);
    }
    ///////////////// END OF CONSTRUCTOR /////////////////

    renderData(score) {
        /////

        const indicator = new Component({
            htmlTagName: 'div',
            attr: {
                className: 'score',
            }
        });
        this.append(indicator);

        if (parseInt(score)) {
            setTimeout(() => {
                //It will change the width of the inner element, which has the transition for changing width...

                indicator.getHTMLElem().style.width = parseInt(score) + '%';
            }, 500);

            return this.getHTMLElem();
        }
        else {
            this.dispatchError(new Error('Graphblock has received not proper "score"... must be parsed to string'));
            document.console.error('Graphblock has received not proper "score"... must be parsed to string... instead: ', score)
        }

        /////////
    };
}






/*
const GraphBlock = new Component ({
    htmlTagName: 'div',
    attr: {
        className: 'graphBlock',
    }
});

/!**@description: It changes the width of the inner element with the transition and
 * it returns the HTMLElement for being appended by parent element.
 * **!/

GraphBlock.renderData = function(score) {
    if (parseInt(score)) {
        /!** switching setter 'innerHTML' **!/
        this.innerHTML = indicator;

        setTimeout(() => {
            /!**It will change the width of the inner element, which has transition for changing width...
             * **!/
            indicator.getHTMLElem().style.width = parseInt(score) + '%';
        }, 500);

        return this.getHTMLElem();
    }
    else {
        this.dispatchError(new Error('Graphblock has received not proper "score"... must be parsed to string'));
        console.error('Graphblock has received not proper "score"... must be parsed to string... instead: ', score)
    }
};

export default GraphBlock;*/



////  dev  /////////////////////////////
function log(it, comments='value: ') {
    document.console.log(comments, it);
}