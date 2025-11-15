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
