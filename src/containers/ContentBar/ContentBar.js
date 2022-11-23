'use strict';

import "./ContentBar.scss";
import Component from "../../components/Component/Component";

const ContentBar = new Component({
    htmlTagName: "div",
    className: "contentBar",
    innerHTML: "Hello from CONTENTBAR!!!"
});

ContentBar.renderData = function (innData) {
    log(innData, 'received to ContentBar: ');

    if (innData['data'] && 'content' in innData['data']) {
        log(innData['data']['content'], 'content data');

    } else {
        console.log('"content" prop is not found in data...', innData);
        innData.dispatchError(new Error('"aside" prop is not found in data...'));
    }

    return this.getHTMLElem();
};

export default ContentBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}