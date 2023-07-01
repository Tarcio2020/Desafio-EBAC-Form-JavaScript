
const formulario = document.getElementById('form-maiorMenor');

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    validation()

    function validation() {
        const valorMaior = document.getElementById('campA').value;
        const valorMenor = document.getElementById('campB').value;
        const error = document.getElementById('p1').style.display = 'block';

        function errorNumber() {
            console.log(error)
        }

        function backFormClean() {
            valorMaior.value = ' ';
            valorMenor.value = ' ';
        }
    
        if (valorMenor > valorMaior) {
            errorNumber()
            backFormClean() 
           

        } else {
            alert('Campo B menor que o Campo A');
        }

        


    }

})
