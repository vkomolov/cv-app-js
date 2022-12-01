'use strict';

import "./ContentBar.scss";
import Container from "../../containers/Container/Container";

const ContentBar = new Container({
    htmlTagName: "div",
    attr: {
        className: "contentBar",
    },
    dataName: 'content',
});

/*ContentBar.parseData = function(innData) {

};*/

export default ContentBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}