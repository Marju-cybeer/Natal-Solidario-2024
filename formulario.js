document.getElementById("send").addEventListener("click", adicionarDuvidas);


function adicionarDuvidas(){
    const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const duvidas = document.getElementById("interesse").value;
const conteudo = document.getElementById("conteudo").value;

   if(!nome || !email || !telefone || !duvidas || !conteudo){
        alert("Preencha todos os campos.")
        return
    }
    
    const listaDuvidas = []
    const novaDuvida = {nome, email, telefone, duvidas, conteudo}
    console.log(novaDuvida)
    listaDuvidas.push(novaDuvida)
     alert("Dúvida recebida com sucesso.")

    document.querySelector("form").reset();
}

