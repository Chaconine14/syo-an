document.addEventListener('DOMContentLoaded',
    function () {
        const btn = document.querySelector('.js-lang-btn');
        const jpTexts = document.querySelectorAll('[data-lang="ja"]');
        const enTexts = document.querySelectorAll('[data-lang="en"]');
        const htmlLang = document.querySelector('html');


        // 初期表示は日本語
        let nowLang = 'ja';

        btn.addEventListener('click', () => {
            if (nowLang === 'ja') {
                // 日本語 → 英語
                jpTexts.forEach(function (item) {
                    item.style.display = 'none';
                });
                enTexts.forEach(function (item) {
                    item.style.display = '';
                });
                nowLang = 'en';
                updateBtn();
                htmlLang.lang = "en";
            } else {
                // 英語 → 日本語
                jpTexts.forEach(function (item) {
                    item.style.display = '';
                });
                enTexts.forEach(function (item) {
                    item.style.display = 'none';
                });
                nowLang = 'ja';
                updateBtn();
                htmlLang.lang = "ja";
            }
        });

        function updateBtn() {
            // 選択中の言語にアンダーラインをつける
            const spans = btn.querySelectorAll('span');
            spans.forEach(function (span) {
                span.style.textDecoration = 'none';
            });
            if (nowLang === 'ja') {
                spans[0].style.textDecoration = 'underline';
            } else {
                spans[2].style.textDecoration = 'underline';
            }
        }
    });
