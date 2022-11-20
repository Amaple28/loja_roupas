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

function validarSenhaIgual() {
    var senha = document.getElementById('senha').value;
    var confirm_senha = document.getElementById('confirm_senha').value;

    if (senha != confirm_senha) {
        return false;
    } else {
        return true;
    }
}

function validarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var emailHelp = document.getElementById('emailHelp');
    var senhaHelp = document.getElementById('senhaHelp');
    var confirm_senhaHelp = document.getElementById('confirm_senhaHelp');

    console.log(validarSenhaIgual());

    if (validarEmail(email) && validarSenha(senha) && validarSenhaIgual()) {
        window.location.href = "login.html";
    } else if (!validarEmail(email)) {
        emailHelp.innerHTML = "Email inválido";
    } else if (!validarSenha(senha)) {
        senhaHelp.innerHTML = "Senha inválida";
    } else if (validarSenhaIgual() == false) {
        senhaHelp.innerHTML = "Senhas não conferem";
        confirm_senhaHelp.innerHTML = "Senhas não conferem";
    }

}
