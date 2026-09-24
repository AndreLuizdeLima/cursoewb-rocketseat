function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const avatarUrl = "https://avatars.githubusercontent.com/u/102117666?v=4"

  img.setAttribute("src", avatarUrl)
}
