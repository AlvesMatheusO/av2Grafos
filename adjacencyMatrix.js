
export function showMatrix(packagesNPM) {
    const allPackages = Object.keys(packagesNPM);
    const packageIndex = {};

    allPackages.forEach((pkg, index) => {
        packageIndex[pkg] = index;
    });

    //inicia a matriz de adjacencia colocando 0 em todos os espacos dependendo do tamanho
    const matrix = Array(allPackages.length)
        .fill(null)
        .map(() => Array(allPackages.length)
        .fill(0));

    //preenche o local na matriz com 1 onde possui dependencias
    for(let pkg in packagesNPM) {
        packagesNPM[pkg].forEach(dep => {
            if (packageIndex[dep] !== undefined) {
                matrix[packageIndex[pkg]][packageIndex[dep]] = 1;
            }
        });
    }

console.log("\nMatriz de Adjacência:");
console.log("    ", allPackages.join("  "));
matrix.forEach((row, i) => {
  console.log(`${allPackages[i]}  ${row.join("  ")}`);
});

}