
function myFunction() {
  var x = document.getElementById("hamburger");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}