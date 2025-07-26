
document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
        const list = button.nextElementSibling;
        list.style.display = (list.style.display === 'block') ? 'none' : 'block';
    });
});
