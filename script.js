function toggleMode() {
    const html = document.documentElement

    // Forma mais rebusta 
   // if(html.classList.contains('light')){
   //     html.classList.remove('light')
   //}else{
   // html.classList.add('light')
   //  }
  html.classList.toggle('light') //forma shorthand
  const img = document.querySelector('#profile img')

  // Substituira imagem 
  if(html.classList.contains('light')){
    //se tiver light mode., adicionar a imagem light 
    img.setAttribute('src', './assets/avatar-modelight.png')
    img.setAttribute('alt', 'Imagem de Bira com dred, vestido de uma t-shirt num fundo preto e branco')
  }else{
    //se tiver sem light mod, manter black mode 
    img.setAttribute('src', './assets/Bira.png')
    img.setAttribute('alt', 'foto de Bira com tranças, com um fundo preto e branco, vestindo uma t-shirt')
  }
}