// active link sets to green color when click on it
const NAVCONTAINER = document.querySelector('nav');
const NAVITEMS = NAVCONTAINER.getElementsByClassName('nav-item');

for(let i = 0; i < NAVITEMS.length; i++) {
  NAVITEMS[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// paragraph on the Coctact section changes text color to green with delay
const CLICKEDCONTACTLINK = document.querySelector('[href="#contact"]');

let PARCONTACT = document.getElementsByClassName('connect');


CLICKEDCONTACTLINK.addEventListener('click', function() {
  setTimeout(changeColor, 2000);
})
function changeColor() {
  PARCONTACT[0].classList.add('active');
}

// logo VM changes to Volha Molash when hover over on it
const LOGONAME = document.querySelector('.logo');

LOGONAME.addEventListener('mouseover', function() {
  this.innerHTML = 'Volha Molash';
  let stringName = this.textContent.split(' '); // convert to array
  console.log(stringName);
  let hoverName = '';
  for(let i = 0; i < stringName.length; i++) {
    hoverName += stringName[i].charAt(0) + stringName[i].slice(1).toLowerCase() + ' ';
  }
  this.innerHTML = hoverName;
  this.style.transition = "all 1s ease-out";
});
LOGONAME.addEventListener('mouseout', function(e) {
  e.target.innerHTML = 'VM';
});

// Hide navigation on mobile version when click on any link
console.log(window.screen.width);
const NAVIGAT = document.querySelector('nav');
const LAB = document.querySelector('label');

if(window.screen.width < 500) {
  LAB.addEventListener('click', function() {
    NAVIGAT.classList.toggle('show');
    
  });
  NAVIGAT.addEventListener('click', function() {
    this.classList.toggle('show');
    
  });
}

const HOME = document.querySelector('.home');

if(window.screen.width > 630) {
  HOME.parentNode.removeChild(HOME);
}

