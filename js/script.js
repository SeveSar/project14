document.addEventListener("DOMContentLoaded",(e) => {
  const mobileMenu = document.querySelector('.mobile-menu');
const burgerBtn = document.querySelector('.burger');
if (mobileMenu) {
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
    burgerBtn.classList.toggle('active')
  }
  burgerBtn.addEventListener('click', toggleMobileMenu)
}
;
  (function() {
  const autocronsContainer = document.querySelector('.avtocrons__container');
  if (autocronsContainer) {
    let autocronsSlider;
      function mobileSlider() {
        if (document.documentElement.clientWidth <= 574 && autocronsContainer.dataset.mobile === 'false') {
          autocronsSlider = new Swiper(autocronsContainer, {
            slidesPerView: 2,
            // loop: true,
            // preloadImages: false,
            spaceBetween: 10,
            breakpoints: {
              320: {
                slidesPerView: 1.9,
                spaceBetween: 10,
              },
              420: {
                slidesPerView: 2.5,
                spaceBetween: 17,
              },
            },
            navigation: {
              nextEl: '.avtocrons__button-next',
              prevEl: '.avtocrons__button-prev',
            }
          })
          autocronsContainer.dataset.mobile = 'true'
        } else if (document.documentElement.clientWidth > 574) {
          autocronsContainer.dataset.mobile = 'false'
          if (autocronsContainer.classList.contains('swiper-container-initialized')) {
            autocronsSlider.destroy()
          }
        }
      }
      mobileSlider()
      window.addEventListener('resize', mobileSlider);
  }
})();
  ;(function () {
  const map = document.querySelector('#ymap')

  if (!map) {
    return
  }
  const iconUrl = map.getAttribute('icon-url');
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        'ymap',
        {
          center: [55.736185, 37.577811],
          zoom: 10,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: iconUrl,
          // Размеры метки.
          iconImageSize: [53, 53],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      ),
      myPlacemarkWithContent = new ymaps.Placemark(
        [55.661574, 37.573856],
        {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
        }
      )

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent)
    myMap.behaviors.disable('scrollZoom')
  })
})()
;
   // selects
 const parentOfSelects = document.querySelector('.slots-choice');
 const selectsHeaders = document.querySelectorAll('.select__header');
 const selectsItems = document.querySelectorAll('.select__item');
 const selects = document.querySelectorAll('.select');
 if (selectsHeaders.length) {
   for (let i = 0; i < selectsHeaders.length; i++) {
     selectsHeaders[i].addEventListener('click', selectToggle)
   }
   for (let i = 0; i < selectsItems.length; i++) {
     selectsItems[i].addEventListener('click',selectChoose)
   }
   function selectToggle() {
     removeClassActive(this.closest('.select').dataset.select);
     this.closest('.select').classList.toggle('active')
   }
   function selectChoose() {
     const text = this.textContent;
     const dataValue = this.querySelector('input').value;
     const parent = this.closest('.select');
     const current = parent.querySelector('.select__current');
     const currentinput = parent.querySelector('.select__header input');
     current.textContent = text;
     currentinput.value = dataValue;
     parent.classList.remove('active')
   }
 }
 function removeClassActive(number) {
  for (let i = 0; i < selects.length; i++) {
    if (+number !== +(selects[i].dataset.select)) {
      selects[i].classList.remove('active')
    }
  }
};
    // mask init
  const inputsMask = document.querySelectorAll('.masked');
  if (inputsMask.length) {
    inputsMask.forEach(item => {
      Maska.create(item);
    })
  }
  // /end mask-init;
    // fixed header
  const header = document.querySelector('.header');
  // const intro = document.querySelector('.intro');
  let headerH = header.scrollHeight;
  let scrollPosition = window.scrollY;
  fixedHeader(headerH, scrollPosition)
  window.addEventListener('resize', (e) => {
    scrollPosition = window.scrollY;
    headerH = header.scrollHeight;
    fixedHeader(headerH, scrollPosition)
  })
  window.addEventListener('scroll', (e) => {
    scrollPosition = window.scrollY;
    headerH = header.scrollHeight;
    fixedHeader(headerH, scrollPosition)

  })
  function fixedHeader(headerH, scrollPosition) {
    if (scrollPosition >= headerH) {
      header.classList.add('fixed')
      // if (intro) {
      //   // intro.style.marginTop = headerH + 'px'
      // }
    } else {
      // if (intro) {
      //   // intro.style.marginTop = 0 + "px"
      // }
      header.classList.remove('fixed')
    }
  }
  // /end fiexd header;
  function animationHeight(bodyContent, button, isVisible = false) {
    if (bodyContent.style.maxHeight) {
      if (isVisible && bodyContent.classList.contains('visible')) {
        bodyContent.style.overflow = 'hidden'
      }
      bodyContent.style.maxHeight = null
      button.classList.remove('opened')
    } else {
      if (isVisible && bodyContent.classList.contains('visible')) {
        setTimeout(() => {
          bodyContent.style.overflow = 'visible'
        }, 100)
      }
      bodyContent.style.maxHeight = bodyContent.scrollHeight + "px";
      button.classList.add('opened')
    }
}
function openBodyHeight(bodyContent, button, isVisible = false) {
  if (bodyContent.style.maxHeight) {
    if (isVisible && bodyContent.classList.contains('visible')) {
      bodyContent.style.overflow = 'hidden'
    }
    bodyContent.style.maxHeight = null
    button.classList.remove('opened')
  } else {
    if (isVisible && bodyContent.classList.contains('visible')) {
      bodyContent.style.overflow = 'visible'
    }
    bodyContent.style.maxHeight = '100%';
    button.classList.add('opened')
  }
}
// btn-text
  const btnText = document.querySelector('.btn--text');
  const hiddenBody = document.querySelector('.hidden-body');
  if (btnText) {
    btnText.addEventListener('click', (e) => {
      animationHeight(hiddenBody, btnText)
    })

  }
