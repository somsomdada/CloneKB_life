$(function(){
// swiper-container div의 선택자가 너무 많아서 선택이 안됐음
  var mySwiper = new Swiper('.carousel.swiper', {
    loop: true,
    slidesPerView: 1,        
    autoplay: {
      delay: 3000, // animation과 시간 맞추기
    }, 
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  })

  $('.controller button').on('click',function(){
    // console.log('5555', $('.controller').hasClass('stop'));
    // 컨트롤러 클래스에 stop이 있으면
    if($('.controller').hasClass('stop')) {
      console.log ('재생');
      // stop클래스를 없애주고
      // $('.controller').removeClass('stop')
      stateStart();// 재생
    } else { 
      console.log ('정지');
      // stop클래스를 넣어주고
      // $('.controller').addClass('stop')
      stateStop();// 정지
    }
  });
  
  function stateStart() {
    mySwiper.autoplay.start();
    // 움직여야하니까 stop 빼주고
    $('.controller').removeClass('stop');
  }
  function stateStop() {
    mySwiper.autoplay.stop();
    // 멈춰야하니까 stop 넣어주고
    $('.controller').addClass('stop');    
  }

    // 상품 탭
  $('.main-product ul li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.main-product ul li').removeClass('active');
    $('.main-product .con-area').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });


});
