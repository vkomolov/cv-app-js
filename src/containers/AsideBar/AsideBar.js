'use strict';

import "./AsideBar.scss";
import Component from "../../components/Component/Component";
import AsideContent from "../../components/AsideContent/AsideContent";

/**
 * it is scalable and can be added with additional, special for the AsideBar functionality with adding own methods...
 * @extends Component {@link Component}
 * @type {Component}
 * **/
const AsideBar = new Component({
    htmlTagName: "div",
    attr: {
        className: "asideBar",
    }
});
AsideBar.dataName = 'aside';

/**
 * It receives the fetched data, active filter and the callbacks:
 * for dispatching Alert Data {@link dispatchAlert}
 * for setting a new filter, which then will initiate re-rendering elements with the new data
 * It creates the elements and writes the data to innerHTML
 *
 */
AsideBar.renderData = function (innData) {
    const {dispatchAlert, setFilter, filterActive, data} = innData;
    const {fullName, photoUrl, ...innerData} = data;

    //heading
    let HeadingFullName;
    //new Image()
    let image;
    //image container
    let ImageContainer;
    //list of sections which changes the filter on click and rerender new content
    let SectionList;
    //prepared data for sending to the children
    let dataAside;

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

        if (target.dataset.section && target.dataset.section !== filterActive) {
            /**callback to App with changing setter filter and rerendering the elements with a new content**/
            setFilter(target.dataset.section);
        }
    });

    if (filterActive && innerData[filterActive]) {
        dataAside = innerData[filterActive][this.dataName];

        this.setInnerHTML(HeadingFullName, ImageContainer, SectionList, AsideContent.renderData(dataAside));

    } else {
        dispatchAlert('error', new Error(`filter ${filterActive} is not in the list of filters`));
    }
};

export default AsideBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}