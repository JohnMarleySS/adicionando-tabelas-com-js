function Adicionar(nome, sobrenome, email, altura, sexo) {

    var tb = document.getElementById('tbPessoas');
    var qtdLinhas = tb.rows.lenght;
    var linha = tb.insertRow(qtdLinhas);

    var cellNome = linha.insertCell(0);
    var cellSobrenome = linha.insertCell(1);
    var cellEmail = linha.insertCell(2);
    var cellAltura = linha.insertCell(3);
    var cellSexo = linha.insertCell(4);

    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
    cellEmail.innerHTML = email;
    cellAltura.innerHTML = altura;
    cellSexo.innerHTML = sexo;

}