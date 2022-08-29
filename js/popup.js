document.querySelector('.header-bot__login').onclick = function() {
    document.body.style.overflow = 'hidden';
    document.querySelector('.popup').classList.toggle('popup-open');
};
document.querySelector('.popup-before').onclick = function() {
    document.querySelector('.popup').classList.toggle('popup-open');
    document.body.style.overflow = 'visible';
};
document.querySelector('.popup-wrap__form-btn2').onclick = function() {
    document.querySelector('.popup').classList.toggle('popup-open');
    document.body.style.overflow = 'visible';
};
document.getElementById('popup-btns__btn-reg').addEventListener("click", function() {
    document.getElementById('popup-btns__btn-reg').style.background = "#847CFB";
    document.getElementById('popup-btns__btn-reg').style.color = '#FFFFFF';
    document.getElementById('popup-btns__btn-login').style.background = "#EDEDED";
    document.getElementById('popup-btns__btn-login').style.color = '#303030';
    document.getElementById('popup-wrap__form-login1').style.display = 'none';
    document.getElementById('popup-wrap__form-login2').style.display = 'none';
    document.getElementById('popup-wrap__form-reg3').style.display = 'block';
    document.getElementById('popup-wrap__form-reg5').style.display = 'block';
    document.getElementById("popup-wrap__form-btn1").style.display = 'none';
    document.getElementById("popup-wrap__form-btn3").style.display = 'block';
});
document.getElementById('popup-btns__btn-login').addEventListener("click", function() {
    document.getElementById('popup-btns__btn-reg').style.background = "#EDEDED";
    document.getElementById('popup-btns__btn-reg').style.color = '#303030';
    document.getElementById('popup-btns__btn-login').style.background = "#847CFB";
    document.getElementById('popup-btns__btn-login').style.color = '#FFFFFF';
    document.getElementById('popup-wrap__form-login1').style.display = 'block';
    document.getElementById('popup-wrap__form-login2').style.display = 'block';
    document.getElementById('popup-wrap__form-reg3').style.display = 'none';
    document.getElementById('popup-wrap__form-reg5').style.display = 'none';
    document.getElementById("popup-wrap__form-btn1").style.display = 'block';
    document.getElementById("popup-wrap__form-btn3").style.display = 'none';
});
// popup