import Typed from "typed.js"
import humanizeDuration from "humanize-duration"

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

// TODO: trim dependencies
