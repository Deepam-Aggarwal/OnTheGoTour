function MyFunction() {
    var dots = document.getElementById("dotss");
    var moreText=document.getElementById("more");
    var btnText =document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function modal1() {
    document.getElementById("modal-1").classList.toggle("show"); document.getElementById("modal-1").style.display = "block";
}

function modal2() {
    document.getElementById("modal-2").classList.toggle("show"); document.getElementById("modal-2").style.display = "block";
}

function closemodal() {
    document.getElementById("modal-1").classList.remove("show"); document.getElementById("modal-1").style.display = "none";
     document.getElementById("modal-2").classList.remove("show"); document.getElementById("modal-2").style.display = "none";
}