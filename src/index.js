import "./styles/normalize.css";
import "./styles/scss/index.scss";

import App from "./containers/App/App";

import cvJson from "./assets/json/cv.json";
log(cvJson, "JSON: ");

App.attachToID('root');
App.fetchData('./assets/json/cv.json');


////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}