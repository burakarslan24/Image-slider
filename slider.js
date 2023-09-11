var resim = document.getElementsByClassName("resim");
var kutucuk = document.getElementsByTagName("li");

var index = 0;
function galeri() {
  if (index >= resim.length) {
    index = 0;
  } else if (index < 0) {
    index = resim.length - 1;
  }

  for (let i = 0; i < resim.length; i++) {
    resim[i].classList.remove("aktif");
    kutucuk[i].classList.remove("aktiflist");
  }
  resim[index].classList.add("aktif");
  kutucuk[index].classList.add("aktiflist");
}
galeri();

function ileri() {
  index++;
  galeri();
}

function geri() {
  index--;
  galeri();
}

sure = setInterval("ileri()", 2500);

function dur() {
  clearInterval(sure);
}
function devam() {
  sure = setInterval("ileri()", 2500);
}

for (let i = 0; i < kutucuk.length; i++) {
  kutucuk[i].addEventListener("click", function (e) {
    Array.from(resim).forEach(function (pic) {
      pic.classList.remove("aktif");
    });
    Array.from(kutucuk).forEach(function (li) {
      li.classList.remove("aktiflist");
    });
    resim[e.target.value - 1].classList.add("aktif");
    kutucuk[e.target.value - 1].classList.add("aktiflist");
    index = e.target.value - 1;
  });
}
