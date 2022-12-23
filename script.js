let imageArray = ['assets/fries.jpeg','assets/bread.jpeg', 'assets/rice.jpeg', 'assets/orangeDrink.jpeg', 'assets/spaghetti.jpeg'];
let imgSlide = document.querySelector('.imgSlide');
let imageBtn = document.querySelectorAll('.imageBtn');
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let currentImg = 0;
let handle = setInterval(() => {
    next()
}, 3000);
imageBtn.forEach(btn => {
    btn.addEventListener('click',()=>{
        clearInterval(handle);
        handle = setInterval(() => {
            next()
        }, 3000);
        imgSlide.src = imageArray[btn.id];
        currentImg = btn.id;
        appendImageStyle()
    })
});
nextBtn.addEventListener('click',next);
function next(){
    clearInterval(handle);
    handle = setInterval(() => {
        next()
    }, 3000);
    imgSlide.src = imageArray[currentImg -= 0];
    if(currentImg === imageArray.length - 1){
        currentImg = imageArray.length - (imageArray.length + 1);
    }
    else{
        imgSlide.src = imageArray[currentImg += 1];
    }
    appendImageStyle()
}
prevBtn.addEventListener('click',()=>{
    clearInterval(handle);
    handle = setInterval(() => {
        next()
    }, 3000);
    if(currentImg === 0){
        imgSlide.src = imageArray[imageArray.length - 1];
        currentImg = imageArray.length - 1;
    }
    else{
        imgSlide.src = imageArray[currentImg -= +1];
    }
    appendImageStyle()
})
function appendImageStyle(){
    for (i = 0; i <= imageBtn.length; i++) {
        imageBtn[i].style.background = 'white';
        imageBtn[currentImg].style.background = 'red';
    }
}
