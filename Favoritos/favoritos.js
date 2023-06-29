document.addEventListener('DOMContentLoaded', function () {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const subtotal = document.querySelector('div.info div:first-child span:last-child');
    const valor = document.querySelector('.dobrarValor').textContent.trim().split(' ')[1];
    
    

    

    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });


   

    const form = document.querySelector('.meu-formulario');
    form.addEventListener('submit', handleFormSubmit);
});
