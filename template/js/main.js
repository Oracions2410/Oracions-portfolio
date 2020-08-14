console.log('start')
const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.menu')
const scrollButton = document.querySelector('.scroll-top')
const navLinks = document.querySelectorAll('.navbar a')

const sticky = navbar.offsetTop;

for (let i = 0; i < navLinks.length; ++i) {
    navLinks[i].addEventListener('click', function (e) {
        toggleClass(navbar, 'open')
    })
}

window.onscroll = function () {
    //console.log(window.pageYOffset, sticky)
    if (window.pageYOffset >= (sticky)) {
        console.log('Dédaaaannnnnnnns')
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}

onClickMenu(navbar)

menu.addEventListener('click', function (e) {
    e.stopPropagation()
    toggleClass(navbar, 'open')
})

scrollButton.addEventListener('click', function (e) {
    scrollToTop(500)
})

document.addEventListener('scroll', function (e) {
    //console.log(document.scrollingElement.scrollTop)
    manageScrollButton()
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



/**------------------------ Funtcions ------------------------------- */

function onClickMenu(navbar) {
    document.addEventListener("click", (evt) => {
        const flyoutElement = navbar
        let targetElement = evt.target; // clicked element

        do {
            if (targetElement == flyoutElement) {
                // This is a click inside. Do nothing, just return.
                navbar.classList.remove('open')
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

        // This is a click outside.
        navbar.classList.remove('open')

    });
}

function manageScrollButton() {
    if (document.scrollingElement.scrollTop === 0) {
        scrollButton.style.opacity = 0
    } else if (document.scrollingElement.scrollTop > 650) {
        scrollButton.style.opacity = 1
    }
}

function toggleClass(el, className) {
    const c = el.classList

    for (let i = 0; i < c.length; ++i) {
        if (c[i] === className) {
            el.classList.remove(className)
            return
        }
    }
    el.classList.add(className)

}

function scrollToTop(duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0, oldTimestamp = null;

    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}




/*------------ PROJECTS ---------------*/

const blackout = document.querySelector('.blackout')
const modal = document.querySelector('.popup-modal')
const btnCloseModal = document.querySelector('.btn-close-modal')
const projectItems = document.querySelectorAll('.section-list-item.project')

projectItems.forEach(function (item) {
    item.addEventListener('click', function () {
        blackout.classList.add('is-blackedout')
        modal.classList.add('is-visible')
    })
})

blackout.addEventListener('click', function () {
    modal.classList.remove('is-visible')
    blackout.classList.remove('is-blackedout')
})

btnCloseModal.addEventListener('click', function (e) {
    modal.classList.remove('is-visible')
    blackout.classList.remove('is-blackedout')
})

console.log(projectItems)