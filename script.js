  function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.soundboard_keyboard-button[data-key="${e.keyCode}"]`);
    if (!audio)
      return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
  }

  function endSound (e) {
    const key = document.querySelector(`.soundboard_keyboard-button[data-key="${e.keyCode}"]`);
    if(!key)
      return;
    key.classList.remove('active');
  }


  window.addEventListener('mousedown;', playSound)
  window.addEventListener('mouseup', endSound)
  window.addEventListener('keydown', playSound)
  window.addEventListener('keyup', endSound)
