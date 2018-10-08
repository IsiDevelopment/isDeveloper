  var ypos, image;
  function parallex() {
    ypos = window.pageYOffset
    image = document.getElementById('image_font')
    image.style.top = ypos * .6 + 'px'
  }
  window.addEventListener('scroll', parallex);
