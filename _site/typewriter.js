function typeWriter(element, text, speed = 50, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// Automatically apply to all elements with class 'typewriter'
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.typewriter').forEach(el => {
        const text = el.getAttribute('data-text') || el.textContent;
        el.textContent = '';
        typeWriter(el, text);
    });
});
