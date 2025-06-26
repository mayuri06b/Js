 const clock = document.querySelector('.clock');

    setInterval(function () {
      let date = new Date();
      clock.innerHTML = date.toLocaleTimeString();
    }, 1000);

    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let minutes = document.getElementById('minutes').value;
      let seconds = minutes * 60;
      let show = document.querySelector('#show');
      show.hidden = false;

      countdown = setInterval(function () {
        show.innerHTML = `Min ${Math.floor(seconds / 60)} : Sec ${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;
        if (seconds <= 0) {
          clearInterval(countdown);
          show.innerHTML = "Time's up!";
        } else {
          seconds--;
        }
      }, 1000);
    });