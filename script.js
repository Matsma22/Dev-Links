function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // tag img
  const img = document.querySelector("#profile img")
  // trocar img
  if (html.classList.contains("light")) {
    // ligth mode, add a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Matheus Mendes sorrindo, usando camisa preta, fundo amarelo")
  } else {
    // sem ligth mode, manter img
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Matheus Mendes sorrindo, de jaqueta, fundo colorido")
  }
}
