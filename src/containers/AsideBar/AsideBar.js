'use strict';

//import {getAxios} from '../../utils/services/index'

import "./AsideBar.scss";
import Container from "../../containers/Container/Container";
import Component from "../../components/Component/Component";

/**@description
 *
 * it is scalable and can be added with additional, special for the AsideBar functionality...
 * **/
const AsideBar = new Container({
    htmlTagName: "div",
    className: "asideBar",
    dataName: 'aside',
});

AsideBar.parseData = function(innData) {
/*    let fullName,
        imageContainer,
        sectionList,
        sections,
        asideContent;*/

log(innData, 'innData in the AsideBar');

    const {fullName, photoUrl, ...data} = innData;

    log(data, 'data from the AsideBAr');

    const headingFullName = new Component({
        htmlTagName: 'h1',
        innerHTML: fullName,
    });

    const image = new Image();
    image.src = photoUrl;

    const ImageContainer = new Component({
        htmlTagName: 'div',
        className: 'imageContainer',
        innerHTML: image,
    });

    log(ImageContainer, 'ImageContainer');

    /**@description
     *
     * **/
    const sectionList = new Component({
        htmlTagName: 'ul',
        className: 'sectionList',
    });

    this.innerHTML = [headingFullName, ImageContainer];
};





export default AsideBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}