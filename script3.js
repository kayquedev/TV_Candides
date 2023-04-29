if (window.matchMedia("(max-width: 600px)").matches) {
    // se a tela tiver até 600px de largura
    document.body.style.backgroundColor = "red";
    document.getElementById("p1").style.fontSize = "16px";
    document.getElementById("p2").style.fontSize = "16px";
  } else if (window.matchMedia("(max-width: 900px)").matches) {
    // se a tela tiver até 900px de largura
    document.body.style.backgroundColor = "yellow";
    document.getElementById("p1").style.fontSize = "20px";
    document.getElementById("p2").style.fontSize = "20px";
  } else {
    // se a tela tiver mais de 900px de largura
    document.body.style.backgroundColor = "green";
    document.getElementById("p1").style.fontSize = "24px";
    document.getElementById("p2").style.fontSize = "24px";
  }
  