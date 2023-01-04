'use strict';

import './styles/reset.css';
import './styles/scss/index.scss';

import App from './containers/App/App';

const rootApp = new App({
    htmlTagName: 'div',
    attr: {
        className: 'totalWrapper',
        id: 'app',
    }
});

const root = document.getElementById('root');
root.append(rootApp.getHTMLElem());
rootApp.getAndRenderData('./assets/pData/cv.json', 1000);

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}