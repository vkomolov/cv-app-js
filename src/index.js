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
rootApp.attachToID('root');
rootApp.getAndRenderData('./assets/json/cv');


//AlertBlock.attachToID('root');


////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}