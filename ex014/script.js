function carregar() {
  var msg = window.document.getElementById("msg");
  var foto = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 5 && hora < 13) {
    //bom dia
    imagem.src = "fotomanha.png";
    document.body.style.background = "#c6cbcdff";
  } else if (hora >= 13 && hora <= 19) {
    //boa tarde
    imagem.src = "fototarde.png";
    document.body.style.background = "#cc7234ff";
  } else {
    //boa noite
    imagem.src = "fotonoite.png";
    document.body.style.background = "#3a759cff";
  }
}
