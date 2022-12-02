'use strict';

import "./AsideItem.scss";
/** components **/
import GraphBlock from "../GraphBlock/GraphBlock";
import Component from "../Component/Component";

export default class AsideItem extends Component {
    constructor(props) {
        super(props);
    }
    //className: topWrapper
    ///////////////// END OF CONSTRUCTOR /////////////////

    renderData(dataItem) {
        const {title, details} = dataItem;
        let Heading;
        let Content;
/** heading of the AsideItem **/
        if (title && typeof title === 'string') {
            Heading = new Component({
                htmlTagName: 'h3',
                innerHTML: title,
            });
        }

        if (details && typeof details === 'string') {
            /** content of the AsideItem **/
            Content = new Component({
                htmlTagName: 'span',
                attr: {
                    className: 'spanDetails',
                },
                innerHTML: details,
            });
        }
        else if (Array.isArray(details) && details.length) {

            Content = details.map(dataItem => {
                let graphBlock = new Component({
                    htmlTagName: 'div',
                    attr: {
                        className: 'graphBlock',
                    }
                });

                let {title, details} = dataItem;
                let Subheading;
                let GraphHtml;

                if (title && typeof title === 'string') {
                    Subheading = new Component({
                        htmlTagName: 'span',
                        attr: {
                            className: 'subHeading',
                        },
                        innerHTML: title,
                    });
                }

                if (details && parseInt(details)) {
                    let GraphItem = new GraphBlock({
                        htmlTagName: 'div',
                        attr: {
                            className: 'graphBlock',
                        }
                    });
                    GraphHtml = GraphItem.renderData(details);
                }

                graphBlock.append(Subheading, GraphHtml);

                return graphBlock;
            });

            this.append(Heading, Content);
        }
        return this.getHTMLElem();
    }
}


/*const AsideItem = new Component({
    htmlTagName: 'div',
    attr: {
        className: 'topWrapper'
    }
});*/
