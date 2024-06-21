console.log("Iniciando execução...");

// Crie uma variável para armazenar o nome e a quantidade de clientes (XP) de cada assessor de investimentos
let assessor = "Caio";
let clientes = 10200;

console.log("Variáveis definidas...");

// Estrutura de decisão para apresentar a mensagem
let nivel;

if (clientes < 1000) {
    nivel = "ferro";
} else if (clientes >= 1000 && clientes < 2001) {
    nivel = "bronze";
} else if (clientes >= 2001 && clientes < 5001) {
    nivel = "Prata";
} else if (clientes >= 5001 && clientes < 7001) {
    nivel = "Ouro";
} else if (clientes >= 7001 && clientes < 8001) {
    nivel = "Platina";
} else if (clientes >= 8001 && clientes < 9001) {
    nivel = "Ascendente";
} else if (clientes >= 9001 && clientes < 10001) {
    nivel = "Imortal";
} else if (clientes >= 10000) {
    nivel = "Radiante";
}

console.log("Decisão tomada...");

// Exiba a mensagem
console.log("O assessor de nome " + assessor + " está no nível " + nivel);


