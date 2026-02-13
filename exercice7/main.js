let nombres = [5, 9, -3, 10, -8, -1, 4, -2, 6, -7];

nombres.forEach((nombre) => {
  if (nombre < 0) {
    console.log(nombre + " est négatif");
  } else {
    console.log(nombre + " est positif");
  }
});
