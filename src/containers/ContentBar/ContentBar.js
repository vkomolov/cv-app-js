'use strict';

import "./ContentBar.scss";
import Container from "../../containers/Container/Container";

const ContentBar = new Container({
    htmlTagName: "div",
    className: "contentBar",
    innerHTML: "Hello from CONTENTBAR!!!",
    dataName: 'content',
});

export default ContentBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}