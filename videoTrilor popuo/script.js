const APIKEY = "e0784c265561dc372949c466ee7bc4de";
const URL = 'https://api.themoviedb.org/3/movie/11?api_key=e0784c265561dc372949c466ee7bc4de';

const btnEl = document.querySelector('.btn');
const activeEl = document.querySelector('.trailer-container');
const closeEl = document.querySelector('.close-icon');
const videoEl = document.getElementsByClassName("video")



btnEl.addEventListener('click', ()=>{
    activeEl.classList.remove("active")
})

closeEl.addEventListener("click",()=>{
    activeEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});
