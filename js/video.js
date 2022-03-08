const playPause=document.querySelector('.play-pause');const pause=document.querySelector('.pause');const play=document.querySelector('.play');const video=document.querySelector('.video');const iconVolume=document.querySelector('.icon-volume');const halfVolume=document.querySelector('.half-volume');const volume=document.querySelector('.volume');const mute=document.querySelector('.mute');const rangeVolume=document.querySelector('.range-volume');const fullscreen=document.querySelector('.fullscreen');const zoomOut=document.querySelector('.zoom-out');const zoomIn=document.querySelector('.zoom-in');const wrapperPlayer=document.querySelector('.wrapper-player');const rangeProgress=document.querySelector('.range-progress');const current=document.querySelector('.current');const duration=document.querySelector('.duration');const timeHover=document.querySelector('.time-hover')
function isPlaying(){let isplay=playPause.getAttribute('data-play');if(isplay==='true'){play.classList.add('active');pause.classList.remove('active');playPause.setAttribute('data-play','false');video.pause()}else{play.classList.remove('active');pause.classList.add('active');playPause.setAttribute('data-play','true');video.play()}}
function isMute(){let isMute=iconVolume.getAttribute('data-mute');if(isMute==='true'){halfVolume.classList.remove('active');volume.classList.add('active');mute.classList.remove('active');iconVolume.setAttribute('data-mute','false');video.volume=rangeVolume.value;console.log(rangeVolume.value)}else{halfVolume.classList.remove('active');volume.classList.remove('active');mute.classList.add('active');iconVolume.setAttribute('data-mute','true');video.volume=0}}
rangeVolume.addEventListener('input',()=>{let range=rangeVolume.value
video.volume=range
if(range<0.01){halfVolume.classList.remove('active');volume.classList.remove('active');mute.classList.add('active')}else if(range<0.5){halfVolume.classList.add('active');volume.classList.remove('active');mute.classList.remove('active')}else{halfVolume.classList.remove('active');volume.classList.add('active');mute.classList.remove('active')}})
function isZoom(){let zoom=fullscreen.getAttribute('data-zoom');if(zoom==='true'){zoomOut.classList.remove('active');zoomIn.classList.add('active');fullscreen.setAttribute('data-zoom','false');document.exitFullscreen()}else{zoomOut.classList.add('active');zoomIn.classList.remove('active');fullscreen.setAttribute('data-zoom','true');wrapperPlayer.requestFullscreen()}}
video.addEventListener('timeupdate',()=>{const vp=(video.currentTime/video.duration)*100;rangeProgress.value=vp;rangeProgress.style.setProperty('--seek-before-width',vp+'%')
current.textContent=convertTime(Math.round(video.currentTime))
duration.textContent=convertTime(Math.round(video.duration))})
rangeProgress.addEventListener('input',()=>{video.currentTime=(video.duration/100)*rangeProgress.value})
function convertTime(seconds){let min=Math.floor(seconds/60);let sec=seconds%60;min=min<10?'0'+min:min;sec=sec<10?'0'+sec:sec;return min+':'+sec}
rangeProgress.addEventListener('mousemove',(e)=>{let time=(video.duration/100)*(e.offsetX/e.target.clientWidth)*100
timeHover.style.display='inline'
timeHover.textContent=convertTime(Math.round(time))
timeHover.style.left=(e.offsetX/e.target.clientWidth)*100+'%'})
rangeProgress.addEventListener('mouseout',(e)=>{timeHover.style.display='none'})
