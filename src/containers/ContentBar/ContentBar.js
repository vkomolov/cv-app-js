'use strict';

import './ContentBar.scss';
import Component from '../../components/Component/Component';
import ContentItem from '../../components/ContentItem/ContentItem';
import iconJs from '../../asset/img/js.png';

/**@description
 *
 * it is scalable and can be added with additional, special for the AsideBar functionality...
 * **/
const ContentBar = new Component({
    htmlTagName: 'div',
    attr: {
        className: 'contentBar fade-in',
    },
});

ContentBar['dataName'] = 'content';

ContentBar.renderData = function(innData) {
    const thisHtml = this.getHTMLElem();
    const {dispatchAlert, filterActive, data} = innData;
    let contentData;
    let HeadingElem;
    let contentArr;
    let specClassName;

    if (filterActive && data[filterActive]) {
        contentData = data[filterActive][this.dataName];
        specClassName = filterActive === 'personal' ? 'personal-spec' : null;

    } else {
        dispatchAlert('error', new Error(`filter ${filterActive} is not in the list of filters`));
    }

    /** heading **/
    if (contentData['title']) {
       HeadingElem = new Component({
           htmlTagName: 'h2',
           attr: {
               className: 'heading',
           },
           innerHTML: contentData['title'],
       });
    }

    if (contentData['details'] && Array.isArray(contentData['details'])) {
        contentArr = contentData['details'].map(data => {
            let classOut = specClassName && ('contentWrapper' + ' ' + specClassName) || 'contentWrapper';

            return new ContentItem({
                htmlTagName: 'div',
                attr: {
                    className: classOut,
                }
            }).renderData(data);
        });
    }

    const jsIcon = new Image();
    jsIcon.alt = 'js icon';
    jsIcon.src = iconJs;
    const iconWrapper = new Component({
        htmlTagName: 'div',
        attr: {
            className: 'jsIconContainer',
        },
        innerHTML: jsIcon,
    });

    if (HeadingElem && contentArr && contentArr.length) {
        this.setInnerHTML(HeadingElem, iconWrapper, ...contentArr);
    }


    thisHtml.classList.toggle('fade-in');
    setTimeout(() => {
        thisHtml.classList.toggle('fade-in');
    }, 200);

    return thisHtml;
};

export default ContentBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}