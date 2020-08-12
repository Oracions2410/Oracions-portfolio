console.log('start')
const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.menu')
const scrollButton = document.querySelector('.scroll-top')




menu.addEventListener('click', function (e) {
    toggleClass(navbar, 'open')
})

scrollButton.addEventListener('click', function (e) {
    scrollToTop(500)
})

document.addEventListener('scroll', function (e) {
    console.log(document.scrollingElement.scrollTop)
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