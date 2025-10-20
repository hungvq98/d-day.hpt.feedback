export default function SwiperModule() {
  function functionSlider(element, customizeOption, typePagi) {
    const swiperSlider = document.querySelectorAll(element);
    if (swiperSlider) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");
        if (!typePagi) {
          typePagi = "bullets";
        }
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true,
          },
          ...customizeOption,
        });
      });
    }
  }

  functionSlider(".element", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 24,
    effect: "slide",
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        freeMode: true,
      },
      500: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // =================Splide
  const splides = document.querySelectorAll(".logoSplide .splide")
  if (splides) {
    splides.forEach((splidex, index) => {
      new Splide(splidex, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perMove: 1,
        perPage: 9,
        gap: 24,
        direction: index == 1 ? "rtl" : "ltr",
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          0: {
            perPage: 4,
            gap: 12,
          },
          600: {
            perPage: 4,
            gap: 12,
          },
          951: {
            perPage: 6,
            gap: 12,
          },
          1201: {
            perPage: 8,
            gap: 24,
          }
        },
      }).mount(window.splide.Extensions);
    })
  }

  const twosplides = document.querySelectorAll(".twoSplide .splide")
  if (twosplides) {
    twosplides.forEach((splidex, index) => {
      new Splide(splidex, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perMove: 1,
        perPage: 5,
        direction: index == 1 ? "rtl" : "ltr",
        gap: 16,
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          420: {
            perPage: 3,
          },
          501: {
            perPage: 3,
          },
          769: {
            perPage: 4,
            gap: 10,
          },
          1201: {
            perPage: 4,
            gap: 12,
          }
        },
      }).mount(window.splide.Extensions);
    })
  }

  const splideBrands = document.querySelectorAll(".homes-bn-splide .splide")
  if (splideBrands) {
    splideBrands.forEach((splidex, index) => {
      new Splide(splidex, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perMove: 1,
        perPage: 7,
        gap: 24,
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          0: {
            perPage: 4,
            gap: 12,
          },
          600: {
            perPage: 4,
            gap: 12,
          },
          951: {
            perPage: 6,
            gap: 12,
          },
          1201: {
            perPage: 7,
            gap: 24,
          }
        },
      }).mount(window.splide.Extensions);
    })
  }

  functionSlider(".homes-banner ", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });


  // const detectView = window.innerWidth > 1200;
  const detectView = false;
  const swiperVs = new Swiper('.homes-slideV__swiper .swiper', {
    // direction: 'vertical',       
    slidesPerView: 1,
    centeredSlides: true,
    allowTouchMove: detectView ? false : true,
    speed: 700,
    freeMode: false,
    effect: "fade",
    navigation: {
      nextEl: '.homes-slideV .swiper-next',
      prevEl: '.homes-slideV .swiper-prev',
    },
    pagination: {
      el: '.homes-slideV .swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  if (detectView) {
    console.log("gsap");
    
    const total = swiperVs.slides.length;
    let isAnimating = false;

    const st = ScrollTrigger.create({
      id: "homes-slideV",
      trigger: ".homes-slideV",
      start: "top 15%",
      end: () => "+=" + (total - 1) * window.innerHeight,
      pin: true,
      scrub: 1,
      // 3) Map progress -> index slide (0..total-1), rồi slideTo duy nhất khi đổi index
      onUpdate: (self) => {
        const p = self.progress; // 0..1 trong vùng pin
        const targetIndex = Math.round(p * (total - 1));
        if (!isAnimating && targetIndex !== swiperVs.activeIndex) {
          isAnimating = true;
          swiperVs.slideTo(targetIndex, 600);
          swiperVs.once('transitionEnd', () => { isAnimating = false; });
        }
      },
      // 4) Bật snap theo tỉ lệ số slide: 1 cuộn = 1 slide (cảm giác “one scroll per slide”)
      snap: {
        snapTo: (value) => {
          const idx = Math.round(value * (total - 1));
          return idx / (total - 1);
        },
        duration: { min: 0.2, max: 0.6 },
        ease: "power1.out"
      }
    });

    window.addEventListener('resize', () => {
      st.refresh();
    });
  }



  functionSlider(".homes-speaker__slide", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });
  functionSlider(".homes-news__slide", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });
  functionSlider(".homes-three__slide", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });
}




