document.querySelectorAll('.mesa').forEach(table => {
    table.addEventListener('mouseenter', function() {
        this.textContent = this.getAttribute('data-status');
    });
    table.addEventListener('mouseleave', function() {
        this.textContent = this.textContent.includes('Mesa') ? this.textContent : 'Mesa ' + this.dataset.status;
    });
    table.addEventListener('click', function() {
        const infoBox = document.getElementById('infoBox');
        infoBox.textContent = `Mesa ${this.textContent} - Capacidade: ${this.getAttribute('data-capacity')} pessoas`;
        infoBox.style.display = 'block';
        setTimeout(() => { infoBox.style.display = 'none'; }, 3000);
    });
});