// /end btn-text

// catalog
const btnCatalogItems = document.querySelectorAll('[btn-catalog]')
const hiddenBodieCatalog = document.querySelectorAll('.sidebar__body-block .block-body__body')[0];
const btnHideBigBody = document.querySelector('[btn-hide-body]');
const sidebarBody = document.querySelector('.sidebar__body');
if (btnCatalogItems.length) {
  animationHeight(hiddenBodieCatalog, btnCatalogItems[0]);
  btnCatalogItems.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const hiddenBody = e.currentTarget.closest('.sidebar__body-block').querySelector('.block-body__body')
      animationHeight(hiddenBody, e.currentTarget);
    })
  })
  btnHideBigBody.addEventListener('click', (e) => {
    openBodyHeight(sidebarBody, this)
  })
}
// /end catalog;
  const buttonsView = document.querySelectorAll('[btn-view]');
const catalogItem = document.querySelector('.catalog__products-products');
buttonsView.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.dataset.view === 'list') {
      catalogItem.classList.add('list')
      e.currentTarget.parentElement.querySelector('button[btn-view].active').classList.remove('active')
      e.currentTarget.classList.add('active')
    } else {
      e.currentTarget.parentElement.querySelector('button[btn-view].active').classList.remove('active')
      catalogItem.classList.remove('list')
      e.currentTarget.classList.add('active')
    }
  })
});
  ;
  const formAreas = document.querySelectorAll('.form__area');
if (formAreas.length) {
  formAreas.forEach(area => {
    area.addEventListener('keyup', function(e){
      console.log(e.target.scrollTop)
      if(e.target.scrollTop > 0){
        e.target.style.height = e.target.scrollHeight + "px";
      } else {
        e.target.style.height = 106 + "px";
      }
    });
  })
};
  document.body.addEventListener('click', (e) => {
  // selects
  const select = e.target.closest('.select');
  if (!select) {
    removeClassActive()
  }
  // /end selects

  // modal-btn
  const modalBtn = e.target.closest('[modal-btn]')
  const modalOverlay = document.querySelector('.modal-overlay')
  if (modalBtn) {
    e.preventDefault()
    const modal = document.querySelector(modalBtn.getAttribute('modal-btn'))
    if (modalBtn.getAttribute('modal-btn') === '#order-one') {
      const product = document.querySelector('.product--the-one')
      changeModalInfo(modal, product)
    }
    modalOverlay.classList.add('modal-overlay--show')
    showModal(modal)
  }
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay || e.target.closest('.modal__close')) {
      const modals = document.querySelectorAll('.modal')
      closeModal(modals)
    }
  })
  function showModal(modal) {
    modal.style.display = 'flex'
    setTimeout(() => {
      modal.classList.add('active')
    }, 200)
    document.body.classList.add('no-scroll')
  }
  function changeModalInfo(modal, target) {
    const productImg = target
      .querySelector('.product__img img')
      .getAttribute('src')
    const productTitle = target
      .closest('.container')
      .querySelector('.product-title').textContent
    const productPrice = target.getAttribute('data-price')
    modal.querySelector('.modal-info-title').value = productTitle
    modal.querySelector('.modal-info-price').value = productPrice
    modal.querySelector('.modal__title').textContent = productTitle
    const modalProductPrice = modal.querySelector('.modal__price .price')
    modalProductPrice.textContent = productPrice
    modal.querySelector('.modal__img img').setAttribute('src', productImg)
  }
  function closeModal(modals) {
    modals.forEach((modal) => {
      modal.classList.remove('active')
      modal.querySelectorAll('.modal__form').forEach((form) => form.reset())
      modal
        .querySelectorAll('small')
        .forEach((error) => error.classList.remove('error'))
      setTimeout(() => {
        modal.style.display = 'none'
        modalOverlay.classList.remove('modal-overlay--show')
      }, 300)
    })
    if (
      !mobileMenu.classList.contains('show') &&
      !document.querySelector('.catalog-menu--active')
    ) {
      document.body.classList.remove('no-scroll')
    }
  }
  // /end mdoal-btn
})
;

  // input-number
  const inputnumber = document.querySelectorAll('[input-number]');
  if (inputnumber.length) {
    inputnumber.forEach(input => {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
      })
    })
  }

  // /end input-number

  // header-search-show
  const headerSearch = document.querySelector('.header__search')
  const btnSearch = document.querySelector('[btn-show-search]');
  if (headerSearch) {
    btnSearch.addEventListener('click', (e) => {
      e.preventDefault()
      headerSearch.classList.add('show')
    })
  }
  // /end header-search-show
});