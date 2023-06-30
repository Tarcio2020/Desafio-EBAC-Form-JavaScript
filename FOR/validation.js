
const formulario = document.getElementById('form-maiorMenor');

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    validation()

    async function validation() {
        const valorMaior = document.getElementById('campA').value;
        const valorMenor = document.getElementById('campB').value;
    
        if (valorMenor > valorMaior) {
            alert('Campo B maior que o Campo A');
        } else {
            alert('Campo B menor que o Campo A');
        }
    }

})
