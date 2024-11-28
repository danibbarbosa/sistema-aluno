function flip(){

document.getElementById('flipButton').addEventListener('click', function() {

    document.getElementById('aluno').classList.add('flipped');
  
  });

}


document.getElementById('flipButtonBack').addEventListener('click', function() {
  
    document.getElementById('card').classList.remove('flipped');
  
  });
  
  