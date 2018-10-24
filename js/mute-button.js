function enableMute() {
  var vid = document.getElementById("hero-video");
  var button = document.getElementById("mute-button");
  if (vid.muted) {
    vid.muted = false;
    button.innerHTML = 'Sonido: ON';
  } else {
    vid.muted = true;
    button.innerHTML = 'Sonido: OFF';
  }
}
