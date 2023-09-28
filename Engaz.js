const btn=document.querySelector('header .container .bar i');
const slider=document.querySelector('.sliderr');
const overlay=document.querySelector('.overlay');

const close =document.querySelector('.sliderr .main-nav .close');
btn.addEventListener('click',()=>{
    slider.classList.add('active')
})
btn.addEventListener('click',()=>{
    overlay.classList.add('active')
})
close.addEventListener('click',()=>{
    slider.classList.remove('active')
    overlay.classList.remove('active')
})
window.addEventListener('scroll',()=>{
    slider.classList.remove('active')
    overlay.classList.remove('active')
})


// change bg header when scroll

const bgHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ?header.classList.add('bg-header'): header.classList.remove('bg-header')
}
window.addEventListener('scroll',bgHeader)



const contact = document.querySelector('.contact .parent i');
const contact_child = document.querySelector('.contact .contact-child');
contact.addEventListener('click',()=>{
    contact_child.classList.toggle('active')
});