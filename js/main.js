import { getElement, loadComponent } from "/js/components.js";

const header = getElement("header");
const footer = getElement("footer");

loadComponent("header", header);
loadComponent("footer", footer);