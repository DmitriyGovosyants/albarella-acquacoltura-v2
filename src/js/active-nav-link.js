function getActiveNav() {
  const currentPath = window.document.location.pathname;
  const navLinks = ['products', 'facilities', 'about', 'careers', 'contacts'];

  for (let i = 0; i < navLinks.length; i += 1) {
    if (currentPath.includes(`/${navLinks[i]}`)) {
      const currentNav = document.querySelector(`.js-nav-${navLinks[i]}`);
      return currentNav.classList.add('nav__link--is-active');
    }
  }
  
  const currentNav = document.querySelector(`.js-nav-home`);
  return currentNav.classList.add('nav__link--is-active');
}

getActiveNav()