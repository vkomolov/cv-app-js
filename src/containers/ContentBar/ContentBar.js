'use strict';

import './ContentBar.scss';
import Component from '../../components/Component/Component';
import ContentItem from '../../components/ContentItem/ContentItem';

/**@description
 *
 * it is scalable and can be added with additional, special for the AsideBar functionality...
 * **/
const ContentBar = new Component({
    htmlTagName: "div",
    attr: {
        className: "contentBar",
    },
    dataName: 'content',
});

ContentBar.renderData = function(innData) {
    const {dispatchError, filterActive, data} = innData;
    const contentData = data[filterActive].content;
    let HeadingElem;
    let contentArr;

    /** heading **/
    if (contentData['title']) {
       HeadingElem = new Component({
           htmlTagName: 'h2',
           attr: {
               className: 'heading'
           },
           innerHTML: contentData['title'],
       });
    }

    if (contentData['details'] && Array.isArray(contentData['details'])) {
        contentArr = contentData['details'].map(data => {

            return new ContentItem({
                htmlTagName: 'div',
                attr: {
                    className: 'contentWrapper',
                }
            }).renderData(data);
        });
    }

    if (HeadingElem && contentArr && contentArr.length) {
        this.setInnerHTML(HeadingElem, ...contentArr);
    }

    return this.getHTMLElem();
};

export default ContentBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}