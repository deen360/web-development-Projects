/* Looping through images */

for (const image of images) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${image}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener(
    "click",
    (e) => (displayedImage.src = e.target.src)
  );
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
