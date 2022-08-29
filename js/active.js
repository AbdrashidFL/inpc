const catalogBtn = document.querySelectorAll(".catalog-btn");

for (let i = 0; i < catalogBtn.length; i++) {
    catalogBtn[i].onclick = function () {
        if (catalogBtn[i].classList.contains('catalog-btn__active')) {
            catalogBtn[i].classList.remove("catalog-btn__active");
        }
        else{
            for (let j = 0; j < catalogBtn.length; j++) {
                catalogBtn[j].classList.remove("catalog-btn__active");
            }
            catalogBtn[i].classList.add("catalog-btn__active");
        }
    }
}

const catalogBtnBrand = document.querySelectorAll(".catalog-btn__brand");

for (let i = 0; i < catalogBtnBrand.length; i++) {
    catalogBtnBrand[i].onclick = function () {
        if (catalogBtnBrand[i].classList.contains('catalog-btn__brand-active')) {
            catalogBtnBrand[i].classList.remove("catalog-btn__brand-active");
        }
        else{
            for (let j = 0; j < catalogBtnBrand.length; j++) {
                catalogBtnBrand[j].classList.remove("catalog-btn__brand-active");
            }
            catalogBtnBrand[i].classList.add("catalog-btn__brand-active");
        }
    }
}
// catalog btn