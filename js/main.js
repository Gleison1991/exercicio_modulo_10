$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000')

    $('#CPF').mask('000.000.000-00')

    $('#CEP').mask('00000-000')

    $('#form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            telefone: {
                required: true
            },

            enderecoCompleto: {
                required: true,
            },

            CPF: {
                required: true,
            },

            CEP: {
                required: true,
            },
        },
        messages: {
            nomeCompleto: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})
