// Toggle function to support dark mode

document.querySelector('.toggle').addEventListener('click', function() {
    this.classList.add('animate');
    
    setTimeout(() => {
        this.classList.toggle('active');
    }, 150);
    
    setTimeout(() => this.classList.remove('animate'), 300);
    
});
