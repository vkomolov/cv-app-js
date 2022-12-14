'use strict';

import "./AsideItem.scss";
/** components **/
import GraphBlock from "../GraphBlock/GraphBlock";
import Component from "../Component/Component";

/**will be multiples samples for AsideContent**/

export default class AsideItem extends Component {
    constructor(props) {
        super(props);
    }
    ///////////////// END OF CONSTRUCTOR /////////////////

    renderData({...dataItem}) {
        const {title, details} = dataItem;
        let Heading;
        let Content = [];
/** heading of the AsideItem **/
        if (title && typeof title === 'string') {
            Heading = new Component({
                htmlTagName: 'h3',
                innerHTML: title,
            });
        }

        if (details && typeof details === 'string') {
            /** content of the AsideItem **/
            Content.push(new Component({
                htmlTagName: 'span',
                attr: {
                    className: 'spanDetails',
                },
                innerHTML: details,
            }));
        }
        //content with the graphElem
        else if (Array.isArray(details) && details.length) {
            Content = details.map(graphData => {
                let GraphSection = new Component({
                    htmlTagName: 'div',
                    attr: {
                        className: 'graph-section',
                    }
                });
                let {title, details} = graphData;
                let Subheading;
                let GraphItem;

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
                    GraphItem = new GraphBlock({
                        htmlTagName: 'div',
                        attr: {
                            className: 'graphBlock',
                        }
                    });
                }
                GraphSection.setInnerHTML(Subheading, GraphItem.renderData(details));

                return GraphSection.getHTMLElem();
            });
        }
        this.setInnerHTML(Heading, ...Content);

        return this.getHTMLElem();
    }
}

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}