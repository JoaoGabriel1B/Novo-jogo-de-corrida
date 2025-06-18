function setup() {
  createCanvas(400, 400);
}

let xJogador = [0,0,0,0]

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("😎", xJogador[0], 70);
  text("❤️", xJogador[1], 300);
  text("👽", xJogador[2], 160);
  text("💩", xJogador[3], 235);
  rect(350, 0, 10, 400);
}

function desenhaLinhaDeChegada() {
  fill('rgb(235,9,9)');
    rect(350, 0, 10, 400);
    fill('rgb(26,2,241)');
    for (let yAtual=0; yAtual < 400; yAtual += 20){
        rect(350, yAtual, 10, 10);
    }
}

function verificaVencedor() {
  if (xJogador[0] > 290) {
    text("Jogador 1 venceu!", 23, 200);
    noLoop();
  }
  if (xJogador[1] > 290) {
    text("Jogador 2 venceu!", 23, 200);
    noLoop();
  }
  if (xJogador[2] > 290) {
    text("Jogador 3 venceu!", 23, 200);
    noLoop();
  }
  if (xJogador[3] > 290) {
    text("Jogador 4 venceu!", 23, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador[0] += random(20);
  }
  if (key == "s") {
    xJogador[1] += random(20);
  }
   if (key == "k") {
    xJogador[2] += random(20);
  }
  if (key == "l") {
    xJogador[3] += random(20);
  }
}
