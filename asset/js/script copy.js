// // 일주일간 보지 않기
// $(function(){
//   if (session.getUserInfo().name == null || session.getUserInfo().userType != "Subscribed") {
//       displayPopupCheck();
//   }
// });

// // 팝업
// function displayPopupCheck() {
//   cookiedata = document.cookie;
//   if ($(".popupCheck").length != 0) {
//       if (cookiedata.indexOf("ncookie=done") != -1) { // 7일간체크박스 Y
//           if (document.getElementById('emgCnt').value > 0) { // 긴급게시건 있을때
//               document.getElementById('popup').style.display = "block";
//               document.getElementById('viewChk').style.display = "none";
//           } else {
//               document.getElementById('popup').style.display = "none"; // 긴급게시건 없을때
//           }
//       } else {
//           document.getElementById('popup').style.display = "block";
//       }
//   } else {
//       document.getElementById('popup').style.display = "none";    // 건수없을때
//   }
// }

// function setCookie( name, value, expiredays ) {
// var todayDate = new Date();
// todayDate.setDate( todayDate.getDate() + expiredays );
// document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
// }

// function closeWin() {
// document.getElementById('popup').style.display = "none";
// }

// function todaycloseWin() {
// setCookie( "ncookie", "done" , 7 );
// document.getElementById('popup').style.display = "none";
// }

$(function(){

// 스와이프
var rollingSwiper = new Swiper('.swiperPopup', {
  /*effect: fade,
      fadeEffect: {crossFade:true},*/
  spaceBetween: 0,
  centeredSlides: true,
  speed: 400,
  onProgress: function(e){
    if(e.isBeginning){
      $('.custom-button.prev').hide();
    } else if(e.isEnd){
      $('.custom-button.next').hide();
    } else {
      $('.custom-button.prev').show();
      $('.custom-button.next').show();
    }
  }
});

if($(".swiper-slide").length == 1) {
  $('.custom-button.next').hide();
  $('.custom-button.prev').hide();
}

// 커스텀 버튼들에 기능 부여
$('.popup .contain .custom-buttons .custom-button.prev').on('click', function(event) {
  rollingSwiper.slidePrev();
});
$('.popup .contain .custom-buttons .custom-button.next').on('click', function(event) {
  rollingSwiper.slideNext();
});

function setCookie( name, value, expiredays ) {
  var todayDate = new Date();
  todayDate.setDate( todayDate.getDate() + expiredays );
  document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closeWin() {
  document.getElementById('popup').style.display = "none";
}

function todaycloseWin() {
  setCookie( "ncookie", "done" , 7 );
  document.getElementById('popup').style.display = "none";
}

$(function(){

  // 스와이프
  // var rollingSwiper = new Swiper('.swiper', {
  //     /*effect: fade,
  //     fadeEffect: {crossFade:true},*/
  //     spaceBetween: 0,
  //     centeredSlides: true,
  //     speed: 400,
  //     onProgress: function(e){
  //         if(e.isBeginning){
  //             $('.custom-button.prev').hide();
  //         } else if(e.isEnd){
  //             $('.custom-button.next').hide();
  //         } else {
  //             $('.custom-button.prev').show();
  //             $('.custom-button.next').show();
  //         }
  //     }
  // });
  //
  // if($(".swiper-slide").length == 1) {
  //     $('.custom-button.next').hide();
  //     $('.custom-button.prev').hide();
  // }

  // 커스텀 버튼들에 기능 부여
  // $('.popup .contain .custom-buttons .custom-button.prev').on('click', function(event) {
  //     rollingSwiper.slidePrev();
  // });
  // $('.popup .contain .custom-buttons .custom-button.next').on('click', function(event) {
  //     rollingSwiper.slideNext();
  // });

  // 전체메뉴 팝업 탭
  $('#pop-all .result ul li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('#pop-all .result ul li').removeClass('active');
      $('#pop-all .result-tbl .tab-con').removeClass('active');

      $(this).addClass('active');
      $("#"+tab_id).addClass('active');
  });

  // 전체메뉴
  $(' .btn-total').click(function(){
      $('#pop-all').show();
  });

  $('#pop-all .close').click(function(){
      $('#pop-all').hide();
  });

  $('#pop-sch .close').click(function(){
      $('#pop-sch').hide();
  });

  // 전체검색
  $('.header .nav-gnb .btn-sch').click(function(){
      $('#pop-sch').show();
      $('input[name="searchKeyword"]').focus();
  });

  $('#pop-sch .close').click(function(){
      $('#pop-sch').hide();
  });

  /* 하단
  $('#footer .f-m').click(function(){
      $('#footer .tot-menu').show();
  });

  $('body').on('click', function(e){
      if (!$(e.target).is('.f-m, .f-m span, .tot-menu, .f-menu2')) {
          $('#footer .tot-menu').hide();
      }
  });
  */

  // gnb
  $('#gnb a.depth-1').click(function(){
      $('#gnb a.depth-1').removeClass('active');
      $('#gnb .panel').hide();
      $(this).addClass('active');
      $(this).siblings('.panel').show();

      $('body').on('click', function(e){
          if (!$(e.target).is('.item, .depth-1, .panel, .s-area, .panel-col, .header .nav-gnb .panel p')) {
                $('#gnb .panel').hide();
                $('#gnb a.depth-1').removeClass('active');
          }
      });
  });

  $('#gnb .gnb-close').click(function(){
      $('#gnb .panel').hide();
      $('#gnb a.depth-1').removeClass('active');
  });

  // 상품 탭
  $('.main-product ul li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('.main-product ul li').removeClass('active');
      $('.main-product .con-area').removeClass('active');

      $(this).addClass('active');
      $("#"+tab_id).addClass('active');
  });

  // 라이프 탭
  $('.main-life ul li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('.main-life ul li').removeClass('active');
      $('.main-life .con-area').removeClass('active');

      $(this).addClass('active');
      $("#"+tab_id).addClass('active');
  });

  // 공지사항 롤링
  jQuery(function($)
  {
      var ticker = function()
      {
          timer = setTimeout(function(){
              $('.notice-area .rolling li:first').animate( {marginTop: '-30px'}, 600, function() {
                  $(this).detach().appendTo('.rolling').removeAttr('style');
              });
              ticker();
          }, 3000);
      };
      // 이전
      $(document).on('click','.notice-btn button.up',function() {
          $('.notice-area .rolling li:last').hide().prependTo($('.rolling')).slideDown();
          clearTimeout(timer);
          ticker();
      });

      // 다음
      $(document).on('click','.notice-btn button.down',function(){
          $('.notice-area .rolling li:first').animate( {marginTop: '-30px'}, 400, function() {
              $(this).detach().appendTo('.rolling').removeAttr('style');
          });
          clearTimeout(timer);
          ticker();
      });

      // 마우스를 올렸을 때 기능 정지
      var tickerover = function(event)
      {
          $('.rolling').mouseover(function(){
              clearTimeout(timer);
          });
          $('.rolling').mouseout(function(){
              ticker();
          });
      };
      tickerover();
      ticker();
  });
});

