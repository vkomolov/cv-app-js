'use strict';

import './styles/normalize.css';
import './styles/scss/index.scss';

import App from './containers/App/App';
import AlertBlock from './components/AlertBlock/AlertBlock';

const rootApp = new App({
    htmlTagName: 'div',
    attr: {
        className: 'totalWrapper',
        id: 'app',
    }
});

const root = document.getElementById('root');

root.append(rootApp.getHTMLElem());
rootApp.getAndRenderData('./assets/json/cv.json');

//AlertBlock.attachToID('root');


////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}