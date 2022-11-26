'use strict';

import "./AsideBar.scss";
import Container from "../../containers/Container/Container";


const AsideBar = new Container({
    htmlTagName: "div",
    className: "asideBar",
    innerHTML: "Hello from ASIDEBAR!!!",
    dataName: 'aside',
});


export default AsideBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}