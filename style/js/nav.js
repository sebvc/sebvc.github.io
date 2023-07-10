document.addEventListener('DOMContentLoaded', function () {
  var navDropdownButton = document.getElementById('navDropdownButton');

  navDropdownButton.addEventListener('shown.bs.dropdown', function () { //Active Dropdown
    navDropdownButton.innerHTML = '<i class="d-inline-flex fa-solid fa-xmark fs-3"></i><img class="d-none d-lg-inline-flex" src="/~sebvc/content/images/CrabHowdy!.png" alt="Home" height="75"><img class="d-none d-sm-inline-flex d-lg-none" src="/~sebvc/content/images/favicon.png" alt="Home" height="44" style="margin-top: 12px; margin-bottom: 12px;"> <img class="d-inline-flex d-sm-none py-1" src="/~sebvc/content/images/logo.png" alt="Home" height="40">'
  });
  navDropdownButton.addEventListener('hidden.bs.dropdown', function () { //
    navDropdownButton.innerHTML = '<i class="d-inline-flex fa-solid fa-bars fs-3"></i><img class="d-none d-lg-inline-flex" src="/~sebvc/content/images/CrabHowdy!.png" alt="Home" height="75"><img class="d-none d-sm-inline-flex d-lg-none" src="/~sebvc/content/images/favicon.png" alt="Home" height="44" style="margin-top: 12px; margin-bottom: 12px;"> <img class="d-inline-flex d-sm-none py-1" src="/~sebvc/content/images/logo.png" alt="Home" height="40">'
  });
});
