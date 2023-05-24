

let scrollTimeout: number;

function setScrollbarWidth(value: number) {
    window.document.body.style.setProperty('--scroll-bar-width', `${value}px`);
}

export function handleScrollBar(){
    // setScrollbarWidth(10);
    // window.clearTimeout(scrollTimeout);
    // scrollTimeout = window.setTimeout(() => setScrollbarWidth(0), 1000);
}