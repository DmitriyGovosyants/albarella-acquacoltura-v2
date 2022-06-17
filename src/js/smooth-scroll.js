import { refs } from "./refs";

const handleAnchorTo = e => {
    e.preventDefault();
    
    const anchorName = e.target.dataset.id;
    const anchor = document.querySelector(`#${anchorName}`);
      
    window.scroll({
        left: 0,
        top: anchor.offsetTop - 80,
        behavior: 'smooth'
    });
}

for (let anchor of refs.anchors) {
  anchor.addEventListener('click', handleAnchorTo);
}