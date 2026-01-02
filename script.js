document.addEventListener('DOMContentLoaded', function() {
    const entradaTexto = document.getElementById('entrada-texto');
    const botaoGerar = document.getElementById('gerar-qr');
    const divisaoResultado = document.getElementById('qr-resultado');

    botaoGerar.addEventListener('click', gerarCodigoQR);
    entradaTexto.addEventListener('keypress', function(evento) {
        if (evento.key === 'Enter') {
            gerarCodigoQR();
        }
    });

    function gerarCodigoQR() {
        const texto = entradaTexto.value.trim();
        divisaoResultado.innerHTML = '';

        if (texto === '') {
            mostrarMensagem('Por favor, digite algum texto ou URL!', 'erro');
            return;
        }

        try {
            new QRCode(divisaoResultado, {
                text: texto,
                width: 220,
                height: 220,
                colorDark: '#333333',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });

            mostrarMensagem('QR Code gerado com sucesso!', 'sucesso');
        } catch (erro) {
            mostrarMensagem('Erro ao gerar QR Code: ' + erro.message, 'erro');
        }
    }

    function mostrarMensagem(texto, tipo) {
        const mensagem = document.createElement('p');
        mensagem.className = tipo;
        mensagem.textContent = texto;
        divisaoResultado.appendChild(mensagem);
    }
});
