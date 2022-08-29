// popop filter
    document.getElementById('admin-btns-add1').addEventListener("click", function() {
        document.querySelector(".type-popup").style.display = "flex";
        document.body.style.overflow = 'hidden';
    });
    [document.getElementById("close-popup1"), document.getElementById("type-popup-before")].forEach(function(elem) {
        elem.addEventListener("click", function() {
            document.querySelector(".type-popup").style.display = "none";
            document.body.style.overflow = 'visible';
        })
    })
    // popop admin type
    document.querySelector(".admin-btns-add2").addEventListener("click", function() {
        document.querySelector(".brand-popup").style.display = "flex";
        document.body.style.overflow = 'hidden';
    });
    [document.getElementById("close-popup2"), document.getElementById("brand-popup-before")].forEach(function(elem) {
        elem.addEventListener("click", function() {
            document.querySelector(".brand-popup").style.display = "none";
            document.body.style.overflow = 'visible';
        })
    })
    // popup admin brand
    document.querySelector(".admin-btns-add3").addEventListener("click", function() {
        document.querySelector(".device-popup").style.display = "flex";
        document.body.style.overflow = 'hidden';
    });
    [document.getElementById("close-popup3"), document.getElementById("device-popup-before")].forEach(function(elem) {
        elem.addEventListener("click", function() {
            document.querySelector(".device-popup").style.display = "none";
            document.body.style.overflow = 'visible';
        })
    });
    // popup admin device
    document.querySelector('.admin-btn__2').onclick = function() {
        document.querySelector('.admin-btn__2').classList.add('admin-btn__active');
        document.querySelector('.admin-btn__1').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__3').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__4').classList.remove('admin-btn__active');
        document.getElementById('admin-btn').style.display = 'none';
        document.getElementById('admin-history').style.display = 'block';
        document.getElementById('shop-history').style.display = 'none';
    };
    document.querySelector('.admin-btn__1').onclick = function() {
        document.querySelector('.admin-btn__2').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__1').classList.add('admin-btn__active');
        document.querySelector('.admin-btn__3').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__4').classList.remove('admin-btn__active');
        document.getElementById('admin-btn').style.display = 'block';
        document.getElementById('admin-history').style.display = 'none';
        document.getElementById('shop-history').style.display = 'none';
    };
    document.querySelector('.admin-btn__3').onclick = function() {
        document.querySelector('.admin-btn__2').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__1').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__4').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__3').classList.add('admin-btn__active');
        document.getElementById('shop-history').style.display = 'none';
    };
    document.querySelector('.admin-btn__4').onclick = function() {
        document.querySelector('.admin-btn__2').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__1').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__3').classList.remove('admin-btn__active');
        document.querySelector('.admin-btn__4').classList.add('admin-btn__active');
        document.getElementById('admin-history').style.display = 'none';
        document.getElementById('shop-history').style.display = 'block';
        document.getElementById('admin-btn').style.display = 'none';
    };
    // admin btn
     document.querySelector(".admin-history__block-btn").addEventListener("click", function() {
        document.querySelector(".product-popup").style.display = "flex";
        document.body.style.overflow = 'hidden';
    });
    [document.getElementById("product-wrap-form__btn"), document.getElementById("product-popup-before")].forEach(function(elem) {
        elem.addEventListener("click", function() {
            document.querySelector(".product-popup").style.display = "none";
            document.body.style.overflow = 'visible';
        })
    })
    document.querySelector(".product-wrap-form__btn-add").addEventListener("click", function() {
        document.querySelector('.alert').classList.add('alert-active');
        setTimeout(() => {
            document.querySelector('.alert').classList.remove('alert-active');
        }, 2500);
    });
    // popup admin product