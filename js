/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const nav = document.getElementById('navbar__list');

const sectionList = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/* Creates element for sections with data navigation as well as ID using template literals.*/
function createNav (name, id) {
  const literal = `<a class ="navbar__menu" data-id="${id}">${name}</a>`;

    return literal;

}
/* finding dimension in regard to viewport */
function activeViewport (section) {
  const bound = section.getBoundingClientRect();
  return (
    bound.top >= 0
    bound.left >= 0
    bound.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    bound.right <= (window.InnerWidth || document.document.Element.clientWidth)
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/



// build the nav


// Add class 'active' to section when near top of viewport
/* */
const activeClass = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: magenta;";
    }
};

/* Removing active class */
const removeActive = function (section) {
    section.classList.remove('your-active-class');
    section.style.cssText= "background-color:black;";
  }



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/
document.addEventListener('scroll', function(){
    setActiveClass();

// Build menu
navCreate ();
// Scroll to section on link click

// Set sections as active
