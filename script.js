
let button = document.getElementById('tb');
let nav = document.getElementById('np');

button.addEventListener('click', () => {
    if (nav.style.display === "none") {
        return nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }

});


