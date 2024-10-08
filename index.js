import { packagesNPM, packagesNPM2, packageMeme } from "./packages.js";
import { showMatrix } from "./adjacencyMatrix.js";

function installPackages(packagesNPM) {
  let installed = new Set();
  let marked = new Set();

  //DFS
  function visit(pkg) {
    
    if (installed.has(pkg)) return;

    //Verifica se ha um ciclo: Caso seja adicionado um grafo com todos os pacotes dependendo de um ou outro
    if (marked.has(pkg))
      throw new Error(`Dependência circular detectada: ${pkg}`);

    //Marca o pacote atual
    marked.add(pkg);

    //Chama recursivamente as dependencias
    // Garante que todas as dependências de um pacote sejam instaladas antes do próprio pacote.
    if (packagesNPM[pkg]) {
      packagesNPM[pkg].forEach((dep) => visit(dep));
    }

    installed.add(pkg);
    marked.delete(pkg);
    console.log(`package instalado: ${pkg}`);

  }

  // Loop para chamar a funcao DFS percorrendo pelo grafo
  for (let pkg in packagesNPM) {
    if (!installed.has(pkg)) {
      visit(pkg);
    }
  }
}
//Escolher o grafo
installPackages(packagesNPM);

showMatrix(packagesNPM); 
