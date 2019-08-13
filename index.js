import Typed from "typed.js"
import humanizeDuration from "humanize-duration"

// there is no proper error handling here
// TODO: if no JS, everythign is invisible!
document.fonts
  ? document.fonts.ready
      .then(e => document.body.classList.add("fonts-loaded"))
      .catch(() => document.body.classList.add("fonts-loaded"))
  : document.body.classList.add("fonts-loaded")

let timePassed = 0

setInterval(() => {
  timePassed += 1000
  document.getElementById("timeSpent").innerText = humanizeDuration(timePassed)
}, 1000)

let secondaryStuff = [
  "Eleventy",
  "Gulp",
  "SASS",
  "Bootstrap 3",
  "Bootstrap 4",
  "Webpack",
  "jQuery",
  "Svelte",
  "Express",
  "MongoDB",
  "Firebase RTDB",
  "Cloud Firestore",
]

new Typed(".secondaryStuff", {
  strings: secondaryStuff,
  typeSpeed: 100,
  loop: true,
})

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault()

  debugger

  fetch(this.action, {
    method: "POST",
    body: new FormData(this),
  })
})
