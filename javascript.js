function myFunction() {
  let x = document.getElementById("myham-nav");
  if (x.className === "hamnav") {
    x.className += " responsive";
  } else {
    x.className = "hamnav";
  }
}