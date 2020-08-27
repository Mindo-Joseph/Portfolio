const open = document.getElementById('open-project')
const model_container = document.getElementById('modal-container')
const close = document.getElementById('closeproject')
// project 2
const open2 = document.getElementById('open-project2')
const model_container2 = document.getElementById('modal-container2')
const close2 = document.getElementById('closeproject2')

const liveviewp1 = document.getElementById('artspeak-live')
const sourcecodep1 = document.getElementById('artspeak-code')
const liveviewp2 = document.getElementById('movietell-live')
const sourcecodep2 = document.getElementById('movietell-code')

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
// open live view project
liveviewp1.addEventListener('click',() => {
  window.location = "https://fast-shore-77542.herokuapp.com/"
});
sourcecodep1.addEventListener('click', () => {
  window.location = "https://github.com/Mindo-Joseph/ArtSpeak"
});

// Project 2

open2.addEventListener('click',() => {
  
  model_container2.classList.add('show');
  var x = document.getElementsByTagName("BODY")[0];
  x.style.position = 'fixed';

  
});
close2.addEventListener('click',() => {
  model_container2.classList.remove('show');
  var x = document.getElementsByTagName("BODY")[0];
  x.style.position= 'static';
});
// open live view project
liveviewp2.addEventListener('click',() => {
  window.location = "https://t.me/MovieTellBot"
});
sourcecodep2.addEventListener('click', () => {
  window.location = "https://github.com/Mindo-Joseph/MovieBot"
});
// Open when someoe clicks the 3 bars
function openNav() {
  document.getElementById("myNav").style.width = "100%";

}
// Close when someone clicks on the X symbol

function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

