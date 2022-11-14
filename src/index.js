import './styles/normalize.css';
import './styles/scss/index.scss';

import cvJson from "./assets/json/cv.json";

const root = document.getElementById('root');

log(root);

log(cvJson, "JSON: ");

//dev
function log(it, comments='value: ') {
    console.log(comments, it);
}