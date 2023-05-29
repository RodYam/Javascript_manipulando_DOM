const robotron = document.querySelector("#robotron");


// As novas versões do JavaScript a partir do ES6 ainda tem uma forma diferente de declaramos uma função anônima. No lugar de usarmos function(), nós abrimos parênteses e colocamos uma seta formada por um sinal de igual e um maior => (arrow function).

robotron.addEventListener("click", (evento) => {
    console.log(evento)
});

function dizOi(nome) {
    console.log("Oi " + nome)
    console.log("Bem-vindo(a) ao Robotron 2000.")
}

dizOi("Dakota"); // Queremos que todas as vezes que a página for carregada, a função dizOi seja executada. Para isso, nós chamamos esse função colocando o nome dela e abrindo e fechando parênteses, assim a função será executada no momento exato em que ela for lida.