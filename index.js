const open = document.getElementById('open-project')
const model_container = document.getElementById('modal-container')
const close = document.getElementById('closeproject')

open.addEventListener('click',() => {
  
  model_container.classList.add('show');
  var x = document.getElementsByTagName("BODY")[0];
  x.style.position = 'fixed';

  
});
close.addEventListener('click',() => {
  model_container.classList.remove('show');
  var x = document.getElementsByTagName("BODY")[0];
  x.style.position= 'static';
});
// Open when someoe clicks the 3 bars
function openNav() {
  document.getElementById("myNav").style.width = "100%";

}
// Close when someone clicks on the X symbol

function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

