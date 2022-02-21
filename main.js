const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const items = document.querySelectorAll(".navbar .menu-list li a")

menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

items.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.remove("disabledScroll");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
  })
})


window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


const toggles = document.querySelectorAll('.faq-toggle');
const faqboxes = document.querySelectorAll('.faq');

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active')
//     })
// })
faqboxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active')
    })
})