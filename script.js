//dropdownaa japieliek linka klikskis zem klases top_menu
/*event.preventDefault(); lai apstadinatu funkciju*/
//definejam, ko dara,  funkcija event
//toggle ieliku lai uzspiezot pogu gan parads menu gan aizveras menu
// sis kods zemak, ir lai butu pogai funkcija, uzspiezot paradas un velreiz uzspiezot pazuud

let menu = document.querySelector('.dropdown_link');
menu.onclick = function (event) {
    event.preventDefault();
    document.querySelector('.top_menu').classList.toggle('active');

}

