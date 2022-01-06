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
    // 메인 상품 메뉴를 클릭하면, 메뉴의 데이터탭 값을 가져와서 tab_id에 저장
  $('.main-product ul li').click(function(){
    var tab_id = $(this).attr('data-tab');
    //active가 들어가있는 메뉴,콘텐츠 영역에 active 지워주기 
    $('.main-product ul li').removeClass('active');
    $('.main-product .con-area').removeClass('active');
    // 클릭된 메뉴에 active 클래스 넣어주고
    // 받아온 (#+데이터탭)아이디 값에 active 넣어주기 
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
