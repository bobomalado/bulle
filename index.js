const compterbulle = document.querySelector("h3");
let counter = 0;

const bulleMaker = () => {
  const bulle = document.createElement("span");
  bulle.classList.add("bulle");
  document.body.appendChild(bulle);

  const size = Math.random() * 200 + 100 + "px";
  bulle.style.height = size;
  bulle.style.width = size;

  bulle.style.top = Math.random() * 100 + 50 + "%";
  bulle.style.left = Math.random() * 100 + "%";
  const plusminus = Math.random() > 0.5 ? 1 : -1;
  bulle.style.setProperty("--left", Math.random() * 100 * plusminus + "% ");

  bulle.addEventListener("click", () => {
    counter++;
    compterbulle.textContent = counter;
    bulle.remove();
  });
  setTimeout(() => {
    bulle.remove();
  }, 8000);
};
setInterval(bulleMaker, 300);
