import "./styles/normalize.css";
import "./styles/scss/index.scss";

import App from "./containers/App/App";

App.attachToID('root');
App.getAndRenderData('./assets/json/cv');



////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}