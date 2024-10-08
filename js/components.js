function getElement(element) {
    return document.getElementById(element);
}

async function loadHtml(component) {
    const response = await fetch(`/components/html/${component}.html`);

    if (!response.ok) 
        throw new Error(`Failed to fetch HTML for ${component}`);
    
    return response.text();
}

async function loadCss(component) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/components/css/${component}.css`;

    document.head.appendChild(link);
}

async function loadComponent(component, element) {
    if (!component) {
        console.error("Error empty component");
        return;
    }

    component = component.toLowerCase();
    
    try {
        const [html, link] = await Promise.all([
            loadHtml(component),
            loadCss(component)
        ]);

        element.innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${component}: ${error.message}`);
    }
}

export async function Footer() {
    const footer = getElement("footer"); 
    if (!footer) return;

    loadComponent("footer", footer);
}

export async function Header() {
    const header = getElement("header"); 
    if (!header) return;

    await loadComponent("header", header);

    const menuToggleBtn = document.getElementById('menu-toggle');
    menuToggleBtn.addEventListener('click', menuToggle);
}

function menuToggle() {
    const menuLinks = document.getElementById('menu-box');
    const menuIcon = document.getElementById('menu-icon');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    if (menuLinks.classList.contains('hidden')) {
        menuLinks.classList.remove('hidden');
        menuLinks.classList.add('show');
        menuIcon.src = "/assets/icons/menu-open.png"; 
    } else {
        menuLinks.classList.remove('show');
        menuLinks.classList.add('hidden');
        menuIcon.src = "/assets/icons/menu-closed.png"; 
    }
}