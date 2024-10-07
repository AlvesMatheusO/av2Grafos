import { packagesNPM, packagesNPM2 } from "./packages.js";

function installPackages(packagesNPM) {
  let installed = new Set();
  let marked = new Set();

  //DFS
  function visit(pkg) {
    //Se o pacote ainda nao foi lido, sera adicionado no vetor package
    if (installed.has(pkg)) return;
    
    if (marked.has(pkg)) throw new Error(`Dependência circular detectada: ${pkg}`);

    marked.add(pkg);

    if (packagesNPM[pkg]) {
        packagesNPM[pkg].forEach(dep => visit(dep));
    }

    installed.add(pkg);
    marked.delete(pkg);

    console.log(`Instalando package: ${pkg}`);
    }

  // Loop para verificar a instalacao ou instalar
  for (let pkg in packagesNPM) {
    visit(pkg);
  }
}

installPackages(packagesNPM2);
