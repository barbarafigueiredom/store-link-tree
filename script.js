function toggleMode() {
  const html = document.documentElement

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.toggle("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/logo-redonda.png")
  } else {
    // se tiver sem light mode,manter a imagem normal
    img.setAttribute("src", "./assets/logo-redonda.png")
  }
}
