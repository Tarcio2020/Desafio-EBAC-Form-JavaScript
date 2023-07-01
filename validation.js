
const formulario = document.getElementById('form-maiorMenor');

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    validation()

    function validation() {
        const valorMaior = document.getElementById('campA').value;
        const valorMenor = document.getElementById('campB').value;
        
        
        function errorNumber() {
            const error = document.getElementById('p1').style.display = 'block';
            const error2 = document.getElementById('campB').style.border ='red 2px solid';
            console.log(error)
            console.log(error2)

        }
        
        function sucessNumber() {
            const sucess = document.getElementById('p1').style.display = 'none';
            console.log(sucess)
        }

        
        if (valorMenor < valorMaior) {
            errorNumber()
            Clean()
            return;
        }
        
        if (valorMenor > valorMaior) {
            sucessNumber()
            alert('Formulário enviado com sucesso');
            Clean()
            return;
            
        }
        
        function Clean() {
            const valorMaior = document.getElementById('campA').value = '';
            const valorMenor = document.getElementById('campB').value='';

        }
     

    }

})
