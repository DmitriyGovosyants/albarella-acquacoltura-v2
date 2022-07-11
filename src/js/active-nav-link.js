function getActiveNav() {
  const currentPath = window.document.location.pathname;
  const navLinks = ['products', 'facilities', 'about', 'careers', 'contacts'];

  if (currentPath === '/') {
    const currentNav = document.querySelector(`.js-nav-home`);
    currentNav.classList.add('nav__link--is-active');
    return;
  } else {
    navLinks.map(link => {
      if (currentPath.includes(`/${link}`)) {
        const currentNav = document.querySelector(`.js-nav-${link}`);
        return currentNav.classList.add('nav__link--is-active');
      }
    })
  }
}

getActiveNav()