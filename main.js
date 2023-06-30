const formularios = document.getElementById('form-maiorMenor');



formularios.addEventListener('submit', function(e) {
  e.preventDefault()
  
  comparacao()
  
  const campoA = document.getElementById('campA')
  const campoB = document.getElementById('campB')
  
  
  
  function comparacao () {
    
    let maior = campoA.valeu >= campoB.value;

    if (maior) {
    alert('sim')
    } else {

      alert('nnão')

      }

  }



})

console.log(formularios);