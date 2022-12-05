'use strict';

import "./AsideContent.scss";
import Component from "../../components/Component/Component";
import AsideItem from "../AsideItem/AsideItem";

const AsideContent = new Component({
    htmlTagName: 'div',
    attr: {
        className:'topWrapper',
    },
});

AsideContent.renderData = function (dataAside) {
    /** to filter from possible not array data... **/
    const keysArr = Object.keys(dataAside).filter(key => {
        return Array.isArray(dataAside[key]);
    });

    log(keysArr, 'keysArr inside AsideContent: ');

    /////////// ver ///////
    keysArr.forEach(key => {

        let AsideSegment = new Component ({
            htmlTagName: 'div',
            attr: {
                className: 'segment-block',
            }
        });
        AsideSegment.segmentName = key;

        dataAside[key].forEach(dataItem => {
            let newAsideItem = new AsideItem({
                htmlTagName: 'div',
                attr: {
                    className: 'aside-item-wrapper',
                }
            });

            AsideSegment.append(newAsideItem.renderData(dataItem));
        });

        this.append(AsideSegment);
    });

    return this.getHTMLElem();
};

export default AsideContent;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}