// 메인 스와이프
// function carousel($el, options) {
//
//     var _defaults = {
//         effect: 'fade',
//         fade: {
//             crossFade: true
//         },
//         slideClass: 'carousel-item',
//         wrapperClass: 'carousel-list',
//         nextButton: '.next',
//         prevButton: '.prev',
//         pagination: '.indicator',
//         paginationClickable: true,
//         simulateTouch: false,
//         a11y: true,
//         paginationBulletRender: function(index, className) {
//             return '<a href="javascript:void(0)" class="' + className + '">' + (index + 1) + '</a>';
//         },
//         bulletActiveClass: 'on',
//         loop: true,
//         autoplay: 5000,
//         onInit: function(s) {
//             var $el = s.container;
//             $el.find('.stop').on('click', function(e) {
//                 $(this).hide().next().show();
//                 s.stopAutoplay();
//             });
//             $el.find('.play').on('click', function() {
//                 $(this).hide().prev().show();
//                 s.startAutoplay();
//             });
//             this.getPage(s);
//         },
//
//         onTransitionStart: function(s) {
//             this.getPage(s);
//         },
//
//         getPage: function(s) {
//             var $el = s.container;
//             var $paging = $el.parent().find('.paging');
//             if ($paging.length < 1) return;
//             var realIndex = s.activeIndex;
//             var totalCount = s.slides.length;
//
//             if (this.loop) {
//                 totalCount = s.slides.length - 2;
//                 if (totalCount + 1 == s.activeIndex) {
//                     realIndex = 1;
//                 }
//                 if (s.activeIndex == 0) {
//                     realIndex = totalCount;
//                 }
//             } else {
//                 realIndex = realIndex + 1;
//             }
//
//             if (s.activeIndex == 0) {
//                 setTimeout(function() {
//                     $el.find('.swiper-pagination-bullet').removeAttr('title');
//                     $el.find('.swiper-pagination-bullet').eq(realIndex - 1).addClass('on').attr('title','');
//                 }, 0);
//             }else{
//                 setTimeout(function() {
//                     $el.find('.swiper-pagination-bullet').removeAttr('title');
//                     $el.find('.swiper-pagination-bullet').eq(realIndex - 1).attr('title','');
//                 }, 0);
//             }
//
//             if ($paging.length > 0) {
//                 $paging.find('.current').text(realIndex);
//                 $paging.find('.total').text(totalCount);
//             }
//         }
//     };
//
//     $el.each(function(n) {
//
//         var opts = $.extend({}, _defaults, options);
//
//         if ($(this).closest('[id*=recomDesign]').length > 0) {
//             opts.slidesPerView = 3;
//             opts.slidesPerColumn = 1;
//             opts.spaceBetween = 27;
//         }
//
//         if ($(this).closest('.carousel-matching-ins').length > 0) {
//             opts.onTransitionStart = function(s) {
//                 // console.log(this, s);
//                 var $el = s.container;
//                 var $pageContainer = $('.page-cont');
//                 var realIndex = s.activeIndex;
//                 var totalCount = s.slides.length;
//
//                 if (this.loop) {
//                     totalCount = s.slides.length - 2;
//                     if (totalCount + 1 == s.activeIndex) {
//                         realIndex = 1;
//                     }
//                     if (s.activeIndex == 0) {
//                         realIndex = totalCount;
//                     }
//                 }
//
//                 $pageContainer.hide();
//                 $pageContainer.eq(realIndex - 1).show();
//
//             }
//         }
//
//         if ($(this).find('.controller').length < 1 || $(this).find('.carousel-item').length == 1) {
//             opts.autoplay = false;
//             opts.loop = false;
//         }
//
//         if ($(this).find('.carousel-item').length == 1) {
//             $(this).find('.controller').hide();
//             $(this).find('.indicator').hide();
//         }
//
//
//         if (navigator.appVersion.indexOf('MSIE 9.0') !== -1) {
//             opts.loop = false;
//             opts.autoplay = false;
//             if ($(this).find('.controller').length > 0) {
//                 $(this).find('.controller').hide();
//             }
//         }
//
//
//         new Swiper($(this), opts);
//     });
// }

// if ($('.carousel').length > 0) {
//     carousel($('.carousel'));
// }




});