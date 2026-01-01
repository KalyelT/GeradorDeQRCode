document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const gerarButton = document.getElementById('gerar-qr');
    const resultDiv = document.getElementById('qr-resultado');

    gerarButton.addEventListener('click', function() {
        const text = textInput.value.trim();

        // Limpar resultado anterior
        resultDiv.innerHTML = '';

        // Validar entrada
        if (text === '') {
            const errorMsg = document.createElement('p');
            errorMsg.className = 'error';
            errorMsg.textContent = 'Por favor, digite algum texto ou URL!';
            resultDiv.appendChild(errorMsg);
            return;
        }

        // Gerar QR Code
        try {
            const qrCode = new QRCode(resultDiv, {
                text: text,
                width: 200,
                height: 200,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });

            // Adicionar mensagem de sucesso
            const successMsg = document.createElement('p');
            successMsg.className = 'success';
            successMsg.textContent = 'QR Code gerado com sucesso!';
            resultDiv.appendChild(successMsg);
        } catch (error) {
            const errorMsg = document.createElement('p');
            errorMsg.className = 'error';
            errorMsg.textContent = 'Erro ao gerar QR Code: ' + error.message;
            resultDiv.appendChild(errorMsg);
        }
    });

    // Permitir gerar QR Code pressionando Enter
    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            gerarButton.click();
        }
    });
});
