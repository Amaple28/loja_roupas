// fazer regex com javascript para validar email e senha no login do site 

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarSenha(senha) {
    // var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // return re.test(senha);

    // senha de 8 caracteres, pelo menos 1 letra e 1 número
    if (senha.length < 8) {
        return false;
    }
    if (senha.search(/[a-zA-Z]/) < 0) {
        return false;
    }
    if (senha.search(/[0-9]/) < 0) {
        return false;
    }
    return true;

}

// se exister tudo correto redirecionar para a pagina de vendas
function validarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var emailHelp = document.getElementById('emailHelp');
    var senhaHelp = document.getElementById('senhaHelp');
    var dadosHelp = document.getElementById('dadosHelp');

    if (validarEmail(email) && validarSenha(senha)) {
        window.location.href = "produtos.html";
    } else if (!validarEmail(email)) {
        emailHelp.innerHTML = "Email inválido";
    } else if (!validarSenha(senha)) {
        senhaHelp.innerHTML = "Senha inválida";
    } 
    else {
        dadosHelp.innerHTML = "Email ou senha inválidos";
    }

}
