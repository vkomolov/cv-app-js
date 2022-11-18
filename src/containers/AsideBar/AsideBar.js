import "./AsideBar.scss";
import Component from "../../components/Component/Component";


const AsideBar = new Component({
    htmlTagName: "div",
    class: "asideBar",
    innerHTML: "Hello from ASIDEBAR!!!"
});

export default AsideBar;

////  dev  /////////////////////////////
function log(it, comments='value: ') {
    console.log(comments, it);
}