// Copy to clipboard function
function copyURI(evt) {
  evt.preventDefault();
  navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
    console.log('link copied succesfully')
  }, () => {

  });
}

// Show copy to clipboard message function 
function showMessage(evt) {
  evt.preventDefault();
  document.getElementById('copied_message').style.display = "block";
}

// Hide copy to clipboard message function 
window.setTimeout("hideMessage();", 5000);

function hideMessage() {
  document.getElementById("copied_message").style.display = " none";
}

// Scroll Up Button Function 
scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

