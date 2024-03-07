/* Se crea variable n para el número de partidas */
let n = parseInt(prompt("¿Cuantas veces quieres jugar?"));
let contadorPlayer = 0;
let contadorCPU = 0;

/* Se crea un bucle para el número de partidas */
for (let i = 1; i <= n; i++) {
  let jugada = parseInt(
    prompt("Ingresa 0 para Piedra, 1 para Papel o 2 para Tijera")
  );
  let jugadaCPU = Math.floor(Math.random() * 3);
  switch (jugada) {
    case jugadaCPU:
      document.write("Empataste con la CPU! <br>");
      break;
    case 0:
      if (jugadaCPU === 1) {
        document.write("La CPU jugó Papel. Perdiste, la CPU te gano <br>");
        contadorCPU++;
      } else if (jugada === 2) {
        document.write("La CPU jugó Tijera. Ganaste, Felicitaciones! <br>");
        contadorPlayer++;
      }
      break;
    case 1:
      if (jugadaCPU === 0) {
        document.write("La CPU jugó Piedra. Ganaste, Felicitaciones! <br>");
        contadorPlayer++;
      } else if (jugada === 2) {
        document.write("La CPU jugó Tijera. Perdiste, la CPU te gano <br>");
        contadorCPU++;
      }
      break;
    case 2:
      if (jugadaCPU === 0) {
        document.write("La CPU jugó Piedra. Perdiste, la CPU te gano <br>");
        contadorCPU++;
      } else if (jugadaCPU === 1) {
        document.write("La CPU jugó Papel. Tijera. <br>");
        contadorPlayer++;
      }
      break;
    default:
      document.write("Ingresa un valor valido, intenta de nuevo <br>");
      i--;
      break;
  }
}

/* Se crea un condicional para el resultado de las partidas */
if (contadorPlayer > contadorCPU) {
  document.write(
    `<br> De ${n} partidas ganaste ${contadorPlayer} y la CPU ${contadorCPU}, felicitaciones ganaste!.`
  );
} else if (contadorPlayer < contadorCPU) {
  document.write(
    `<br> De ${n} partidas ganaste ${contadorPlayer} y la CPU ${contadorCPU}, la CPU te gano, perdiste!.`
  );
} else {
  document.write(
    `<br> De ${n} partidas ganaste ${contadorPlayer} y la CPU ${contadorCPU}, empate!.`
  );
}
