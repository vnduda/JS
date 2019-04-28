//AULAS INTRODUTÓRIAS//

/*** Aula 01 - Hello World ***/
    //alert("Olá mundo");
    //alert gera um popup de mensagem do próprio browser


/*** Aula 02 - Variáveis ***/
    //var mensagem = "Olá mundo"
    //alert(mensagem);


/*** Aula 03 - Operações Matemáticas ***/
    /*var a = 2;
    var b = 3;
    var soma = a+b;
    var sub = a-b;
    alert(soma);
    alert(sub);*/


/*** Aula 04 - Estrutura if-else ***/
    /*var a = 2;
    var b = 3;
    var soma = a+b;
    var sub = a-b;
    if(b % 2 == 1) {
        alert("Número ímpar");
    } else {
        alert("Número par");
    } */


/*** Aula 05 - Array ***/  
    /*var lista = ["laranja", "maçã", "banana"];
    alert(lista[0]);
    for(i in lista) {
        alert(i); //irá mostrar todos os indices da lista, de 0 a 2
        alert(lista[i]); // irá mostrar o conteudo da lista
    } */


/*** Aula 06 - Console ***/ 
    //console.log("olá mundo");


/*** Aula 07 - Funções ***/ 
    /*function soma(a, b) {
        console.log(a+b);
    }
    soma(2, 2);

    function subtracao(a, b) {
        return a-b;
    }
    var s = subtração 5-3;
    console.log(s); 

    function multiplicacao(a, b) {
        return a*b;
    }
    console.log(multiplicacao(5,5)); */


/*** Aula 08 - Eventos ***/ 
    // -> button em html cria um botão
    // -> button onclick executa uma ação se você clica no botão

    /*function mensagem() {
        alert("Ei, não clique em mim");
    } */

/*** Aula 09 - Document Object Model ***/ 
    /*function mudaCor(cor){
        var elemento = document.getElementById("mensagem");
        elemento.style.color = cor;
    } */
    //muda a cor da letra na pagina


/*** Aula 10 - Validação de formulário ***/ 
    function valida() {
        var nome = document.getElementById('nome');
        if (nome.value == "") {
            alert("Campo nome não pode estar em branco");
        } else {
            alert("Nenhum problema foi detectado. Seu formulário pode ser enviado com sucesso");
        }
    }