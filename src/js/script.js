
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
	//=========== モーダルとその中のswiper =====================================================
	//
    const openModalBtns = document.querySelectorAll(".js-modal-open");
    // モーダルを閉じるボタンを全て取得
    const closeModalBtns = document.querySelectorAll(".js-modal-close");

		openModalBtns.forEach((openModalBtn) => {
			openModalBtn.addEventListener("click", () => {
				var modal = openModalBtn.getAttribute('data-modal');
				// document.getElementById(modal).style.display = "block";
		     document.getElementById(modal).classList.add("is-active");
			});
		});
		
		closeModalBtns.forEach((closeModalBtn) => {
			closeModalBtn.addEventListener("click", () => {
				var modal = closeModalBtn.closest('.modal');
				// modal.style.display = "none";
				modal.classList.remove("is-active");
			});
		});

    // Swiperの設定
  // サムネイル
    var sliderThumbnail = new Swiper(".modal-swiper-thumbnail", {
      // loop: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: true,
      slideToClickedSlide: true,
      touchRatio: 0.2,
      grabCursor: true,
//      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

  	var modalSwiper = new Swiper(".modal-swiper", {
      loop: true,
      spaceBetween: 50,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: sliderThumbnail,
      },
    });

});
