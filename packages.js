// Grafo de dependencias:

export const packagesNPM = {
  app: ["excel-reader", "db-connector", "auth-module"],
  "excel-reader": ["xml-parser", "http-lib"],
  "db-connector": ["sql-driver", "network-stack"],
  "sql-driver": ["crypto-lib"],
  "network-stack": ["socket-handler"],
  "socket-handler": [],
  "http-lib": ["network-stack"],
  "crypto-lib": [],
  "xml-parser": [],
  "auth-module": ["crypto-lib", "jwt-parser"],
  "jwt-parser": ["http-lib"],
};

export const packagesNPM2 = {
  frontend: ["ui-library", "api-client", "state-manager"],
  "ui-library": ["css-engine", "icon-set"],
  "api-client": ["http-client", "auth-library"],
  "http-client": ["tcp-socket"],
  "auth-library": ["encryption-lib", "token-handler"],
  "state-manager": ["react-core"],
  "css-engine": [],
  "icon-set": [],
  "tcp-socket": [],
  "encryption-lib": [],
  "token-handler": ["encryption-lib"],
  "react-core": [],
};

export const packageMeme = {
  "ui-library": ["css-engine"],
  "css-engine": ["http-client",],
  "http-client": ["ui-library"],
};