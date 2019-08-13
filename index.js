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

  fetch(this.action, {
    method: "POST",
    body: new FormData(this),
  }).then(res => {
    const btn = this.querySelector("button")
    btn.disabled = true
    if (res.ok) {
      btn.innerHTML = "Message Delivered"
      btn.classList.add("success")
    } else btn.innerHTML = "Something's not right<br/>Maybe try my email"
    btn.innerHTML = res.ok
      ? "Message Delivered"
      : "Something's not right<br/>Maybe try my email"
  })
})
