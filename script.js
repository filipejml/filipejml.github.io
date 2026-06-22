// Aguarda a página carregar
document.addEventListener("DOMContentLoaded", () => {
    
    // Animação de entrada dos projetos
    const projetos = document.querySelectorAll(".projeto");

    projetos.forEach((projeto, index) => {
        projeto.style.opacity = "0";
        projeto.style.transform = "translateY(20px)";

        setTimeout(() => {
            projeto.style.transition = "all 0.5s ease";
            projeto.style.opacity = "1";
            projeto.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Exibe mensagem ao clicar em um projeto
    const links = document.querySelectorAll(".projeto a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Abrindo projeto...");
        });
    });
});