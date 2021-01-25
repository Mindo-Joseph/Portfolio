const open = document.getElementById('open-project')
const model_container = document.getElementById('modal-container')
const close = document.getElementById('closeproject')
// project 2
const open2 = document.getElementById('open-project2')
const model_container2 = document.getElementById('modal-container2')
const close2 = document.getElementById('closeproject2')
// project 3
const open3 = document.getElementById('open-project3')
const model_container3 = document.getElementById('modal-container3')
const close3 = document.getElementById('closeproject3')
const open4 = document.getElementById('open-project4')
const model_container4 = document.getElementById('modal-container4')
const close4 = document.getElementById('closeproject4')

const liveviewp1 = document.getElementById('artspeak-live')
const sourcecodep1 = document.getElementById('artspeak-code')
const liveviewp2 = document.getElementById('movietell-live')
const sourcecodep2 = document.getElementById('movietell-code')
const liveviewp3 = document.getElementById('zombie-live')
const sourcecodep3 = document.getElementById('zombie-code')
const liveviewp4 = document.getElementById('funza-live')
const sourcecodep4 = document.getElementById('funza-code')
const contactform = document.getElementById('contact')
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

// Project 3

open3.addEventListener('click',() => {
  
  model_container3.classList.add('show');
  var x = document.getElementsByTagName("BODY")[0];
  x.style.position = 'fixed';

  
});
close3.addEventListener('click',() => {
  model_container3.classList.remove('show');
  var x = document.getElementsByTagName("BODY")[0];
  x.style.position= 'static';
});
// open live view project
liveviewp3.addEventListener('click',() => {
  window.location = "https://still-mountain-57347.herokuapp.com/"
});
sourcecodep3.addEventListener('click', () => {
  window.location = "https://github.com/Mindo-Joseph/ShooterGame"
});

// Project 4

open4.addEventListener('click',() => {
  
  model_container4.classList.add('show');
  var x = document.getElementsByTagName("BODY")[0];
  x.style.position = 'fixed';

  
});
close4.addEventListener('click',() => {
  model_container4.classList.remove('show');
  var x = document.getElementsByTagName("BODY")[0];
  x.style.position= 'static';
});
// open live view project
liveviewp4.addEventListener('click',() => {
  window.location = "https://still-mountain-57347.herokuapp.com/"
});
sourcecodep4.addEventListener('click', () => {
  window.location = "https://github.com/Mindo-Joseph/FunzaTube2.0"
});
// Open when someoe clicks the 3 bars
function openNav() {
  document.getElementById("myNav").style.width = "100%";

}
// Close when someone clicks on the X symbol

function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

function showLinks(x) {
  if (x.matches) {
    document.getElementById("myNav").style.display = "block";
  }
}

var x = window.matchMedia("(min-width: 768px)")
showLinks(x);
x.addListener(showLinks);


