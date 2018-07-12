  function playS (e) {
    const key = document.querySelector(`.soundboard_keyboard-button[data-key="${e.keyCode}"]`);
    key.classList.add('active');
    playSound(e.keyCode);
    console.log("playS"+e.keyCode);
  }
  function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio)
      return;
    audio.currentTime = 0;
    audio.play();
    console.log(keyCode);
  }
  function endSound (e) {
    const key = document.querySelector(`.soundboard_keyboard-button[data-key="${e.keyCode}"]`);
    if(!key)
      return;
    key.classList.remove('active');
  }
  $(".soundboard_keyboard-button").click(function(){
      var keyCode=$(this).data('key');
      playSound(keyCode);
      keyCode=0;
  });
  window.addEventListener('mousedown;', playSound)
  window.addEventListener('mouseup', endSound)
  window.addEventListener('keydown', playS)
  window.addEventListener('keyup', endSound)
