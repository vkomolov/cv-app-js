'use strict';

import "./styles/normalize.css";
import "./styles/scss/index.scss";

import App from "./containers/App/App";
import AlertBlock from "./components/AlertBlock/AlertBlock";

const rootApp = new App({
    htmlTagName: "div",
    className: "totalWrapper",
    id: "app",
    filterOption: [
        "personal",
        "experience",
        "education"
    ],
});

log(rootApp, 'rootApp:');

const root = document.getElementById('root');
root.append(rootApp.getHTMLElem());
rootApp.getAndRenderData('./assets/json/cv');
//rootApp.setFilter('experience');
//rootApp.filter = 'experience';
//log(rootApp.filter, 'rootApp.filter');



//AlertBlock.attachToID('root');


////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}