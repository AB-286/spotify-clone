console.log("welcome to spotify");

let songIndex =0;
let audioElement = new Audio ('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
 let gif = document.getElementById('gif');
 let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from (document.getElementsByClassName('songItem'));
let songs = [
            {songName: "little girl" ,filepath:"songs/1.mp3"},
            {songName: "Love To See You Cry" ,filepath:"songs/2.mp3"},
            {songName: "Miss you" ,filepath:"songs/3.mp3"},
            {songName: "Somebodys me" ,filepath:"songs/4.mp3"},
            {songName: "tired to being sorry" ,filepath:"songs/5.mp3"},
            {songName: "Be With You" ,filepath:"songs/6.mp3"},
            {songName: "Get On The Floor" ,filepath:"songs/7.mp3"},
            {songName: "shayne-ward-no-promises" ,filepath:"songs/8.mp3"},
            {songName: "shayne-ward-no-promises" ,filepath:"songs/9.mp3"},
            {songName: "shayne-ward-no-promises" ,filepath:"songs/10.mp3"},
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

// audioElement.play();
//handle play pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        gif.style.opacity =1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        gif.style.opacity = 0;
    }
})
//listen to events 
audioElement.addEventListener ('timeupdate',()=> {
    
    //update seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})
progressBar.addEventListener ('change', ()=>{
    audioElement.currentTime= progressBar.value * audioElement.duration/100;
})
const makeAllPlays  = () =>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
       element.classList.add('bi-play-fill');
        element.classList.remove('bi-pause-fill');
    })
}
Array.from (document.getElementsByClassName('songItemplay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('bi-play-fill');
    e.target.classList.add('bi-pause-fill');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    })
})
document.getElementById('next').addEventListener('click' ,()=>{
    if(songIndex>=8){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
})  
document.getElementById('previous').addEventListener('click' ,()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
})  