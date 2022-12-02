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

AsideContent.renderData = function (data) {
    /** to filter from possible not array data... **/
    const keysArr = Object.keys(data).filter(key => {
        return Array.isArray(data[key]);
    });

    log(keysArr, 'keysArr inside AsideContent: ');
    const asideContentArr = keysArr.map(key => {
        return data[key].map(dataItem => {
            let AsideElem = new AsideItem({
                htmlTagName: 'div',
                attr: {
                    className: 'topWrapper'
                },
            });

            return AsideElem.renderData(dataItem);
        });
    });

    this.append(...asideContentArr);

    return AsideContent.getHTMLElem();
};

export default AsideContent;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}