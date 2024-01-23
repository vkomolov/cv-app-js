'use strict';

import "./ContentItem.scss";
import Component from "../Component/Component";

export default class ContentItem extends Component {
    constructor(props) {
        super(props);
    }
    ///////////////// END OF CONSTRUCTOR /////////////////

    renderData(innData) {
/** list of new Components **/
        const elemsArr = [];
        let innerContentBlock;
        let remark;

        if (innData['subheading']) {
            elemsArr.push(new Component({
                htmlTagName: 'h3',
                innerHTML: innData['subheading'],
            }));
        }

        if (innData['comments']) {
            elemsArr.push(new Component({
                htmlTagName: 'h4',
                innerHTML: innData['comments'],
            }));
        }

        if (innData['p'] && Array.isArray(innData['p'])) {
            let contentTextArr = innData['p'].map(text => {
                return new Component({
                    htmlTagName: 'p',
                    innerHTML: text,
                });
            });
            /** can be pushed as array or spreading array **/
            elemsArr.push(...contentTextArr);
        }

        if (innData['a'] && Array.isArray(innData['a'])) {
            const linkArr = innData['a'].map(it => {
                return new Component({
                    htmlTagName: 'li',
                    innerHTML: new Component({
                        htmlTagName: 'a',
                        attr: {
                            className: 'link',
                            href: it.path,
                            target: '_blank',
                            rel: 'noreferrer noopener nofollow',
                            title: 'follow the link for review...'
                        },
                        innerHTML: it.title,
                    }),
                });
            });

            elemsArr.push(new Component({
                htmlTagName: 'ul',
                innerHTML: linkArr,
            }));
        }

        if (innData['li'] && Array.isArray(innData['li'])) {
            const listArr = innData['li'].map(item => {
                return new Component({
                    htmlTagName: 'li',
                    innerHTML: item
                });
            });

            elemsArr.push(new Component({
                htmlTagName: 'ul',
                innerHTML: listArr,
            }));
        }

        if (innData['file'] && Array.isArray(innData['file'])) {
            const filesArr = innData['file'].map(it => {
                return new Component({
                    htmlTagName: 'li',
                    innerHTML: new Component({
                        htmlTagName: 'a',
                        attr: {
                            className: 'link',
                            href: it.path,
                            target: "_blank",
                            title: `Save ${it.title} (pdf format)`,
                            download: true,
                        },
                        innerHTML: it.title,
                    }),
                });
            });

            elemsArr.push(new Component({
                htmlTagName: 'ul',
                innerHTML: filesArr,
            }));
        }

        if (innData['remark']) {
            remark = new Component({
                htmlTagName: 'div',
                attr: {
                    className: 'remarkCol'
                },
                innerHTML: new Component({
                    htmlTagName: 'span',
                    attr: {
                        className: 'remark'
                    },
                    innerHTML: innData['remark'],
                }),
            });
        }

        innerContentBlock = new Component({
            htmlTagName: 'div',
            attr: {
                className: 'contentBlock',
            },
            innerHTML: elemsArr,
        });

        this.setInnerHTML(remark, innerContentBlock);

        return this.getHTMLElem();
    };
}

////  dev  /////////////////////////////
function log(it, comments="value: ") {
    console.log(comments, it);
}