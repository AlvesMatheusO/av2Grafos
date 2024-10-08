import { packagesNPM, packagesNPM2, packageMeme } from "./packages.js";
import { showMatrix } from "./adjacencyMatrix.js";

function installPackages(packagesNPM) {
  let installed = new Set();
  let marked = new Set();

  //DFS
  function visit(pkg) {
    //Se o pacote ja foi instalado pula para o proximo;
    if (installed.has(pkg)) return;

    //Verifica se ha um ciclo: Caso seja adicionado um grafo com todos os pacotes dependendo de um ou outro
    if (marked.has(pkg))
      throw new Error(`Dependência circular detectada: ${pkg}`);

    //Marca o pacote atual
    marked.add(pkg);

    //Chama recursivamente as dependencias
    if (packagesNPM[pkg]) {
      packagesNPM[pkg].forEach((dep) => visit(dep));
    }

    installed.add(pkg);
    marked.delete(pkg);

    console.log(`Instalando package: ${pkg}`);
  }

  // Loop para chamar a funcao DFS percorrendo pelo grafo
  for (let pkg in packagesNPM) {
    if (!installed.has(pkg)) {
      visit(pkg);
    }
  }
}
//Escolher o grafo
installPackages(packagesNPM2);

showMatrix(packagesNPM2); 
