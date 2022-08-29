document.querySelector(".catalog-card__block-btn").addEventListener("click", function() {
    document.querySelector('.alert').classList.add('alert-active');
    setTimeout(() => {
        document.querySelector('.alert').classList.remove('alert-active');
    }, 2500);
});
// alert catalog