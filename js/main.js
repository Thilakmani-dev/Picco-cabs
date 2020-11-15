const counters = document.querySelectorAll(".counting");
const speed =100;

function startCounter() {
   counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count')
      const count = +counter.innerText;

      const inc = target / speed;
      console.log(inc)
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 25);
      } else {
        count.innerText = target;
      }

    }
    updateCount();
  })
}

  window.onscroll = function () { myFunction() };

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }