const formularios = document.querySelectorAll('#form-maiorMenor');

formularios[0].addEventListener('submit', function(e) {
  e.preventDefault()
  comparacao()


  function comparacao () {
    const campoA = document.querySelectorAll('#campA')
    const campoB = document.querySelectorAll('#campB')

    if (campoA >= campoB) {
      console.log('ssssssssss')
    } else {
      console.log('nnnnnnnnn')
    }
  }




})

