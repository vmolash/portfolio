// Active link sets to green color when click on it
const NAVCONTAINER = document.querySelector('nav');
const NAVITEMS = NAVCONTAINER.getElementsByClassName('nav-item');

for(let i = 0; i < NAVITEMS.length; i++) {
  NAVITEMS[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// Paragraph on the Coctact section changes text color to green with delay and Social icons appear from right side
const CLICKEDCONTACTLINK = document.querySelector('[href="#contact"]');
const PARCONTACT = document.getElementsByClassName('connect');
const SOCIALICONS = document.querySelectorAll(".icon");

CLICKEDCONTACTLINK.addEventListener('click', function() {
  // SOCIALICONS.forEach(function(el) {
  //   el.classList.add('social-icon');
  // })
  setTimeout(changeColorPosition, 1000);
  
})

function changeColorPosition() {
  SOCIALICONS.forEach(function(el) {
    el.classList.add('appearArt');
  });
  PARCONTACT[0].classList.add('active');
  setInterval(blickGreen, 5000);

  function blickGreen() {
    PARCONTACT[0].classList.toggle('blick');
  }
}

// Logo VM changes to Volha Molash when hover over on it
const LOGONAME = document.querySelector('.logo');

LOGONAME.addEventListener('mouseenter', function() {
  this.innerHTML = 'Volha Molash';
  this.style.transition = "all 1s ease-out";
});
LOGONAME.addEventListener('mouseout', function() {
  this.innerHTML = 'VM';
});

// Hide navigation on mobile version when click on any link
console.log(window.screen.width);
const NAVIGAT = document.querySelector('nav');
const LAB = document.querySelector('label');


// function navMobile() {
//   if(window.screen.width < 500) {
//     LAB.addEventListener('click', function() {
//       NAVIGAT.classList.toggle('show');
//     });
//     NAVIGAT.addEventListener('click', function() {
//       this.classList.toggle('show');
//     });
//   }
  // if(window.screen.width >= 500 && window.screen.width <=630) {

  // }
//   if(window.screen.width > 630) {
//     HOME.parentNode.removeChild(HOME);
//   }
// }
// window.onresize = navMobile;

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

// PROJECT card animation 
const CARDCONTENT = document.getElementsByClassName('card-content'); // all div.card-content
const CARDREVEAL = document.querySelectorAll('.card-reveal i'); // all i of div.card-reveal

for(let i = 0; i < CARDCONTENT.length; i++) {
  CARDCONTENT[i].addEventListener('click', revealCard);
}
// reveal/show card when content card is clicked
function revealCard(e) {
  e.preventDefault();

  let myID = this.id; // store clicked div.card-content ID
  let revealID = myID.replace('content', 'reveal'); // store div.card-reveal of clicked div.card-content
  document.getElementById(revealID).classList.toggle('activeCard'); //
};

// hide reveal card when reveal card is clicked
for(let i = 0; i < CARDREVEAL.length; i++) {
  CARDREVEAL[i].addEventListener('click', hideRevealCard);
}
function hideRevealCard(e) {
    this.parentNode.classList.remove('activeCard');
}

// Skills section. When click on nav menu 'Skills', articles start to appear
const CLICKEDSKILLSLINK = document.querySelector('[href="#skills"]');
const ARTSKILLS = document.querySelectorAll('article');

CLICKEDSKILLSLINK.addEventListener('click', function() {
  ARTSKILLS.forEach(function(el) {
    el.classList.add('disappearArt');
  });
  setTimeout(appearArticles, 1000);
})
function appearArticles() {
  for(let i = 0; i < ARTSKILLS.length; i++) {
    ARTSKILLS[i].classList.add('appear');
  }
}

// SCROLLING
const faders = document.querySelectorAll('article');
    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting) { // if not true
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target); // it's not nessesary, because we don't use toggle class, we just add class
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })
    SOCIALICONS.forEach(icon => {
      appearOnScroll.observe(icon);
    })


    const mainSections = document.querySelectorAll('section');
    const appearSections = {
      threshold: 0,
      rootMargin: '0px 0px -200px 0px'
  };

  
    const activeOnScroll = new IntersectionObserver(function(entries, activeOnScroll){
      
      entries.forEach(entry => {
        let id = entry.target.id;
        let link = document.querySelector('[href="#'+id+'"');
          if(!entry.isIntersecting) { // if not true
              return;
          } else {
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            link.classList.add('active');
          }
      });
  }, appearSections);
  
  mainSections.forEach(section => {
    activeOnScroll.observe(section);
  })


