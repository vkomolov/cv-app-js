'use strict';

import "./ContentBar.scss";
import Component from "../../components/Component/Component";

const ContentBar = new Component({
    htmlTagName: "div",
    attr: {
        className: "contentBar",
    },
    dataName: 'content',
});

ContentBar.renderData = function(data) {
    return this.getHTMLElem();
}

/*ContentBar.parseData = function(innData) {

};*/

export default ContentBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}