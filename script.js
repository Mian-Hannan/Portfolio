// Testimonial Carousal Script

let testimonialReviews = document.querySelectorAll('.testimonial-1');
let leftNavigate = document.querySelector('.left-button');
let rightNavigate = document.querySelector('.right-button');
let reviewCounter = document.querySelector('.review-number span');
let testimonialContainer = document.querySelector('.all-reviews')
let count = 0;
console.log(testimonialReviews.length);
rightNavigate.addEventListener('click', () => {
    if (count < testimonialReviews.length - 1) {
        count++;
    }
    console.log(count);
    reviewSlide();  
    
    reviewCounter.innerHTML = count + 1;


    // testimonialContainer.appendChild(testimonialContainer.firstElementChild);
    // reviewCounter.innerHTML = parseInt(reviewCounter.innerHTML) + 1;
    // if (reviewCounter.innerHTML == 4) {
    //     reviewCounter.innerHTML = 1;
    // }
})
leftNavigate.addEventListener('click', () => {
    if (count > 0) {
        count--;
    }
    else {
        count = 0;
    }
    console.log(count);
    reviewSlide();
    reviewCounter.innerHTML = count + 1;

    // testimonialContainer.insertBefore(testimonialContainer.lastElementChild, testimonialContainer.firstElementChild);
    // reviewCounter.innerHTML = reviewCounter.innerHTML - 1;
    // if (reviewCounter.innerHTML == 0) {
    //     reviewCounter.innerHTML = 3;
    // }
});

function reviewSlide() {
    testimonialReviews.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    })
}

// Slide Menu List

let menuBtn = document.querySelector('.menu-btn');
let menuSlide = document.querySelector('.menu-slide');
let menuSlideBefore = document.querySelector(".menu-slide-before")

function slideClose(slide, button) {
    button.addEventListener('click', () => {
        slide.classList.toggle('cart-sliding-effect');
        menuSlideBefore.style.zIndex = '0';
        menuSlideBefore.style.opacity = '0.5';
    })
    menuSlideBefore.addEventListener('click', (e) => {

        slide.classList.remove('cart-sliding-effect');
        menuSlideBefore.style.zIndex = '-1';
        menuSlideBefore.style.opacity = '0.3';
    })
}
slideClose(menuSlide, menuBtn);

// Setting Slide
let settingBtn = document.querySelector('.setting-btn');
let settingSlide = document.querySelector('.setting-slide')


slideClose(settingSlide, settingBtn);



// Change primary Color
let root = document.querySelector(':root');
let colorList = document.querySelectorAll('.colors-list div');

function addingBorder(num) {
    colorList.forEach(unSelectedColor => {
        unSelectedColor.classList.remove('border');
    })
    
    colorList[num].classList.add('border');
}
function green() {
    root.style.setProperty('--primary-color', 'rgb(40, 233, 140)');
    let num = 0;
    addingBorder(num);
}
function yellow() {
    root.style.setProperty('--primary-color', '#e4af12');
    let num = 1;
    addingBorder(num);
}
function orange() {
    root.style.setProperty('--primary-color', '#fe6f1d');
    let num = 2;
    addingBorder(num);
}
function aqua() {
    root.style.setProperty('--primary-color', '#14c5fd');

    let num = 3;
    addingBorder(num);
}
function gray() {
    root.style.setProperty('--primary-color', '#c0c0c0');
    let num = 4;
    addingBorder(num);
}
function blue() {
    root.style.setProperty('--primary-color', '#1338f3');
    let num = 5;
    addingBorder(num);
}
function red() {
    root.style.setProperty('--primary-color', '#f31313');
    let num = 6;
    addingBorder(num);
}
function pink() {
    root.style.setProperty('--primary-color', '#ff99cc');
    let num = 7;
    addingBorder(num);
}


// changing Background Video

let video = document.querySelector('.background-overly')
let videoList = document.querySelectorAll('.shape-list p')
function addlinethrough(idx) {
    videoList.forEach(unSelectedvideo => {
        unSelectedvideo.classList.remove('text-style');
    })
    videoList[idx].classList.add('text-style')
}

function video1() {
    video.src = 'video1.mp4';
    let index = 0;
    addlinethrough(index);
}
function video2() {
    video.src = 'video2.mp4';
    let index = 1;
    addlinethrough(index);
}
function video3() {
    video.src = 'video3.mp4';
    let index = 2;
    addlinethrough(index);
}
function video4() {
    video.src = 'video4.mp4';
    let index = 3;
    addlinethrough(index);
}
function video5() {
    video.src = 'video5.mp4';
    let index = 4;
    addlinethrough(index);
}
function solidColor() {
    video.src = '';
    let index = 5;
    addlinethrough(index);
}


// Active link

let allLinks = document.querySelectorAll('.menu-text-name a i');
let linkNames = document.querySelectorAll('.menu-text-name a span');
let linkIcons = document.querySelectorAll('.vertical-menu-list a i');

let allLinksParent = '.menu-text-name';
let linkIconsParent = '.vertical-menu-list';


changeLinkColorOnscroll(allLinks, allLinksParent);
changeLinkColorOnscroll(linkIcons, linkIconsParent);


function changeLinkColorOnscroll(links, parent) {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY + 100;    
        let sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                let id = section.getAttribute('id');
                links.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.nextElementSibling) {
                        
                        link.nextElementSibling.style.color = "rgb(136, 136, 136)";
                    }
                })
                document.querySelector(`${parent} a[href="#${id}"] i`).classList.add('active-link'); 
                
                    links.forEach(link => {
                        if (link.nextElementSibling) {
                        if (link.classList.contains('active-link')) {
                            link.nextElementSibling.style.color = "white";
                        }
                    }

                    })
                
            }
        })
    })
}

