'use strict';

import "./AsideBar.scss";
import Component from "../../components/Component/Component";
import AsideContent from "../../components/AsideContent/AsideContent";

/**@description
 *
 * it is scalable and can be added with additional, special for the AsideBar functionality...
 * **/
const AsideBar = new Component({
    htmlTagName: "div",
    attr: {
        className: "asideBar",
    }
});
AsideBar.dataName = 'aside';

AsideBar.renderData = function (innData) {
    //log(innData, 'innData: ');

    const {dispatchError, setFilter, filterActive, data} = innData;
    const {fullName, photoUrl, ...innerData} = data;

    /** heading **/
    let HeadingFullName;
    /** new Image() **/
    let image;
    /** image container **/
    let ImageContainer;
    /** list of sections which changes the filter on click and rerender new content **/
    let SectionList;
    /** prepared data for sending to the children **/
    let dataAside;

    //log(innerData, 'innerData');


    HeadingFullName = new Component({
        htmlTagName: 'h1',
        innerHTML: fullName,
    });

    image = new Image();
    image.src = photoUrl;

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
    SectionList = new Component({
        htmlTagName: 'ul',
        attr: {
            className: 'sectionList',
        },
    });

    Object.keys(innerData).forEach(key => {
        let specClass = key === filterActive
            ? 'sectionName specClass'
            : 'sectionName toBeHovered';

        SectionList.append(new Component({
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

    /**@description
     * changing filter by clicking 'ul' elements
     * **/
    SectionList.getHTMLElem().addEventListener('click', (e) => {
        let target = e.target;
        log(target.dataset.section, 'target.dataset.section');

        /**callback to App with changing setter filter and rerendering all the data**/
        setFilter(target.dataset.section);
    });

    if (filterActive && innerData[filterActive]) {
        dataAside = innerData[filterActive][this.dataName];
        log(dataAside, 'dataAside');

/*        this.innerHTML = [
            HeadingFullName,
            ImageContainer,
            SectionList,
            AsideContent.renderData(dataAside)
        ];*/

     this.setInnerHTML(HeadingFullName, ImageContainer, SectionList, AsideContent.renderData(dataAside));

    } else {
        dispatchError(new Error(`filter ${filterActive} is not in the list of filters`));
    }
};

/*AsideBar.parseData = function(innData) {
    const {fullName, photoUrl, ...data} = innData;
    let headingFullName;
    let image;
    let ImageContainer;
    let sectionList;
    let dataAside;
    let innerContent;

    //log(data, 'data in the AsideBAr');
    //log(this._htmlElem, 'this._htmlElem: ');

    /!** heading **!/
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

    /!**@description
     *
     * **!/
    sectionList = new Component({
        htmlTagName: 'ul',
        attr: {
            className: 'sectionList',
        },
    });

    Object.keys(data).forEach(key => {
        let specClass = key === this.filterActive
            ? 'sectionName specClass'
            : 'sectionName toBeHovered';

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

    /!**@description
     * changing filter by clicking 'ul' elements
     * **!/
    sectionList.getHTMLElem().addEventListener('click', (e) => {
        let target = e.target;
        log(target.dataset.section, 'target.dataset.section');

        /!**callback to App with changing setter filter and reparsing all the data**!/
        this.setFilter(target.dataset.section);
    });

    //log(data, 'data inside parsing data...');

    if (this.filterActive && data[this.filterActive]) {
        dataAside = data[this.filterActive][this.dataName];
        log(dataAside, 'dataAside');

        ///<AsideContent { ...{ dataAside }
        ///innerContent = AsideContent.renderData(dataAside);


    }

    //this.append(headingFullName, ImageContainer, sectionList, AsideContent.renderData(dataAside));
    this.innerHTML = [
        headingFullName,
        ImageContainer,
        sectionList,
        AsideContent.renderData(dataAside)
    ];


};*/

log(AsideBar, 'AsideBar');

export default AsideBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}