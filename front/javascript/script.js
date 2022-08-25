// Copy to clipboard function
function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
      alert('Le message a bien été copié')
    }, () => {
      /* clipboard write failed */
    });
}