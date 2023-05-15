document.addEventListener('DOMContentLoaded', function () {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const subtotal = document.querySelector('div.info div:first-child span:last-child');
    const valor = document.querySelector('.dobrarValor').textContent.trim().split(' ')[1];
    subtotal.textContent = `R$ ${0}`;
    incrementButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const quantitySpan = button.parentNode.querySelector('span');
            const currentQuantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = currentQuantity + 1;

            if (quantitySpan.textContent) {
                var subtotal1 = parseFloat(subtotal.textContent.replace('R$ ', ''));
                var result = subtotal1 + 800;
                subtotal.textContent = 'R$ ' + result.toFixed(2);
            } else {
                subtotal.textContent = `R$ ${valor}`;
            }
        });
    });

    decrementButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const quantitySpan = button.parentNode.querySelector('span');
            const currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity > 0) {
                quantitySpan.textContent = currentQuantity - 1;
                if (quantitySpan.textContent) {
                    var subtotal1 = parseFloat(subtotal.textContent.replace('R$ ', ''));
                    var result = subtotal1 - 800;
                    subtotal.textContent = 'R$ ' + result.toFixed(2);
                } else {
                    subtotal.textContent = `R$ ${valor}`;
                }
            }
        });
    });

    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });


    function handleFormSubmit(event) {
        event.preventDefault();

        const input = event.target.querySelector('input');
        const cupom = input.value;

        if (cupom === 'CUPOM30') {
            const totalElement = document.querySelector('.info div:first-of-type span:last-of-type');
            const total = parseFloat(totalElement.innerText.replace('R$ ', ''));
            const desconto = total * 0.3; // Aplica o desconto de 30%
            totalElement.innerText = 'R$ ' + (total - desconto).toFixed(2); // Atualiza o valor total com o desconto aplicado

            alert("CUPOM ADICIONADO COM SUCESSO");
        }else{
            alert("Cupom inválido");

        }

        localStorage.setItem('cupom', input.value);

        input.value = '';
    }

    const form = document.querySelector('.meu-formulario');
    form.addEventListener('submit', handleFormSubmit);
});
// Função para abrir o modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Função para enviar o formulário de informações do cartão
function submitForm() {
    // Obter os valores dos campos do formulário
    var cardNumber = document.getElementById("cardNumber").value;
    var cardName = document.getElementById("cardName").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    // Fazer alguma validação dos valores aqui, se necessário

    // Enviar o formulário (ou fazer outra coisa com os valores)
    alert("Os dados do cartão foram enviados:\nNúmero do cartão: " + cardNumber + "\nNome no cartão: " + cardName + "\nData de validade: " + expiryDate + "\nCVV: " + cvv);

    // Fechar o modal
    closeModal();
}
