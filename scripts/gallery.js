// Flip card logic
    const flipCard = document.getElementById('flipCard');
    flipCard.addEventListener('click', () => {
      flipCard.classList.toggle('flipped');
    });

    // Play video on click without fullscreen
    document.querySelectorAll('.gallery video').forEach(video => {
      video.addEventListener('click', () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });