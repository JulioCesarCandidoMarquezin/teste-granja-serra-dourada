import { getElement, loadComponent } from "./components.js";

const header = getElement("header");
const footer = getElement("footer");

initializeComponents();

function initializeComponents() {
    loadComponent("header", header);
    loadComponent("footer", footer);
}