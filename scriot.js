console.log("Welcome to Spotify");

// Variables ko initialize karo
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "A Time of parting", filepath: "songs/1.mp3",coverpath: "cover1.jpg"},
    {songName: "the Greatest joy", filepath: "songs/2.mp3",coverpath: "cover1.jpg"},
    {songName: "It is such a joyto be an Honest person", filepath: "songs/3.mp3",coverpath: "cover1.jpg"},
    {songName: "self-reflection opens the way forward", filepath: "songs/4.mp3",coverpath: "cover1.jpg"},
    {songName: "All God's Words Are the Truth", filepath: "songs/5.mp3",coverpath: "cover1.jpg"},
    {songName: "The truth of gods", filepath: "songs/6.mp3",coverpath: "cover1.jpg"},
    {songName: "My love for god", filepath: "songs/7.mp3",coverpath: "cover1.jpg"},
    {songName: "Humanity's Only Path to Enter Into Rest (Choral Version)", filepath: "songs/8.mp3",coverpath: "cover1.jpg"},
    {songName: "bileiver", filepath: "songs/9.mp3",coverpath: "cover1.jpg"},
    {songName: "don't forgot your story", filepath: "songs/9.mp3",coverpath: "cover1.jpg"},
]

// HTML ke har songItem mein array se naam aur cover daalo
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Saare songItem ke icon wapas play wale kar do
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// Gaana chal raha hai toh dono jagah (list aur master) pause wala icon dikhao
const showPlaying = ()=>{
    makeAllPlays();
    let currentIcon = document.getElementById(String(songIndex));
    if(currentIcon){
        currentIcon.classList.remove('fa-circle-play');
        currentIcon.classList.add('fa-circle-pause');
    }
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
}

// Gaana ruka hai toh sab icon play wale kar do
const showPaused = ()=>{
    makeAllPlays();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
}

// songIndex wala gaana bajao (list, next, previous teeno yahi use karte hain)
const playSong = ()=>{
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    if(masterSongName){
        masterSongName.innerText = songs[songIndex].songName;
    }
    showPlaying();
}

// Master play/pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused){
        audioElement.play();
        showPlaying();
    }
    else{
        audioElement.pause();
        showPaused();
    }
})

// Gaana chalne par progress bar aage badhe
audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

// Progress bar drag karne par gaana wahin se chale
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// List ke gaane par click
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        let clickedIndex = parseInt(e.target.id);

        // wahi gaana chal raha hai toh pause
        if(clickedIndex === songIndex && !audioElement.paused){
            audioElement.pause();
            showPaused();
        }
        // wahi gaana ruka hua hai toh wahin se resume
        else if(clickedIndex === songIndex && audioElement.currentTime > 0){
            audioElement.play();
            showPlaying();
        }
        // naya gaana
        else{
            songIndex = clickedIndex;
            playSong();
        }
    })
});

// Next button
if(next){
    next.addEventListener('click', ()=>{
        if(songIndex >= songs.length - 1){
            songIndex = 0;      // last ke baad pehla gaana
        }
        else{
            songIndex += 1;
        }
        playSong();
    })
}

// Previous button
if(previous){
    previous.addEventListener('click', ()=>{
        if(songIndex <= 0){
            songIndex = songs.length - 1;   // pehle se peeche last gaana
        }
        else{
            songIndex -= 1;
        }
        playSong();
    })
}
