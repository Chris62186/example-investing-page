var dropdown = document.getElementsByClassName("dropdown");
var dropdownNavSymbol = document.getElementsByClassName("dropdown-nav");

console.log(dropdown);

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
     if (content.style.display === "block") {
       content.style.display = "none";
       this.children[1].innerHTML="➕";
     } else {
       content.style.display = "block";
       this.children[1].innerHTML="➖";
     }
    console.log(this.children[1]);
  })
}
