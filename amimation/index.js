// DOM
const li = document.getElementsByTagName('li');
for(let i = 0; i < li.length; i++) {
    // getElement
    const trigger = li[i];
    const ul = document.getElementsByTagName('ul')[0];

    // Function
    function createTooltip(alt) {
        ul.insertAdjacentHTML('afterend', `<div id="tooltip"><p>${alt}</p></div>`);
    }

    function fadeIn(tooltip, element) {
        tooltip.style.top = element.offsetTop - tooltip.offsetHeight - 18 + 'px';
        tooltip.style.left = element.offsetLeft + element.offsetWidth / 2 - tooltip.offsetWidth / 2 + 'px';

        tooltip.animate([{opacity: 0}, {opacity: 1}], 300);
    }

    function appTooltip(e) {
        const element = e.target;
        const img = element.childNodes[0];
        const alt = img.alt;
        
        createTooltip(alt);

        const tooltip = document.getElementById('tooltip');

        fadeIn(tooltip, element);
    }

    function removeTooltip() {
        const tooltip = document.getElementById('tooltip');
        tooltip.remove();
    }
    
    // Event
    trigger.addEventListener('mouseenter', appTooltip);
    trigger.addEventListener('mouseleave', removeTooltip);
}
