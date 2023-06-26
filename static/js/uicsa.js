
 
 
 
 // for scroll bottom to tup

 let mybutton = document.getElementById("bottomToTopBtn");
 let nav = document.getElementById("nav");
 let logo = document.getElementById("logoIcon");
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";   
        nav.classList.add("navbar-fixed-top");
        logo.style.display="block";
         
       

     } else {
        mybutton.style.display = "none";
        nav.classList.remove("navbar-fixed-top");
        logo.style.display="none";
     


     }
 }



 

//  When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }




// When the user clicks on div, open the popup
// function modal() {
//   var popup = document.getElementById("myModal");

//   popup.style.display="block";

// }
// function closeFunction(){
//  var close = document.getElementById("myModal");
//  close.style.display="none"

// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == popup) {
//         popup.style.display = "none";
//     }
//   }


  


