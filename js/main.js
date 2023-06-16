$(function(){

    $('.slide').slick({
        autoplay:true, //자동재생
        arrows:false, //좌우버튼
        dots:true, //페이지버튼
        slidesToShow:2, //보여줄 작품 수
        slidesToScroll:1 //작품 하나씩 넘기기
    });

    $('.slide li #slick-slide-control00').text("충남내포신도시 2차 대방 엘리움")
    $('.slide li #slick-slide-control01').text("부산에코델타시티 1차")
    $('.slide li #slick-slide-control02').text("화성동탄 문화복합")
    $('.slide li #slick-slide-control03').text("화성동탄 3차 문화복합")
    $('.slide li #slick-slide-control04').text("굉장하고 엄청난 무언가")
    $('.slide li #slick-slide-control05').text("대충 대단한 제목")

    Splitting();

})