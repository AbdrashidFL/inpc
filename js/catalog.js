    document.querySelector(".catalog-filter__mobile-btn").addEventListener("click", function() {
        document.querySelector(".catalog-filter__popup").style.display = "flex";
        document.body.style.overflow = 'hidden';
    });
    document.getElementById("catalog-filter__popup-before").addEventListener("click", function() {
        document.querySelector(".catalog-filter__popup").style.display = "none";
        document.body.style.overflow = 'visible';
    })
    // catalog