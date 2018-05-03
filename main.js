
const modalButton = document.getElementById('modal-button');
const modal = document.getElementById('modal');
const close = document.querySelector('.close');

//Show modal
modalButton.addEventListener('click', function() {
  modal.style.display = "block";
});

//Close modal with close button
close.addEventListener('click', function() {
  modal.style.display = "none";
});

//Close modal clicking outside modal
window.addEventListener('click', function(e){
  if (e.target == modal){
    modal.style.display = "none";
  }
});