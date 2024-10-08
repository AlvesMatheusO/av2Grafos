//import { packagesNPM, packagesNPM2, packageMeme } from "./packages";

export function showMatrix(packagesNPM) {
    const allPackages = Object.keys(packagesNPM);
    const packageIndex = {};

    allPackages.forEach((pkg, index) => {
        packageIndex[pkg] = index;
    });

    const matrix = Array(allPackages.length)
        .fill(null)
        .map(() => Array(allPackages.length)
        .fill(0));

    for(let pkg in packagesNPM) {
        packagesNPM[pkg].forEach(dep => {
            if (packageIndex[dep] !== undefined) {
                matrix[packageIndex[pkg]][packageIndex[dep]] = 1;
            }
        });
    }

// Exibe a matriz de adjacência
console.log("\nMatriz de Adjacência:");
console.log("    ", allPackages.join("  "));
matrix.forEach((row, i) => {
  console.log(`${allPackages[i]}  ${row.join("  ")}`);
});

}