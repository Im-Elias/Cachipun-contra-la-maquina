let n = parseInt(prompt("¿Cuantas veces quieres jugar?"));
let contadorPlayer = 0;
let contadorCPU = 0;

for (let i = 1; i <= n; i++) {
  let jugada = parseInt(
    prompt("Ingresa 0 para Piedra, 1 para Papel o 2 para Tijera")
  );
  let jugadaCPU = Math.floor(Math.random() * 3);
  if (jugadaCPU == jugada) {
    document.write("Empataste con la CPU! <br>");
  } else if (jugadaCPU == 0 && jugada == 1) {
    document.write("La CPU jugó Piedra. Ganaste, Felicitaciones! <br>");
    contadorPlayer++;
  } else if (jugadaCPU == 0 && jugada == 2) {
    document.write("La CPU jugó Piedra. Perdiste, la CPU te gano <br>");
    contadorCPU++;
  } else if (jugadaCPU == 1 && jugada == 0) {
    document.write("La CPU jugó Papel. Perdiste, la CPU te gano <br>");
    contadorCPU++;
  } else if (jugadaCPU == 1 && jugada == 2) {
    document.write("La CPU jugó Papel. Ganaste, Felicitaciones! <br>");
    contadorPlayer++;
  } else if (jugadaCPU == 2 && jugada == 0) {
    document.write("La CPU jugó Tijera. Ganaste, Felicitaciones! <br>");
    contadorPlayer++;
  } else if (jugadaCPU == 2 && jugada == 1) {
    document.write("La CPU jugó Tijera. Perdiste, la CPU te gano <br>");
    contadorCPU++;
  } else {
    document.write("Ingresa un valor valido, intenta de nuevo <br>");
    i--;
  }
}
if (contadorPlayer > contadorCPU) {
  document.write(`<br> De ${n} partidas ganaste ${contadorPlayer} veces y la CPU ${contadorCPU}, felicitaciones ganaste!.`);
} else if (contadorPlayer < contadorCPU) {
  document.write(`<br> De ${n} partidas ganaste ${contadorPlayer} veces y la CPU ${contadorCPU}, la CPU te gano, perdiste!.`);
} else {
  document.write(`<br> De ${n} partidas ganaste ${contadorPlayer} veces y la CPU ${contadorCPU}, empate!.`);
}