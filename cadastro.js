
function Validar() {

        let email =             document.getElementById("email").value;
        let name =              document.getElementById("name").value;
        let tel =               document.getElementById("tel").value;
        let cpf =               document.getElementById("cpf").value;
        let cep =               document.getElementById("cep").value;
        let estado =            document.getElementById("estado").value;
        let cidade =            document.getElementById("cidade").value;
        let numero =            document.getElementById("numero").value;
        let rua =               document.getElementById("rua").value;
        let senha =             document.getElementById("senha").value;
        let confirmacaosenha =  document.getElementById("confirmacaosenha").value;
        let bairro =            document.getElementById("bairro").value;
        let datadenascimento =  document.getElementById("date").value;
        
        {

        if (!email || !name || !tel || !cpf || !cep || !estado || !cidade || !numero || !rua || !senha || !confirmacaosenha || !bairro || !datadenascimento) {
    
             alert("Campo de preenchimento obrigatório. Favor preencher");
    
             } else {
    
                 alert("Campos preenchidos com sucesso!");
    
             }

        }
    }