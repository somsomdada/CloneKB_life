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

});