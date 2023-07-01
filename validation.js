
const formulario = document.getElementById('form-maiorMenor');

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    validation()

    function validation() {
        const valorMaior = document.getElementById('campA').value;
        const valorMenor = document.getElementById('campB').value;
        
        
        function errorNumber() {
            const error = document.getElementById('p1').style.display = 'block';
            console.log(error)
        }
        
        function sucessNumber() {
            const sucess = document.getElementById('p1').style.display = 'none';
            console.log(sucess)
        }

        
        if (valorMenor < valorMaior) {
            errorNumber()
            backFormClean()
            return;
        }
        
        if (valorMenor > valorMaior) {
            sucessNumber()
            backFormClean() 
            alert('Formulário enviado com sucesso');
            return;
            
        }
        
        
        function backFormClean() {
           valorMaior.value = '';
            valorMenor.value = '';
        }

    }

})
