var typed = new Typed(" .text", {
    //Aqui eu posso alterar o letreiro que irá ficar atualizando com algumas informações minhas..
    strings: ["Analista de Testes" , "Analista de QA", "Especialista em Qualidade de Software" , "Testador de Software"],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1500,
    loop: true
});

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });

