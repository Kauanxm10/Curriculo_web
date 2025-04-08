function enviarFormulario() 
{
    let nome = document.getElementById("exampleInputNome").value;
    let email = document.getElementById("exampleInputEmail1").value;

    if (!nome) 
    {
        alert("Por favor, preencha o campo nome.");
        return; 
    }
    if (!email) 
    {
        alert("Por favor, preencha o campo email.");
        return; 
    }


    alert("Formulário enviado com sucesso!");
}