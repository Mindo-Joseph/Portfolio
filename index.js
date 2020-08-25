var MicroModal = require('micromodal');
MicroModal.init();
// Open when someoe clicks the 3 bars
function openNav() {
  document.getElementById("myNav").style.width = "100%";

}
// Close when someone clicks on the X symbol

function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

var accordion = document.getElementByClassName("accordion");
var i;
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    }

  );
}
