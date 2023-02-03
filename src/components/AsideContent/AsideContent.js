'use strict';

import "./AsideContent.scss";
import Component from "../../components/Component/Component";
import AsideItem from "../AsideItem/AsideItem";

const AsideContent = new Component({
    htmlTagName: 'div',
    attr: {
        className:'segment-block-wrapper',
    },
});

AsideContent.renderData = function (dataAside) {
    /** to filter from possible not array data... **/
    const keysArr = Object.keys(dataAside).filter(key => {
        return Array.isArray(dataAside[key]);
    });

    this.setInnerHTML(...keysArr.map(key => {
        let AsideSegment = new Component ({
            htmlTagName: 'div',
            attr: {
                className: 'segment-block',
            }
        });
        AsideSegment.segmentName = key;

        AsideSegment.append(...dataAside[key].map(dataItem => {
            let newAsideItem = new AsideItem({
                htmlTagName: 'div',
                attr: {
                    className: 'aside-item-wrapper',
                }
            });

            return newAsideItem.renderData(dataItem);
        }));

        return AsideSegment.getHTMLElem();
    }));

    return this.getHTMLElem();
};

export default AsideContent;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}