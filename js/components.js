export function getElement(elementId) {
    return document.getElementById(elementId);
}

async function loadHtml(component) {
    const response = await fetch(`/components/${component}.html`);

    if (!response.ok) 
        throw new Error(`Failed to fetch HTML for ${component}`);
    
    return response.text();
}

async function loadCss(component) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/css/components/${component}.css`;

    document.head.appendChild(link);
}

export async function loadComponent(component, element) {
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