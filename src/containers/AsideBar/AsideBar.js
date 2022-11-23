'use strict';

import "./AsideBar.scss";
import Component from "../../components/Component/Component";


const AsideBar = new Component({
    htmlTagName: "div",
    className: "asideBar",
    innerHTML: "Hello from ASIDEBAR!!!"
});

AsideBar.renderData = function (innData) {
    log(innData, 'received to AsideBar: ');

    if (innData['data'] && 'aside' in innData['data']) {
        log(innData['data']['aside'], 'aside data');

    } else {
        console.log('"aside" prop is not found in data...', data);
        innData.dispatchError(new Error('"aside" prop is not found in data...'));
    }

    return this.getHTMLElem();
};

export default AsideBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}