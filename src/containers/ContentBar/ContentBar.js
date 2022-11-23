'use strict';

import "./ContentBar.scss";
import Component from "../../components/Component/Component";

const ContentBar = new Component({
    htmlTagName: "div",
    className: "contentBar",
    innerHTML: "Hello from CONTENTBAR!!!"
});

ContentBar.renderData = function (data) {
    log(data, 'received to ContentBar: ');
    return this.getHTMLElem();
};

export default ContentBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}