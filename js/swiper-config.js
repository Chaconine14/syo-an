document.querySelectorAll('.p-swiper-wrap').forEach((wrap) => {

    // そのブロック内のスライダーを取得
    const thumbnailEl = wrap.querySelector('.slider-thumbnail');
    const sliderEl = wrap.querySelector('.slider');

    // サムネイル
    const sliderThumbnail = new Swiper(thumbnailEl, {
        slidesPerView: 4,
    });

    // 本体スライダー
    const slider = new Swiper(sliderEl, {
        loop: true,
        navigation: {
            nextEl: wrap.querySelector('.swiper-button-next'),
            prevEl: wrap.querySelector('.swiper-button-prev'),
        },
        thumbs: {
            swiper: sliderThumbnail,
        },
    });

});


//===============================
//メインビジュアルスワイパー
//===============================


const mvSwiper = new Swiper('.js-mv-swiper', {
    loop: true,
    effect: 'fade', // フェードでふわっと切り替え
    autoplay: {
        delay: 4000, // ちょっと余韻を持たせる
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
