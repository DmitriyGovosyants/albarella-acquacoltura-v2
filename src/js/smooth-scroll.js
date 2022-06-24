import { refs } from "./refs";

const handleAnchorTo = e => {
  e.preventDefault();
  let anchorName = e.currentTarget.href.split('#')[1];
  // console.log(targ)
  // const anchorName = e.currentTarget.dataset.id;
  const anchor = document.querySelector(`#${anchorName}`);

      
  window.scroll({
    left: 0,
    top: anchor.offsetTop - 100,
    behavior: 'smooth'
  });
}

for (let anchor of refs.anchors) {
  anchor.addEventListener('click', handleAnchorTo);
}