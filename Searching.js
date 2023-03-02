const f = document.getElementById('form');
const q = document.getElementById('query');
/*const google = 'https://www.google.com/search?q=';*/
const tasnim = 'https://www.tasnimnews.com/fa/search?query=';
/*const site = 'MainP.html';*/

function submitted(event) {
    event.preventDefault();
    const url = tasnim + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
}

f.addEventListener('submit', submitted);