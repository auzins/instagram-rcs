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



//--------------- Šie kodi uztaisa, to ka uzspiezot uz post vai tagged, iezimejas tas uz kuru uzspiez un otrs izlsedzas automatiski------

const gallery_nav = document.querySelector('.gallery_nav');


//querySelector atgirez vienu elementu querySelectorAll var 2 un vairak
gallery_nav.children[0].onclick = function(event) {
    let active_link = gallery_nav.querySelector('.active');
    if (active_link) {
        active_link.classList.remove('active');
    }

   this.classList.add('active');
}

//querySelector atgirez vienu elementu querySelectorAll var 2 un vairak
gallery_nav.children[1].onclick = function(event) {
    let active_link = gallery_nav.querySelector('.active');
    if (active_link) {
        active_link.classList.remove('active');
    }

    this.classList.add('active');
  }
  
//-------------------------------------------------------