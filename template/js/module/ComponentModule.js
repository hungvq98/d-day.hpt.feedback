export default function ComponentModule() {
  const speed = 300;
  // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
  const hash = window.location.hash;
  if ($(hash).length) scrollToID(hash, speed);
  // TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
  $('.menu-nav .menu-list .menu-link').on('click', function (e) {
    e.preventDefault();

    const href = $(this).find('> a').attr('href') || $(this).attr('href');
    const id = href.slice(href.lastIndexOf('#'));
    if ($(id).length) {
      scrollToID(id, speed);
    } else {
      // window.location.replace(/${id});
      window.location.href = href;
    }
  });
  // HÀM SCROLL CHO MƯỢT MÀ
  function scrollToID(id, speed) {
    const offSet = $('.hd').outerHeight();
    const section = $(id).offset();
    const targetOffset = section.top - offSet - 0;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
  }

  const files = document.getElementById("inputFile")
  if (files) {
    files.addEventListener("change", function () {
      var file = this.files[0];
      if (file) {
        var imageNameSpan = document.getElementById("imageName");
        imageNameSpan.textContent = file.name;
      }
    });
  }


  // Copy
  const copyBtn = document.querySelectorAll(".copyJS")
  if (copyBtn) {
    copyBtn.forEach(item => {
      const copyTxt = item.querySelector(".txt")
      item.addEventListener("click", (e) => {
        e.preventDefault();
        copyUrl();
      })
      function copyUrl() {
        const url = window.location.href; // Lấy URL hiện tại
        navigator.clipboard.writeText(url)
          .then(() => {
            item.classList.add("active");
            setTimeout(() => {
              item.classList.remove("active");
            }, 500)
          })
      }
    })

  }



  // Menu Sidebar
  $(".menu-item").each(function () {
    if ($(this).children(".submenu").length > 0) {
      $(this).addClass("dropdown");
      $(this)
        .children(".menu-link")
        .append(
          ' <i class="fa-solid fa-chevron-down toggle-icon" style="cursor:pointer;"></i>'
        );
    }
  });

  // Click vào icon mới mở submenu
  $(".menu-link .toggle-icon").click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    const parentItem = $(this).closest(".menu-item");
    const submenu = parentItem.children(".submenu");

    // Toggle submenu của mục đang click
    submenu.slideToggle(function () {
      // Sau khi hoàn tất slideToggle
      if (submenu.is(":visible")) {
        parentItem.addClass("active");
      } else {
        parentItem.removeClass("active");
      }
    });

    parentItem.toggleClass("open");
  });



  function detectInView() {
    const elements = document.querySelectorAll('.checkViewJS');
    elements.forEach(el => {
      const dataOffset = el.getAttribute('data-offset') || 1;
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < (window.innerHeight / dataOffset) &&
        rect.bottom > 0;

      if (inView) {
        el.classList.add('inview');
      } else {
        el.classList.remove('inview');
      }
    });
  }

  // Gọi khi cuộn hoặc resize
  window.addEventListener("load", detectInView);
  window.addEventListener('scroll', detectInView);
  window.addEventListener('resize', detectInView);

  // Gọi khi DOM đã sẵn sàng
  document.addEventListener('DOMContentLoaded', detectInView);
  // item solu
  const itemSolu = document.querySelectorAll(".item-solu")
  if (itemSolu) {
    itemSolu.forEach(item => {
      const infoBtn = item.querySelector(".info-btn")
      const itemHeight = item.offsetHeight
      item.setAttribute("style", `--max-height: ${itemHeight}px;`)
      infoBtn.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          $(itemSolu).removeClass("active")
          item.classList.remove("active")
        } else {
          $(itemSolu).removeClass("active")
          item.classList.add("active")
        }
      })
    })
  }


  function initScrollAnimation() {
    const $inner = $(".scrollJS .itemScroll");
    addClones();
    $inner.css({ "animation-play-state": "running" });

    function addClones() {
      $inner.each(function () {
        const $wrap = $(this);
        const $cards = $wrap.children().clone().addClass("clone");
        $wrap.append($cards);
      });
    }
  }

  initScrollAnimation();
  let speedGrids = [];
  const gridWidth = document.querySelectorAll(".slideJs");
  function getWidthGrid() {
    document.querySelectorAll(".getHeightGrid").forEach((e, s) => {
      e.style = `--height:${e.getBoundingClientRect().height}px; --speedGrid:${speedGrids[s]
        }s`;
    });
  }
  gridWidth.forEach((e) => {
    e = e.clientHeight / 150;
    speedGrids.push(e);
  }),
    getWidthGrid(),
    window.addEventListener("resize", () => {
      getWidthGrid();
    });



  // item Scale JS
  const itemScaleJS = document.querySelectorAll(".itemScaleJS")
  if (itemScaleJS) {
    itemScaleJS.forEach(item => {
      const itemScaleJSIt = item.querySelectorAll(".itemScaleJS-it")
      const itemActiveHeight = item.querySelector(".itemScaleJS-it.active").offsetHeight
      itemScaleJSIt.forEach(it => {
        const itemHeight = it.offsetHeight;
        it.setAttribute("style", `--height: ${itemActiveHeight}px;`)
        it.addEventListener("click", () => {
          itemScaleJSIt.forEach(it => {
            it.classList.remove("active")
          })
          it.classList.add("active")
        })
      })
    })
  }


  $(document).ready(function () {
    $(".itemVideoJs").click(function (e) {
      e.preventDefault();
      let video = $(this).find(".itemVideoMainJs video")[0];
      let thumb = $(this).find(".itemVideoThumbJs")
      let icon = $(this).find("i");
      if (video.paused) {
        video.play();
        $(this).addClass("playing")
        icon.removeClass("fa-play").addClass("fa-pause");
      } else {
        video.pause();
        $(this).removeClass("playing")
        icon.removeClass("fa-pause").addClass("fa-play");
      }
    });
  });

  const items = document.querySelectorAll('.homes-tech__item');
  const tooltipContainer = document.getElementById('tooltip-container');
  if (items && tooltipContainer) {
    items.forEach(item => {
      item.addEventListener('mouseover', function () {
        // Lấy nội dung tooltip từ phần tử .info
        console.log("enter");

        const infoContent = item.querySelector('.info').innerHTML;

        // Đặt nội dung vào #tooltip-container
        tooltipContainer.innerHTML = infoContent;
        tooltipContainer.style.transform = 'scale(1)';
        tooltipContainer.style.opacity = '1';

        // Lấy vị trí của item
        const rect = item.getBoundingClientRect();
        const itemWidth = rect.width;
        const itemHeight = rect.height;
        const itemTop = rect.top + window.scrollY;
        const itemLeft = rect.left + window.scrollX;

        // Lấy kích thước của tooltip
        const tooltipWidth = tooltipContainer.offsetWidth;
        const tooltipHeight = tooltipContainer.offsetHeight;

        // Tính toán vị trí của tooltip
        let top = itemTop - tooltipHeight - 10; // 10px trên item
        let left = itemLeft + (itemWidth / 2) - (tooltipWidth / 2); // Canh giữa tooltip

        // Điều chỉnh nếu tooltip ra ngoài màn hình
        if (left + tooltipWidth > window.innerWidth) {
          left = window.innerWidth - tooltipWidth - 10;
        }
        if (left < 0) {
          left = 10;
        }
        if (top < window.pageYOffset) {
          top = itemTop + itemHeight + 10; // Hiển thị dưới item nếu vượt ra trên
        }

        // Đặt vị trí cho tooltip
        tooltipContainer.style.top = `${top}px`;
        tooltipContainer.style.left = `${left}px`;
      });

      item.addEventListener('mouseleave', function () {
        tooltipContainer.style.transform = 'scale(0)'; // Ẩn tooltip khi di chuyển ra ngoài item
        tooltipContainer.style.opacity = '0'; // Ẩn tooltip khi di chuyển ra ngoài item
      });
    });
  }

}
