// written by Bardia Asgari Ahi (☞ﾟヮﾟ)☞
const form = document.getElementById('search-form');
const query = document.querySelector('#search-form input[type="search"]');
const tasnimSearchUrl = 'https://www.tasnimnews.com/fa/search?query=';

function submitted(event) {
    event.preventDefault();
    const url = tasnimSearchUrl + encodeURIComponent(query.value);
    const win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        alert("Failed to open the search results. Please check your browser settings and try again.");
    }
}

form.addEventListener('submit', submitted);

// Get all anchor elements
const anchors = document.querySelectorAll('a'); 

// Loop through each anchor 
anchors.forEach(a => {

  // Add target="_blank" 
  a.setAttribute('target', '_blank');

});
// written by Bardia Asgari Ahi (☞ﾟヮﾟ)☞