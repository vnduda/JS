// $(seletor).ação();

/**** AULA 01 ****/
//Função que ao clicar no botão o "Olá mundo" é ocultado
    $(document).ready(function(){ //Verificar que o documento foi carregado
        $('button').click(function(){
           $('h1').hide()
        });
    });

//Verificação do documento de forma mais simples:
    //$(function(){
    // });

/**** AULA 02 e 03****/
//Alterando o CSS e Efeito fade
    /*$(function(){
        $('#azul').click(function(){
            $('p').css("color", "blue");
            //$('p').fadeOut();
        });

        $('#vermelho').click(function(){
            $('p').css("color", "red");
            $('p').fadeOut(3000);
            $('p').delay(1000);
            $('p').fadeIn(5000);
        });
    }); */

/**** AULA 04 ****/

    $(function(){
        $('#azul').click(function(){
            $('p').css("color", "blue");
            //$('p').fadeOut();
    });

    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css('color', 'red')
            .css('border', '1px solid red')
            .delay(3000)
            .fadeOut();
    });
});


