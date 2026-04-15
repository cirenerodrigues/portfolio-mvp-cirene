const projetos = [
  {
    nome: "Página Inicial",
    descricao: "Site simples feito com HTML e CSS responsivo.",
  },
  {
    nome: "Sistema de Cálculos",
    descricao: "Aplicação básica usando JavaScript para operações matemáticas.",
  },
  {
    nome: "Meu Site Pessoal",
    descricao: "Página com informações pessoais e projetos.",
  },
];

const container = document.getElementById("lista-projetos");

projetos.forEach((projeto) => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(div);
});
