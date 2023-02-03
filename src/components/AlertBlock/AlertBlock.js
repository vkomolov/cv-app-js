import Component from "../Component/Component";
import "./AlertBlock.scss";

const AlertBlock = new Component({
    htmlTagName: "div",
    attr: {
        id: "alert-block",
    }
});

AlertBlock.renderData = function (innData) {

    //log(innData, 'innData inside AlertBlock');

    const {type, contentArr} = innData;
    //log(contentArr, 'data inside AlertBlock');
    if (Array.isArray(contentArr) && contentArr.length) {
        const alertContentArr = contentArr.map(text => {
            let className = null;
            if (type === 'error') {
                className = 'alert-error';
            }
            else if (type === 'loading') {
                className = 'alert-loading'
            }

            return new Component({
                htmlTagName: 'span',
                attr: {
                    className: className,
                },
                innerHTML: text,
            });
        });

        this.setInnerHTML(new Component({
            htmlTagName: 'div',
            attr: {
                className: 'alert-content-block',
            },
            innerHTML: alertContentArr,
        }));
    }

    return this.getHTMLElem();
};

export default AlertBlock;

///////////////// dev
function log(it, comments='value: ') {
    console.log(comments, it);
}