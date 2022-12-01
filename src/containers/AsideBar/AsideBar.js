'use strict';

import "./AsideBar.scss";
import Container from "../../containers/Container/Container";
import Component from "../../components/Component/Component";

/**@description
 *
 * it is scalable and can be added with additional, special for the AsideBar functionality...
 * **/
const AsideBar = new Container({
    htmlTagName: "div",
    attr: {
        className: "asideBar",
    },
    _dataName: 'aside',
});

AsideBar.parseData = function(innData) {
    const {fullName, photoUrl, ...data} = innData;
    let headingFullName;
    let image;
    let ImageContainer;
    let sectionList;

    //log(data, 'data in the AsideBAr');
    //log(this._htmlElem, 'this._htmlElem: ');

    headingFullName = new Component({
        htmlTagName: 'h1',
        innerHTML: fullName,
    });

    image = new Image();
    image.src = photoUrl;

    //log(image, 'image');    //<img src="./assets/img/vk.png">
    //log(image.nodeType, 'image.nodeType: ');    //1

    ImageContainer = new Component({
        htmlTagName: 'div',
        attr: {
            className: 'imageContainer',
        },
        innerHTML: image,
    });

    /**@description
     *
     * **/
    sectionList = new Component({
        htmlTagName: 'ul',
        attr: {
            className: 'sectionList',
        },
    });

    /////////////// VER //////////////
    Object.keys(data).forEach(key => {
        let specClass = key === this.filterActive
            ? 'sectionName specClass'
            : 'sectionName toBeHovered';

/*        let li = new Component({
            htmlTagName: 'li',
            attr: {
                className: specClass,
            },
            innerHTML: key,
        });*/

        sectionList.append(new Component({
            htmlTagName: 'li',
            attr: {
                className: specClass,
                dataParams: [
                    ['section', key]
                ],
            },
            innerHTML: key,
        }));
    });

    sectionList.getHTMLElem().addEventListener('click', (e) => {
        let target = e.target;
        log(target.dataset.section, 'target.dataset.section');

        this.setFilter(target.dataset.section);
    });

    //this.append(headingFullName, ImageContainer, sectionList);
    this.innerHTML = [headingFullName, ImageContainer, sectionList];
};

log(AsideBar, 'AsideBar');

export default AsideBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}