console.log("Welcome to Spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio ('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Believer", filePath: "", coverPath: ""}, //add song paths and its cover photos
    {songName: "Believer", filePath: "", coverPath: ""}, //add song paths and its cover photos
    {songName: "Believer", filePath: "", coverPath: ""}, //add song paths and its cover photos
    {songName: "Believer", filePath: "", coverPath: ""}, //add song paths and its cover photos
    {songName: "Believer", filePath: "", coverPath: ""}, //add song paths and its cover photos
    {songName: "Believer", filePath: "", coverPath: ""}, //add song paths and its cover photos
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

// Listen to events
myProgressBar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    // Update Seekbar

})