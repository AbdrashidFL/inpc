const editmain = document.querySelectorAll(".review-block__btn-edit");
const edit1 = document.querySelectorAll(".review-block__edit");
const subclose = document.querySelectorAll(".review-block__submit-close");
const edit2 = document.querySelectorAll(".review-block__submit-edit");
const text = document.querySelectorAll(".review-block__text");
const reviewmain = document.querySelectorAll(".review-1");

 for (let i = 0; i < editmain.length; i++) {
     editmain[i].addEventListener("click", function() {
        edit1[i].style.display = "block";
        subclose[i].style.display = "flex";
        edit2[i].style.display = "flex";
        text[i].style.display = "none";
        edit1[i].textContent=reviewmain[i].innerHTML;
     });
 }
// edit
const closemain = document.querySelectorAll(".review-block__submit-close");

for (let i = 0; i < closemain.length; i++) {
     closemain[i].addEventListener("click", function() {
        edit1[i].style.display = "none";
        subclose[i].style.display = "none";
        edit2[i].style.display = "none";
        text[i].style.display = "block";
     });
 }
 for (let i = 0; i < edit2.length; i++) {
     edit2[i].addEventListener("click", function() {
        edit1[i].style.display = "none";
        subclose[i].style.display = "none";
        edit2[i].style.display = "none";
        text[i].style.display = "block";
     });
 }
 const deletemain = document.querySelectorAll(".review-block__btn-delete");

 for (let i = 0; i < deletemain.length; i++) {
     deletemain[i].addEventListener("click", function() {
        edit1[i].style.display = "none";
        subclose[i].style.display = "none";
        edit2[i].style.display = "none";
        text[i].style.display = "block";
     });
 }
