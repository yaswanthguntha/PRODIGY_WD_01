var sections = ['home', 'about', 'services', 'contact'];

var scrollCount = 0;

window.onscroll = function() {
  var navbar = document.getElementById('navbar');
  var sectionIndex = scrollCount % sections.length;
  navbar.classList.remove(...sections);
  navbar.classList.add(sections[sectionIndex]);
  scrollCount++;
};

var navItems = document.querySelectorAll('.nav-item');
navItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    this.style.color = '#ffcc00'; //Change font color on hover
  });
  item.addEventListener('mouseout', function() {
    this.style.color = '#fff'; //Restore font color when not hovered
  });
});