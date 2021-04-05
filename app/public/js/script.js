function Name(name) {                                                               //função para verificar o nome
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;                     //Expressão regular (regex)
    if (name == "") return null;                                                    //ve se está me branco
    if (name.length < 3) return false;                                              //menos de 3 espaços
    console.log(regex.test(name));  
    console.log(name)
    if (regex.test(name)) return true;                                             //retorna false caso tenha algum caracter indevido
    return false;
}
function CPF(cpf) {
    //if (cpf == "") return null;   
    if (typeof (cpf == "number")) cpf = cpf.toString();
    if (cpf.length > 11) {
        cpf = cpf.replace("-", "");
        cpf = cpf.split(".").join("");
    }
    if (cpf.length > 11 || cpf.length < 11) return false;
    let resultDigit = 0;
    for (let i = 10; i > 1; i--) {
        resultDigit += cpf[10 - i] * i;
    }

    resultDigit = resultDigit % 11 == 0 || resultDigit % 11 == 1 ? 0 : 11 - resultDigit % 11;

    if (resultDigit != cpf[9]) return false;

    resultDigit = 0;

    for (let i = 11; i > 1; i--) {
        resultDigit += cpf[11 - i] * i;
    }

    resultDigit = resultDigit % 11 == 0 || resultDigit % 11 == 1 ? 0 : 11 - resultDigit % 11;

    if (resultDigit != cpf[10]) return false;

    return true;

}
function Email(email) {
    if (email == "") return null;                                                       //vê se tá vazio
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  //expressão regular
    return regex.test(email);                                                          //valida o email
}

function Password(pass) {
    if (pass == "") return null;                                                       //vê se tá vazio
    if (pass.length < 5 || pass.length > 255) return false;
    return true;
}
function confirmPassword(pass, cpass) {
    if (pass === cpass) return true;                                                    //compara a senha com a senha de confirmação
    return false;
}
function checkBirthdate(birthdate) {                                                    
    if (birthdate == "") return null;
    let date = new Date();                                                              //pega a data atual e atribui a variaveis diferentes
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let b_year = parseInt(birthdate.slice(0, 4));                                       //pega a data informada pelo usuario e divide em outras variaveis
    let b_month = parseInt(birthdate.slice(5, 7));
    let b_day = parseInt(birthdate.slice(8, 10));
    if (b_year > year || year - b_year > 110) return false                              //checando a idade max e minima

    if (b_year == year && b_month > month) return false                         

    if (b_year == year && b_month == month && b_day > day) return false

    return true;
}
function displayMessage(name, form, type, msg) {                                        //função para mostrar o erro ou acerto para o usuario, recebe o nome do campo, aonde ele tá, a operação e a mensagem
    if (document.getElementById(`small-${name}`)) {                                     
        form.removeChild(form.lastChild);                                               //se já existir um aviso ele exclui
    }
    let small = document.createElement("small");
    if (type == true) {                                                                 //Se foi um acerto cria o elemento com a cor verde e erro com a cor vermelha
        small.innerText = `${name} ${msg}`;
        small.className = "text-success";
        small.id = `small-${name}`;
        form.appendChild(small);
    } else {                                                                            
        small.innerText = `${name} ${msg}`;
        small.className = "text-danger";
        small.id = `small-${name}`;
        form.appendChild(small);
    }
}

function validate() {                                                                   //função principal para validar
    let forms = document.getElementsByClassName("form-group")                           //recebe os valores dos campos
    let name = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let birthdate = document.getElementById("birthdate").value;
    let error = false;                                                                      //parametro para confirmar se pode ou n enviar o formulário
    /*if (Name(name) === false) {
        displayMessage("Nome", forms[0], false, "inválido1");                                //chamada das funções, identificando se está certo, errado ou vazio
        error = true;
    } else if (Name(name) === null) {
        displayMessage("Nome", forms[0], null, "obrigatório");
        error = true;
    } else {
        displayMessage("Nome", forms[0], true, "válido");
    }*/
    /*if (CPF(cpf) === false) {
        displayMessage("CPF", forms[1], false, "inválido");
        error = true;
    } else if (CPF(cpf) === null) {
        displayMessage("CPF", forms[1], null, "obrigatório");
        error = true;
    } else {
        displayMessage("CPF", forms[1], true, "válido");
    }*/
    /*if(Email(email) === false){
        displayMessage("Email", forms[2], false, "inválido");
        error = true;
    }else if (Email(email) === null) {
        displayMessage("Email", forms[2], null, "obrigatório");
        error = true;
    }else{
        displayMessage("Email", forms[2], true, "válido");
    }*/

    /*if (Password(password) === false) {
        displayMessage("Senha", forms[3], false, "inválida");
        error = true;
    } else if (Password(password) === null) {
        displayMessage("Senha", forms[3], null, "obrigatória");
        error = true;
    } else {
        displayMessage("Senha", forms[3], true, "válida");
    }

    if (confirmPassword(password, confirm_password) === false && Password(password) === true) {
        displayMessage("Senhas", forms[4], false, "diferentes");
        error = true;
    } else if (confirmPassword(password, confirm_password) === true && Password(password) === true) {
        displayMessage("Senhas", forms[4], true, "compatíveis");
    }*/

    if (checkBirthdate(birthdate) === false) {
        displayMessage("Data", forms[5], false, "de nascimento inválida");
        error = true;
    } else if (checkBirthdate(birthdate) === true) {
        displayMessage("Data", forms[5], true, "de nascimento válida");
    }

    if (error == true) {                                                //se tudo der certo faz o submit                                          
        return false;
    } else {
        document.getElementById("form").submit();           
    }

}

// Calculando a idade de cada usuário encontrado e imprimindo-as na tabela
window.onload = function() {
    const birthdateTd = document.querySelectorAll('.birthdateTd');
    birthdateTd.forEach(element => {
        const birthdate = new Date(parseInt(element.dataset.year), parseInt(element.dataset.month), parseInt(element.dataset.date));
        const now = new Date();
        element.innerText = Math.floor((now - birthdate) / (1000 * 3600 * 24 * 365.25));
    });
}

function mask(element, pattern) {
    unmask(element);

    for (let i = 0; i < element.value.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] === '#') {
                pattern = pattern.replace(pattern[j], element.value[i]);
                break;
            }
        }
    }
    element.value = pattern;
}

function unmask(element) {
    let value = element.value;
    for (let i = 0; i < value.length; i++) {
        if (!(parseInt(value[i]) || value[i] == '0')) {
            value = value.replace(value[i], '');
        }
    }
    element.value = value;
}

function numeric(element) {
    element.value = element.value.replace(/[^0-9]/g,'');
}