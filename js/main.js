document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close");
  const KYCInfo = document.querySelector(".KYC__info");

  closeBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    KYCInfo.style.display = "none"; // Hide the KYC info block when the link is clicked
  });
});

function toggleDialog() {
  var dialog = document.getElementById("myDialog");
  if (dialog.style.display === "none") {
    dialog.style.display = "block";
  } else {
    dialog.style.display = "none";
  }
}
const closeLink = document.getElementById('closeDialog');
const dialog = document.getElementById('myDialog');

closeLink.addEventListener('click', function() {
  dialog.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", () => {
  const premiumButton = document.querySelector('#premiumButton');
  const premiumToggle = document.querySelector('#premiumToggle');

  function toggleInfoItems() {
    if (window.innerWidth < 505) {
      premiumToggle.classList.add('hidden');
    } else {
      premiumToggle.classList.remove('hidden');
    }
  }

  toggleInfoItems(); // Проверяем при загрузке страницы

  premiumButton.addEventListener('click', () => {
    premiumToggle.classList.toggle('hidden');
  });

  window.addEventListener('resize', toggleInfoItems); // Проверяем при изменении размера окна
});


function toggleDialog() {
  var backdrop = document.getElementById("backdrop");
  var dialog = document.getElementById("myDialog");
  var burgerIcon = document.getElementById("burgerIcon");
  var profileLink = document.getElementById("profileLink");

  if (dialog.style.display === "none") {
    dialog.style.display = "block";
    backdrop.style.display = "block";
    if (window.innerWidth >= 1041) {
      backdrop.style.filter = "blur(5px)";
    }
    burgerIcon.innerHTML = '<img src="img/close.svg" alt="close">';
    profileLink.style.display = "none";
  } else {
    dialog.style.display = "none";
    backdrop.style.display = "none";
    backdrop.style.filter = "none";
    burgerIcon.innerHTML = '<div class="burger__icon"><img src="img/burger.svg" alt="burger"></div>';
    profileLink.style.display = "flex";
  }
}

window.addEventListener("resize", function() {
  var backdrop = document.getElementById("backdrop");
  if (window.innerWidth < 1041) {
    backdrop.style.display = "none";
    backdrop.style.filter = "none";
  }
});


var mySwiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoplay: {
    delay: 5000, // Задержка между слайдами в миллисекундах (в данном случае 5 секунд)
    disableOnInteraction: false, // Отключение автопрокрутки при взаимодействии пользователя с слайдером
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});