document.querySelector('.header-bot__btn').onclick = function() {
    document.querySelector('.header-bot__comp-line').classList.toggle('header-bot__comp-active');
    document.querySelector('.header-product').classList.toggle('header-product__active');
};
document.querySelector('.menu-links').onclick = function() {
    document.querySelector('.menu-popup').classList.toggle('menu-popup__active');
    document.querySelector('.menu-links').classList.toggle('menu-links__active');
};
document.querySelector('.profile-btns__btn-2').onclick = function() {
    document.querySelector('.profile-btns__btn-2').classList.add('profile-btns__active');
    document.querySelector('.profile-btns__btn-1').classList.remove('profile-btns__active');
    document.querySelector('.profile-btns__btn-4').classList.remove('profile-btns__active');
    document.getElementById('profile-info__wrap').style.display = 'none';
    document.getElementById('profile-history__wrap').style.display = 'block';
};
document.querySelector('.profile-btns__btn-1').onclick = function() {
    document.querySelector('.profile-btns__btn-1').classList.add('profile-btns__active');
    document.querySelector('.profile-btns__btn-2').classList.remove('profile-btns__active');
    document.querySelector('.profile-btns__btn-4').classList.remove('profile-btns__active');
    document.getElementById('profile-info__wrap').style.display = 'block';
    document.getElementById('profile-history__wrap').style.display = 'none';
};
document.querySelector('.profile-btns__btn-4').onclick = function() {
    document.querySelector('.profile-btns__btn-4').classList.add('profile-btns__active');
    document.querySelector('.profile-btns__btn-1').classList.remove('profile-btns__active');
    document.querySelector('.profile-btns__btn-2').classList.remove('profile-btns__active');
};
// profile