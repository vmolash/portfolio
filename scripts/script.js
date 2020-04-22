// active link sets to green color when click on it
let navContainer = document.getElementById('nav');
let navItems = navContainer.getElementsByClassName('nav-item');

for(let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// paragraph on the Coctact section changes text color to green with delay
let clickedContactLink = document.querySelector('[href="#contact"]');
console.log(clickedContactLink)
let parConctact = document.getElementsByClassName('connect');
console.log(parConctact[0]);

clickedContactLink.addEventListener('click', function() {
  setTimeout(changeColor, 2000);
})
function changeColor() {
  parConctact[0].classList.add('active');
}

// logo VM changes to Volha Molash when hover over on it
let logoName = document.querySelector('.logo');
console.log(logoName);
logoName.addEventListener('mouseover', function() {
  this.innerHTML = 'Volha Molash';
  let stringName = this.textContent.split(' ');
  console.log(stringName);
  let hoverName = '';
  for(let i = 0; i < stringName.length; i++) {
    hoverName += stringName[i].charAt(0) + stringName[i].slice(1).toLowerCase() + ' ';
  }
  console.log(hoverName);
  this.innerHTML = hoverName;
  this.style.transition = "all 1s ease-out";
});
logoName.addEventListener('mouseout', function(e) {
  e.target.innerHTML = 'VM';
});
