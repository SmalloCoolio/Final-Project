// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
    }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
        var navbar = document.getElementById("myNavbar");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navbar.className = "bar" + " card" + " animate-top" + " white";
        } else {
            navbar.className = navbar.className.replace(" card animate-top white", "");
        }
    }
  
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("show") == -1) {
          x.className += " show";
      } else {
          x.className = x.className.replace(" show", "");
      }
  }