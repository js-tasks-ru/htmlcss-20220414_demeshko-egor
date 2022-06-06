(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        document.body.overflow = 'initial';
    });
})();
