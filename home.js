const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});
const music = document.getElementById("music");
const btn = document.getElementById("playBtn");
const record = document.querySelector(".record");
btn.onclick = function(){
    if(music.paused){
        music.play();
        record.classList.add("spin");
        btn.innerHTML="Pause ⏸️";
    }else{
        music.pause();
        record.classList.remove("spin");
        btn.innerHTML="Play ▶️";
    }
}
