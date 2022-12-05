'use strict';

import "./AsideItem.scss";
/** components **/
import GraphBlock from "../GraphBlock/GraphBlock";
import Component from "../Component/Component";

export default class AsideItem extends Component {
    constructor(props) {
        super(props);
    }
    ///////////////// END OF CONSTRUCTOR /////////////////

    renderData({...dataItem}) {
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
            log(details, 'inside AsideItem details: ');

            /** content of the AsideItem **/
            Content = new Component({
                htmlTagName: 'span',
                attr: {
                    className: 'spanDetails',
                },
                innerHTML: details,
            });

            log(Content, 'resulting Content for Aside Item with details "string": ');
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

                //log(title, 'title in GraphData');
                //log(details, 'details in GraphData');

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
                    log(details, 'details in subDetails');

                    GraphItem = new GraphBlock({
                        htmlTagName: 'div',
                        attr: {
                            className: 'graphBlock',
                        }
                    });
                }

                GraphSection.innerHTML = [Subheading, GraphItem.renderData(details)];

                return GraphSection.getHTMLElem();
            });
        }

        //switching setter on innerHTML, inherited from Component
        this.innerHTML = [Heading, Content];

        return this.getHTMLElem();
    }
}

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}