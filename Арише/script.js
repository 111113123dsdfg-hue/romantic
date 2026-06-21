const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveSection = document.getElementById("loveSection");
const container = document.querySelector(".container");
const music = document.getElementById("music");
// Убегающая кнопка "Нет"
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});
// Нажатие "Да"
yesBtn.addEventListener("click", () => {
    container.style.display = "none";
    loveSection.style.display = "block";
    music.play();
    createHearts();
});
// =====================
// Слайд-шоу фотографий
// =====================
const photos = document.querySelectorAll(".photo");
let currentPhoto = 0;
setInterval(() => {
    photos[currentPhoto].classList.remove("active");
    currentPhoto++;
    if(currentPhoto >= photos.length){
        currentPhoto = 0;
    }
    photos[currentPhoto].classList.add("active");
},3000);
// =====================
// Счётчик дней
// =====================
// ЗАМЕНИ НА СВОЮ ДАТУ
const startDate = new Date("2025-01-01");
const now = new Date();
const diff = now - startDate;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
document.getElementById("daysCounter").innerHTML =
days + " дней ❤️";
// =====================
// Романтические фразы
// =====================
const phrases = [
"Ты самое лучшее, что со мной случилось ❤️",
"Спасибо, что ты есть 💖",
"Люблю твою улыбку 💕",
"С тобой каждый день особенный 🌹",
"Ты делаешь меня счастливым ❤️",
"Ты моя самая любимая девочка 💗",
"Я хочу прожить с тобой всю жизнь 💍",
"Ты мой маленький мир ❤️"
];
const phraseBlock = document.querySelector(".phrase");
document.querySelector(".heart-button").addEventListener("click", ()=>{
    let random =
    Math.floor(Math.random()*phrases.length);
    phraseBlock.innerHTML =
    phrases[random];
});
// =====================
// SVG сердечки
// =====================
function createHeart(){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = `
    <svg viewBox="0 0 32 29" width="25" height="25">
        <path fill="#ff4da6"
        d="M23.6,0c-3,0-5.5,1.7-7.6,4.3C13.9,1.7,11.4,0,8.4,0
        C3.8,0,0,3.8,0,8.4c0,9.3,16,20.6,16,20.6s16-11.3,16-20.6
        C32,3.8,28.2,0,23.6,0z"/>
    </svg>
    `;
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.transform =
    `scale(${Math.random()+0.5})`;
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },5000);
}
function createHearts(){
    setInterval(()=>{
        createHeart();
    },200);
}
// =====================
// Частицы
// =====================
const particles = document.getElementById("particles");
for(let i=0;i<40;i++){
    const p = document.createElement("div");
    p.style.position="absolute";
    p.style.width="6px";
    p.style.height="6px";
    p.style.background="white";
    p.style.borderRadius="50%";
    p.style.left=Math.random()*100+"%";
    p.style.top=Math.random()*100+"%";
    p.style.opacity=".5";
    particles.appendChild(p);
}
// =====================
// Анимация появления
// =====================
loveSection.style.opacity = "0";
yesBtn.addEventListener("click", ()=>{
    setTimeout(()=>{
        loveSection.style.transition = "1.5s";
        loveSection.style.opacity = "1";
    },100);
});