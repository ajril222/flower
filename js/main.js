
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Music logic
    const music = document.getElementById('bgMusic');
    if (music) {
      music.play().catch(error => {
        console.log("Autoplay was prevented. Music will start on first user interaction.");
        // Fallback: play on first click
        document.body.addEventListener('click', () => {
          music.play();
        }, { once: true });
      });
    }

    const titles = ('For u').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
