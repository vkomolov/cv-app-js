'use strict';

import "./AsideBar.scss";
import Component from "../../components/Component/Component";


const AsideBar = new Component({
    htmlTagName: "div",
    className: "asideBar",
    innerHTML: "Hello from ASIDEBAR!!!"
});

AsideBar.renderData = function (data) {
    log(data, 'received to AsideBar: ');
    return this.getHTMLElem();
};

export default AsideBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}