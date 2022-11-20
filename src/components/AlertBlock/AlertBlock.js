import Component from "../Component/Component";
import "./AlertBlock.scss";

const AlertBlock = new Component({
    htmlTagName: "div",
    id: "alert-block",
    innerHTML: "<span>Loading</span><span>please wait...<span/>"
});

export default AlertBlock;